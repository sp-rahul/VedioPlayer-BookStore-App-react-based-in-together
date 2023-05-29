import React from "react";

export default function VedioPlayer({ url }) {
   let  data = url.replace("watch?v=","embed/");
  return (
    <div>
        <iframe width="600" height="345" frameBorder="0" src={data}></iframe>
    </div>
  );
}
