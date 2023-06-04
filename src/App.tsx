import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Box} from "@mui/material";

import {ChannelDetail, Feed, Navbar, VideoDetail, SearchFeed} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: "#000"}}>
        <Navbar/>
        <Routes>
          <Route path={"/youtubeClone"} element={<Feed/>}/>
          <Route path={"/youtubeClone/video/:id"} element={<VideoDetail/>}/>
          <Route path={"/youtubeClone/channel/:id"} element={<ChannelDetail/>}/>
          <Route path={"/youtubeClone/search/:searchTerm"} element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
