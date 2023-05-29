import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ConvertedVideoPage() {
  const location = useLocation();
  const videoUrl = location.state && location.state.videoUrl;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${window["apiLocation"]}/text`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: 100, textAlign: "center", marginTop: 20 }}>
        Converted Video
      </h1>

      {videoUrl && <video src={videoUrl} width="400" height="300" controls />}
      <br />
      <div style={{ height: 20 }}></div>

      {videoUrl && (
        <audio
          src={`${window["apiLocation"]}/result`}
          autoPlay={true}
          controls
          name="media"
          type="audio/mp3"
        />
      )}
      {data && <p style={{ fontSize: 21 }}>{data.text}</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default ConvertedVideoPage;
