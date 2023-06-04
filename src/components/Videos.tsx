import {Stack, Box} from "@mui/material";
import {VideoCard, ChannelCard} from "./index";

export interface IVideo {
  kind: string,
  id: {
    kind: string
    videoId: string
  },
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
        width: number
        height: number
      },
      medium: {
        url: string
        width: number
        height: number
      },
      high: {
        url: string
        width: number
        height: number
      }
    },
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
  }
}

export interface IVideosProps {
  videos: IVideo[],
  direction?: direction
}

type direction  = 'column'| 'row'

const Videos = (props: IVideosProps) => {
  const {videos, direction} = props

  return (
    <Stack direction={direction || 'row'} flexWrap={'wrap'} justifyContent={'center'} gap={2}>
      {videos.map((item: any, index: number) => (
        <Box key={index}>
          {(item.id.videoId || item.id.playlistId) && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelCardDetail={item}/>}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
