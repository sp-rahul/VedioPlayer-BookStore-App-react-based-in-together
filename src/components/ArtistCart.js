import React from "react";
import { truncate } from "./Home";

export default function ArtistCart({
  artist,
  selectedArtist,
  setSelectedArtist,
}) {
  const handleCheckbox = (value) => (event) => {
    if (event.target.checked) {
      setSelectedArtist({ ...selectedArtist, [value]: true });
    } else {
      const { [value]: fal, ...others } = selectedArtist;
      setSelectedArtist({ ...others });
    }
  };

  return (
    <div className="artist-name">
      <input
        type="checkbox"
        name="author-check"
        id={artist?.resource_url}
        value={artist?.resource_url}
        onChange={handleCheckbox(artist?.resource_url)}
      />
      <label htmlFor={ artist?.resource_url}>{truncate(artist?.title) }</label>
    </div>
  );
}
