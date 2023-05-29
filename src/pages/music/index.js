import React, { useEffect, useState } from "react";
import VedioPlayer from "../../components/music/VedioPlayer";
import ArtistCart from "../../components/music/ArtistCart";
import VedioList from "../../components/music/VedioList";

export function truncate(str) {
  return str.length > 22 ? str.substring(0, 20) + ".." : str;
}

export default function Music() {
  let [all_Music, setAll_Music] = useState([]);

  let [selectedArtist, setSelectedArtist] = useState({});
  let [url, setUrl] = useState("");
  // const [all_Music, setAll_Music]= useState('')
  //   console.log("From home", selectedArtist);

  useEffect(() => {
    fetch("https://api.discogs.com/artists/1/releases")
      .then((response) => response.json())
      .then((res) => {
        setAll_Music(res.releases);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="common">
          {all_Music?.map((artist, index) => (
            <ArtistCart
              // key={`${artist.id}${index}`}
              artist={artist}
              setSelectedArtist={setSelectedArtist}
              selectedArtist={selectedArtist}
            />
          ))}
        </div>
        <div>
          <VedioPlayer url={url} />
        </div>
        <div className="common">
          <VedioList
            selectedArtist={selectedArtist}
            url={url}
            setUrl={setUrl}
          />
        </div>
      </div>
    </>
  );
}
