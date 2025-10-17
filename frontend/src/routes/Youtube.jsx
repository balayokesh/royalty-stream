import YouTubeUserInfo from './youtube-components/YoutubeUserInfo';
import SummaryStats from './youtube-components/SummaryStats';
import EarningsTable from './youtube-components/EarningsTable';

function Youtube(props) {
    const { accessToken, youtubeData } = props;
    return (
        <div>
            <div id="App">
                <YouTubeUserInfo accessToken={accessToken} />
                <SummaryStats youtubeData={youtubeData} />
                <EarningsTable youtubeData={youtubeData} />
            </div>
        </div>
    );
}

export default Youtube;
