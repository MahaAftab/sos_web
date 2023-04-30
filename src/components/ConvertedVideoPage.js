// import React from "react";
// import { VideoPlayer } from "./audio";
// import audio from './file_example_MP3_700KB.mp3'

// function ConvertedVideoPage() {//{ location }

//   const audioUrl = 'https://file-examples.com/storage/fe21053bab6446bba9a0947/2017/11/file_example_MP3_700KB.mp3';


//   return (
//     <div style={{textAlign:'center'}}>
//       <h1 style={{width:400, height:300}}>Converted Video</h1>
    
//       {/* <video src={videoUrl} width="400" height="300" controls /> */}
//       <VideoPlayer
//         src={audioUrl}
//         autoplay
//         controls
//         name="media"
//         type="audio/mpeg"
//       />
//     </div>
//   );
// }

// export default ConvertedVideoPage;

import React from "react";
import { useLocation } from "react-router-dom";
import { VideoPlayer } from "./audio";
import audio from './file_example_MP3_700KB.mp3'
import { Button } from "@mui/material";

function ConvertedVideoPage() {
  const location = useLocation();
  const videoUrl = location.state && location.state.videoUrl;

  const audioUrl = 'https://file-examples.com/storage/fe21053bab6446bba9a0947/2017/11/file_example_MP3_700KB.mp3';

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{margin:100, textAlign: 'center', marginTop:20}}>Converted Video</h1>
    
      {videoUrl && <video src={videoUrl} width="400" height="300" controls />}
      <br></br>
      <div style={{height:20}}></div>
      {videoUrl && (
        <VideoPlayer
          // src={audioUrl}
          controls
          name="media"
          type="audio/mpeg"
        />
      )}
      <p>This is the text from audio</p>
      <Button variant="contained">Download Now</Button>
      <Button>Share Now</Button>
    </div>
  );
}

export default ConvertedVideoPage;
