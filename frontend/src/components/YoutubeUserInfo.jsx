import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

function YouTubeUserInfo({ accessToken }) {
  const [channelName, setChannelName] = useState("");
  const [subscribers, setSubscribers] = useState(0);
  const [channelUrl, setChannelUrl] = useState("");

  useEffect(() => {
    if (!accessToken) return;

    async function fetchChannelInfo() {
      try {
        const response = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/channels",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: { part: "snippet,statistics", mine: "true" },
          }
        );

        const channel = response.data.items[0];
        setChannelName(channel.snippet.title);
        setSubscribers(parseInt(channel.statistics.subscriberCount, 10));
        setChannelUrl(`https://www.youtube.com/channel/${channel.id}`);
      } catch (error) {
        console.error("Error fetching channel info:", error);
      }
    }

    fetchChannelInfo();
  }, [accessToken]);

  if (!channelName) {
    return <Typography>Loading user info...</Typography>;
  }

  const openChannel = () => {
    if (channelUrl) {
      window.open(channelUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, my: 4 }}>
      <Card variant="outlined" sx={{ p: 2 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6">Hi, {channelName}</Typography>
            <Typography variant="body2" color="text.secondary">
              Subscribers: {subscribers.toLocaleString()}
            </Typography>
          </Box>
          <IconButton
            aria-label="Go to YouTube Channel"
            onClick={openChannel}
            size="large"
            color="error"
          >
            <YouTubeIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
}

export default YouTubeUserInfo;
