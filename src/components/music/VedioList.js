import React from "react";
import VedioListCart from "./VedioListCart";
import Scaliton from "../../@common/Scaliton";
import VedioPlayer from "./VedioPlayer";

export default function VedioList({ selectedArtist }) {
  const [data, setData] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState({
    isLoading: false,
    url: ''
  });
  const [isLoading, setIsloading] = React.useState(false);

  React.useEffect(() => {
    setData([]);

    let links = Object.keys(selectedArtist);
    console.log("links", links.length, links);
    if (links.length !== 0) {
      setIsloading(true);

      Promise.all(
        links.map(async (link) => {
          return await fetch(link)
            .then((response) => response.json())
            .then((res) => res.videos);
        })
      ).then((response) => {
        response.forEach((arr) => {
          setData((prevData) => [...prevData, ...arr]);
          setIsloading(false);
        });
      });
    }
  }, [selectedArtist]);

  return (
    <div className="video-list">
      <div>
        <VedioPlayer selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
      </div>



      <div className="common">
        {!isLoading ? (
          data.map((el) => {
            return <VedioListCart element={el} setSelectedVideo={setSelectedVideo} />;
          })
        ) : (
          <Scaliton />
        )}
      </div>
    </div>
  );
}
