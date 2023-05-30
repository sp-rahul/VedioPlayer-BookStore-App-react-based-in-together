import React, { useEffect, useState } from "react";
import VedioList from "../../components/music/VedioList";
import ArtistList from "../../components/music/ArtistList";

export function truncate(str) {
  return str.length > 22 ? str.substring(0, 20) + ".." : str;
}

export default function Music() {
  let [all_Music, setAll_Music] = useState([]);

  let [selectedArtist, setSelectedArtist] = useState({});
  let [load, setLoad] = React.useState(false);

  useEffect(() => {
    setLoad(true);
    fetch("https://api.discogs.com/artists/1/releases")
      .then((response) => response.json())
      .then((res) => {
        setAll_Music(res.releases);

        setLoad(false);
      });
  }, []);

  return (
    <>
      <div className="container1">
        <div className="common">
          <ArtistList
            load={load}
            all_Music={all_Music}
            setSelectedArtist={setSelectedArtist}
            selectedArtist={selectedArtist}
          />
        </div>
        <div>
          <VedioList
            selectedArtist={selectedArtist}
            setLoad={setLoad}
          />
        </div>
      </div>
    </>
  );
}
