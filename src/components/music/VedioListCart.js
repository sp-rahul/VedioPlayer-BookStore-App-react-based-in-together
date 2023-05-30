import React from "react";

export function truncate(str) {
  return str.length > 35 ? str.substring(0, 32) + ".." : str;
}
export default function VedioListCart({ element, setSelectedVideo }) {
  const time = new Date(element?.duration * 1000).toISOString().slice(14, 19);
  let thamnel =
    element?.uri.replace(
      "https://www.youtube.com/watch?v=",
      "https://img.youtube.com/vi/"
    ) + "/default.jpg";

  const handleVedio = (val) => (e) => {
    setSelectedVideo((pre) => {
      return { isLoading: true, url: val };
    });
  };
  let tittle = truncate(element?.title);

  return (
    <div className="playlist-cart">
      <div className="button">
        <button
          type="button"
          className="thumnail-button"
          onClick={handleVedio(element?.uri)}
          style={{ height: "100px" }}
        >
          <img src={thamnel} type="video/mp4" />

          <span className="thumnail-time"> {time}</span>
        </button>
      </div>
      <div>
        <p>{tittle}</p>
      </div>
    </div>
  );
}
