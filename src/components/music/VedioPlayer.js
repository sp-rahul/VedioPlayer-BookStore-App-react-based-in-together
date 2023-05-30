import React from "react";

import Loader from "../../@common/Loader";

export default function VedioPlayer({ selectedVideo, setSelectedVideo  }) {
  let data = selectedVideo.url.replace("watch?v=", "embed/");
  function handleLoad(event) {
    console.log("event", event);
    setSelectedVideo((pre)=>{
      return {...pre, isLoading: false}
    });
  }
  
  return (
    <div className="youtube">
   
      <div class="iframe-loading">
        {selectedVideo.isLoading && <Loader />}
        <iframe
          frameBorder="0"
          src={data}
          onLoad={handleLoad}
        ></iframe>
      </div>
    </div>
  );
}
