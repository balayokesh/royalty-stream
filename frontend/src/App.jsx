import './App.css'
import DashboardHeader from './routes/youtube-components/DashboardHeader'
import SignIn from './routes/youtube-components/SignIn';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Youtube from './routes/Youtube';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [youtubeData, setYoutubeData] = useState([]);

  useEffect(() => {
    const savedToken = localStorage.getItem('accessToken');
    if (savedToken) setAccessToken(savedToken);
    if (youtubeData.length === 0 && savedToken) {
      fetchYouTubeVideos(savedToken);
    }
  }, []);

  const fetchYouTubeVideos = async (access_token) => {
    try {
      console.log(accessToken);
      // Step 1: Get uploads playlist ID from channel details
      const channelResponse = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true`,
        { headers: { Authorization: `Bearer ${access_token}` } }
      );
      const uploadsPlaylistId =
        channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

      // Step 2: List videos in uploads playlist to get video IDs and titles
      const playlistResponse = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
          params: {
            part: "snippet",
            playlistId: uploadsPlaylistId,
            maxResults: 50,
          },
        }
      );
      const videos = playlistResponse.data.items;

      // Extract video IDs
      const videoIds = videos.map((v) => v.snippet.resourceId.videoId).join(",");

      // Step 3: Get video statistics by video IDs
      const statsResponse = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
          params: {
            part: "statistics",
            id: videoIds,
          },
        }
      );

      const videoStatsMap = {};
      statsResponse.data.items.forEach((video) => {
        videoStatsMap[video.id] = video.statistics;
      });

      // Step 4: Map to final array with title, views, and revenue (set 0 for now)
      const finalData = videos.map((video) => ({
        title: video.snippet.title,
        views: parseInt(videoStatsMap[video.snippet.resourceId.videoId]?.viewCount || 0, 10),
        revenue: 0.0,
      }));

      setYoutubeData(finalData);
      console.log("Fetched YouTube Data:", finalData);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  };

  if (!accessToken) {
    return <SignIn onLogin={(token) => { setAccessToken(token); fetchYouTubeVideos(token); }} />;
  }

  return (
    <div id='main'>
      <DashboardHeader setAccessToken={setAccessToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youtube" element={<Youtube accessToken={accessToken} youtubeData={youtubeData} />} />
        <Route path="/twitter" element={<div>Twitter Analytics Coming Soon!</div>} />
      </Routes>
    </div>
  );
}

export default App;
