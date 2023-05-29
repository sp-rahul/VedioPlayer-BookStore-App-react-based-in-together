import React from "react";

export default function VedioPlayer({ url }) {
   let  data = url.replace("watch?v=","embed/");
  return (
    <div  className="youtube" >
        <iframe  frameBorder="0" src={data}></iframe>
    </div>
  );
}
