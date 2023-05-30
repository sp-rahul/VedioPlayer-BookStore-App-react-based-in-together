import React from "react";
import ArtistCart from "./ArtistCart";
import Loader from "../../@common/Loader";

export default function ArtistList({
  load,
  all_Music,
  setSelectedArtist,
  selectedArtist,
  
}) {
  return (
    <div className="artist-list">
      {!load ? (
        all_Music?.map((artist, index) => (
          <ArtistCart
            key={`${artist.id}${index}`}
            artist={artist}
            setSelectedArtist={setSelectedArtist}
            selectedArtist={selectedArtist}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
