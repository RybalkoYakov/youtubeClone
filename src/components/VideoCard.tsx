import {Link} from 'react-router-dom'
import {Typography, Card, CardContent, CardMedia} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl} from "../utils/constants";

interface IVideoDetail {
  id: {
    kind: string
    videoId: string
  }
  kind: string
  snippet: {
    channelId: string
    channelTitle: string
    description: string
    liveBroadcastContent: string
    publishTime: string
    publishedAt:string
    title: string
    thumbnails: {
      default: {
        url: string
        width: number
        height: number
      }
      high: {
        url: string
        width: number
        height: number
      }
      medium:{
        url: string
        width: number
        height: number
      }
    }
  }
}

interface IVideoCardProps {
  video: IVideoDetail
}

const VideoCard = (props: IVideoCardProps) => {
  const {video} = props

  return (
    <Card sx={{width: {xs: 'auto',sm: '358px', md: '320px'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        sx={{width: {
            xs: '100%', sm: '358px', md: '320px'
          }, height: 180}}
      />
      </Link>
      <CardContent
        sx={{backgroundColor: '#1e1e1e', height: 106}}
      >
        <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
          <Typography
            variant={'subtitle1'}
            fontWeight={'bold'}
            color={'#fff'}
          >
            {video.snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={video?.snippet?.channelId ? `/channel/${video?.snippet?.channelId}` : demoChannelUrl}>
          <Typography
            variant={'subtitle2'}
            fontWeight={'bold'}
            color={'gray'}
          >
            {video.snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
