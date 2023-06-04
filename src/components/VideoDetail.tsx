import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import ReactPlayer from "react-player";
import {Typography, Box, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {CircularProgress} from "@mui/material";

import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Videos} from "./index";
import {IVideo} from "./Videos";

interface IVideoDetail {
  kind: string
  items: [
    {
      kind: string
      id: string
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
          }
          medium: {
            url: string
            width: number
            height: number
          }
          high: {
            url: string
            width: number
            height: number
          }
          standard: {
            url: string
            width: number
            height: number
          }
        }
        channelTitle: string
        tags: string[]
        categoryId: string
        liveBroadcastContent: string
        localized: {
          title: string
          description: string
        }
        defaultAudioLanguage: string
      }
      contentDetails: {
        duration: string
        dimension: string
        definition: string
        caption: string
        licensedContent: boolean
        contentRating: {}
        projection: string
      }
      statistics: {
        viewCount: string
        likeCount: string
        favoriteCount: string
        commentCount: string
      }
    }
  ]
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

interface IRelatedVideos {
  items : [
    {
      kind: string,
      id: {
        kind: string,
        videoId: string
      }
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
          }
          medium: {
            url: string
            width: number
            height: number
          }
          high: {
            url: string
            width: number
            height: number
          }
        }
        channelTitle: string
        liveBroadcastContent: string
        publishTime: string
      }
    }
  ]
  kind: string
  nextPageToken: string
  pageInfo:{
    totalResults: number
    resultsPerPage: number
  }
  regionCode: string
}

const VideoDetail = () => {
  const {id} = useParams();

  const [videoDetail, setVideoDetail] = useState<IVideoDetail>({} as IVideoDetail);
  const [relatedVideos, setRelatedVideos] = useState<IRelatedVideos>({} as IRelatedVideos)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((detail : IVideoDetail) => {
      setVideoDetail(detail)
    })

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((related : IRelatedVideos) => {
        setRelatedVideos(related)
      })
  }, [id])


  if (Object.keys(videoDetail).length === 0) return (
    <Box
      minHeight={'95vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CircularProgress size={150}/>
    </Box>
  )

  const {snippet : {title, channelTitle, channelId}, statistics : {viewCount, likeCount}} = videoDetail.items[0]

  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{height: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://youtube.com/watch?v=${id}`} className={'react-player'} controls/>
            <Typography color={'#fff'} variant={'h5'} fontWeight={'bold'} p={2}>{title}</Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              sx={{color: '#fff'}}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={'h6'} color={'#fff'} display={'flex'} justifyContent={'center'}>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '0.8rem', padding: '.5rem', color:'gray'}}/>
                </Typography>
              </Link>
              <Stack direction={'row'} alignItems={'center'} gap={'2rem'}>
                <Typography variant={'body1'} sx={{opacity: .7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant={'body1'} sx={{opacity: .7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent={'center'} alignItems={'center'}>
          {relatedVideos.items && <Videos direction={'column'} videos={relatedVideos.items as IVideo[]}/>}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
