import React from "react";
import VedioListCart from "./VedioListCart";

export default function VedioList({ selectedArtist, url, setUrl }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData([]);
    let obj = selectedArtist;

    for (let link of Object.keys(obj)) {
      fetch(link)
        .then((response) => response.json())
        .then((res) => setData((prevData) => [...prevData, ...res.videos]));
     
    }
  }, [selectedArtist]);

  return (
    <div>
      {data.map((el) => {
        return <VedioListCart element={el} url={url} setUrl={setUrl}/>;
      })}
    </div>
  );
}
