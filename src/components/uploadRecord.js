import { Button } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from "react-router-dom";

function UploadRecord(props) {
  const [video, setVideo] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [stopButtonClicked, setStopButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setVideo(URL.createObjectURL(file));
  };

  const handleRecord = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    const recorder = new MediaRecorder(stream);
    recorder.addEventListener('dataavailable', handleDataAvailable);
    recorder.start();
    setMediaRecorder(recorder);
    setStopButtonClicked(false);
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setRecordedChunks([...recordedChunks, event.data]);
    }
  };

  const handleStopRecord = () => {
    mediaRecorder.stop();
    mediaRecorder.stream.getVideoTracks()[0].stop();
    mediaRecorder.stream.getAudioTracks()[0].stop();
    setStopButtonClicked(true);
  };

  
  const handleUploadRecorded = async () => {
    let videoUrl;
    if (video) {
      videoUrl = video;
    } else if (recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, { type: 'video/mp4' });
      videoUrl = URL.createObjectURL(blob);
    }
  
    try {
      const formData = new FormData();
      formData.append('file', await fetch(videoUrl).then(res => res.blob()), 'video.mp4');
  
      const response = await fetch('https://870b-111-68-106-39.ngrok.io/upload', {
        method: 'POST',
        body: formData
      });
  
      console.log(response);
  
      navigate('/converted-page', {
        state: {
          videoUrl: videoUrl
        }
      });
  
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 style={{fontWeight: 700, color: 'rgb(12, 48, 125)', marginTop:20, textAlign:'center'}}>Upload or Record Video</h1>
      <Box
        sx={{
          height: '65vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'white',
        }}
      >
        <div style={{background: 'rgb(217, 213, 212)', paddingLeft:10,paddingTop:10, paddingBottom:10, paddingRight:0, margin:10,  borderRadius: 20,color:'black',height: '50px',}}>
          <input type="file" accept=".mp4" onChange={handleUpload} />
        </div>
        <br />
        {!mediaRecorder && 
          <Button
            variant="contained"
            onClick={handleRecord}
            startIcon={<FiberManualRecordIcon />}
            sx={{
              backgroundColor: 'rgb(217, 213, 212)',
              color: 'black',
              width: '210px',
              height: '50px',
              fontSize: '18px',
              borderRadius: 5,
              '&:hover': {
                backgroundColor: 'rgb(194, 189, 188)',
              },
            }}
          >
            Record
          </Button>
        }
        {mediaRecorder && !stopButtonClicked &&
          <Button style={{color:'red'}} onClick={handleStopRecord}>Stop Recording</Button>
        }
        <br />
        {recordedChunks.length > 0 && (
          <div>
            <video src={URL.createObjectURL(new Blob(recordedChunks, { type: 'video/mp4' }))} width="400" height="300" controls />
</div>
)}
    {(video || recordedChunks.length > 0) && (
      <Button
        sx={{
          backgroundColor: 'rgb(217, 213, 212)',
          color: 'black',
          width: '210px',
          height: '50px',
          fontSize: '18px',
          marginLeft: 10,
          borderRadius: 5,
          '&:hover': {
            backgroundColor: 'rgb(194, 189, 188)',
          },
        }}
        variant="contained"
        disabled={!video && recordedChunks.length === 0}
        onClick={handleUploadRecorded}
      >
        Upload
      </Button>
    )}

    {stopButtonClicked &&
      <Button style={{color:'red'}} disabled>Stop Recording</Button>
    }
  </Box>
</div>
);
}

export default UploadRecord;




  // const handleUploadRecorded = async () => {
  //   let videoUrl;
  //   if (video) {
  //     videoUrl = video;
  //   } else if (recordedChunks.length > 0) {
  //     const blob = new Blob(recordedChunks, { type: 'video/mp4' });
  //     videoUrl = URL.createObjectURL(blob);
  //   }
  
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', await fetch(videoUrl).then(res => res.blob()), 'video.mp4');
  
  //     const response = await fetch('https://c66d-111-68-106-39.ngrok.io/upload', {
  //       method: 'POST',
  //       body: formData
  //     });
  
  //     console.log(response);
  
  //     const audioResponse = await fetch('https://c66d-111-68-106-39.ngrok.io/result',{
  //       method: 'GET',
  //       mode: 'no-cors',

  //       headers: {
  //         'Content-Type': 'audio/mp3'
  //       }
  //     });
  
  //     if (audioResponse.status === 200) {
  //       const audioBlob = await audioResponse.blob();
  //       const audioUrl = URL.createObjectURL(audioBlob);

  //       const audiosUrl = window.URL.createObjectURL(new Blob([response.data]));
  //   //    setAudioURI(audiosUrl);

  //       // console.log(soundData);
  //       console.log(audioUrl);
  //       console.log(audiosUrl);
  //     } else {
  //       throw new Error('Failed to fetch audio data');
  //     }
  
  //     navigate('/converted-page', {
  //       state: {
  //         videoUrl: videoUrl
  //       }
  //     });
  
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


//   const handleUploadRecorded = () => {
//     const blob = new Blob(recordedChunks, { type: 'video/mp4' });
//     const formData = new FormData();
//     formData.append('video', blob);
//     fetch('/api/upload', { method: 'POST', body: formData })
//       .then((response) => console.log(response))
//       .catch((error) => console.error(error));
//     navigate('/converted-page')
    
//   };



  // const handleUploadRecorded = async () => {
  //   let videoUrl;
  //   if (video) {
  //     videoUrl = video;
  //   } else if (recordedChunks.length > 0) {
  //     const blob = new Blob(recordedChunks, { type: 'video/mp4' });
  //     videoUrl = URL.createObjectURL(blob);
  //   }
  
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', await fetch(videoUrl).then(res => res.blob()), 'video.mp4');
  
  //     const response = await fetch('https://2dfe-111-68-106-39.ngrok.io/upload', {
  //       method: 'POST',
  //       body: formData
  //     });
  
  //     const { audioUrl } = await response.json();
  
  //     navigate('/converted-page', {
  //       state: {
  //         videoUrl: videoUrl,
  //         audioUrl: audioUrl
  //       }
  //     });
  
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  // const handleUploadRecorded = () => {
  //   let videoUrl;
  //   if (video) {
  //     videoUrl = video;
  //   } else if (recordedChunks.length > 0) {
  //     const blob = new Blob(recordedChunks, { type: 'video/mp4' });
  //     videoUrl = URL.createObjectURL(blob);
  //   }
    
  //   navigate('/converted-page', {
  //     state: {
  //       videoUrl: videoUrl
  //     }
  //   });
  // };