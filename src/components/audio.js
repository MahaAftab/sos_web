import React, { useState, useEffect } from 'react';

export const VideoPlayer = ({ src, autoplay, controls, name, type }) => {
  const [audioData, setAudioData] = useState(null);

  useEffect(() => {
   
    const fetchAudioData = async () => {
      try {
        const response = await fetch('https://b734-111-68-106-39.ngrok.io/result', {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'audio/mp3'
          }
        });
    
        if (response.status === 200) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          console.log(url);
          console.log(audioData)
          setAudioData(url);
        }
        else {
          
          throw new Error('Failed to fetch audio data');
   
        }
      } catch (error) {
        console.error(error);
      }
    }; 
    fetchAudioData();
  }, []);

  return (
    <>
      {audioData && (
        <audio src={audioData} autoPlay={autoplay} controls name={name} style={{alignItems:'center'}}>
          <source src={audioData} type={type} />
        </audio>
      )}
      <video src={audioData} autoPlay={autoplay} controls name={name} type={type} />
    </>
  );
};


// import React, { useState, useEffect } from 'react';

// export const VideoPlayer = ({ src, autoplay, controls, name, type }) => {
//   const [audioData, setAudioData] = useState(null);

//   return (
//     <audio src={src} autoPlay={autoplay} controls name={name} style={{alignItems:'center'}}>
//       <source src={src} type={type} />
//     </audio>
//   );
// };

//   useEffect(() => {
//     const fetchAudio = async () => {
//       try {
//         const response = await fetch(src);
//         const data = await response.arrayBuffer();
//         setAudioData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchAudio();
//   }, [src]);

//   if (!audioData) {
//     return <div>Loading...</div>;
//   }

//   const blob = new Blob([audioData], { type });
//   const url = URL.createObjectURL(blob);
 // const fetchAudioData = async () => {
    //   try {
    //     const response = await fetch('https://2dfe-111-68-106-39.ngrok.io/result', {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'audio/mp3'
    //       }
    //     });

    //     if (!response.ok) {
    //       throw new Error('Failed to fetch audio data');
    //     }

    //     const blob = await response.blob();
    //     const url = URL.createObjectURL(blob);
    //     setAudioData(url);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

     // } else if (response.status === 204) {
        //   // This is the OPTIONS response, return an empty response with headers
        //   const emptyResponse = new Response(null, {
        //     headers: {
        //       'Access-Control-Allow-Origin': '*',
        //       'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        //       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
        //     }
        //   });
        //   const emptyBlob = await emptyResponse.blob();
        //   const emptyUrl = URL.createObjectURL(emptyBlob);
        //   setAudioData(emptyUrl);
        // } 