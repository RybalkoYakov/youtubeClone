import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Box} from '@mui/material';
import {ChannelCard, Videos} from './index'
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {IVideo} from "./Videos";

export interface IChannelDetail {
  kind: string
  id: string
  snippet: {
    title: string
    description: string
    customUrl: string
    publishedAt: string
    thumbnails: {
      default: {
        url: string
        "width": number
        "height": number
      }
      medium: {
        url: string
        "width": number
        "height": number
      }
      high: {
        url: string
        "width": number
        "height": number
      }
    }
    localized: {
      title: string
      description: string
    }
    country: string
  }
  contentDetails: {
    relatedPlaylists: {
      likes: string
      uploads: string
    }
  }
  statistics: {
    viewCount: string
    subscriberCount: string
    hiddenSubscriberCount: boolean
    videoCount: string
  }
  brandingSettings: {
    channel: {
      title: string
      description: string
      keywords: string
      unsubscribedTrailer: string
      country: string
    }
    image: {
      bannerExternalUrl: string
    }
  }
}

export interface IFetchedChannelDetailData {
  kind: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: IChannelDetail[]
}

const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState<IChannelDetail>()
  const [videos, setVideos] = useState<IVideo[]>()

  useEffect(()=> {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data : IFetchedChannelDetailData) => {
        setChannelDetail(data?.items[0])
      })

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items)
      })
  },[id])


  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div
          style={
          {
            background: 'linear-gradient(90deg, rgba(0,35,36,1) 0%, rgba(16,215,255,1) 0%, rgba(224,46,170,1) 100%)',
            zIndex: 10,
            height: 300
          }}
        />
        {channelDetail &&  <ChannelCard marginTop={'-110px'} channelDetail={channelDetail}/>}
      </Box>
      <Box display={'flex'} p="2">
        <Box sx={{mr: {sm: '100px'}}}/>
        {videos && <Videos videos={videos}/>}
      </Box>
    </Box>
  );
};

export default ChannelDetail;