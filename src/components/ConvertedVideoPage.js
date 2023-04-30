import React from "react";
import { useLocation } from "react-router-dom";

function ConvertedVideoPage() {
  const location = useLocation();
  const videoUrl = location.state && location.state.videoUrl;

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{margin:100, textAlign: 'center', marginTop:20}}>Converted Video</h1>
    
      {videoUrl && <video src={videoUrl} width="400" height="300" controls />}
      <br></br>
      <div style={{height:20}}></div>

      {videoUrl && 
        <audio 
          src={`${window['apiLocation']}/result`}
          autoPlay={true} 
          controls 
          name="media"
          type="audio/mp3"
        />
      }
      <p>This is the text generated from audio</p>

    </div>
  );
}

export default ConvertedVideoPage;
