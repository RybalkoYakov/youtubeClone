import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {Link} from 'react-router-dom';
import {demoProfilePicture} from "../utils/constants";
import {IChannelDetail} from "./ChannelDetail";

export interface IChannelCardDetail {
  id: {
    kind: string
    channelId: string
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
  statistics: {
    subscriberCount: string
  }
}

export interface IChannelCardProps {
  channelCardDetail?: IChannelCardDetail
  channelDetail?: IChannelDetail
  marginTop?: string
}

const ChannelCard = (props: IChannelCardProps) => {
  const {channelCardDetail, channelDetail, marginTop} = props

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto',
        marginTop: marginTop
      }}
    >
      <Link to={`/channel/${channelCardDetail?.id?.channelId || channelDetail?.id}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <CardMedia
            image={channelCardDetail?.snippet.thumbnails.high.url|| channelDetail?.snippet.thumbnails.high.url || demoProfilePicture}
            sx={{borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid #e3e3e3'}}
          />
          <Typography variant={"h6"}>
            {channelCardDetail?.snippet?.title || channelDetail?.snippet.title}
            <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
