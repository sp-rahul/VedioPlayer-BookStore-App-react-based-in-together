import React, { useEffect, useState } from "react";

import ArtistCart from "./ArtistCart";
import VedioList from "./VedioList";
import VedioPlayer from "./VedioPlayer";

export function truncate(str) {
  return str.length > 22 ? str.substring(0, 20) + ".." : str;
}

export default function Home() {
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
      <div class="navbar-wrapper">
      
          <div class="navbar navbar-static-top" role="navigation">
            <div class="container full-width">
              <div class="navbar-header">
                <a class="navbar-brand" href="#"></a>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                  <li class="active">
                    <a href="#home_page">Home</a>
                  </li>
                  <li>
                    <a href="#about_page">About</a>
                  </li>
                  <li>
                    <a href="#vedio_page">Vedio</a>
                  </li>
                  <li>
                    <a href="#Link">Link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      

      <div className="container">
        <div className="common artist">
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
