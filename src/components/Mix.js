import React from "react";
import { Link } from "react-router-dom";
import PlayButton from "./PlayButton";
import PlayMix from "./PlayMix";

const Mix = ({ name, pictures, slug, ...props }) => (
  <div
    className="aspect-ratio aspect-ratio--3x4 pointer bg-black cover bg-center"
    style={{ backgroundImage: `url(${pictures.extra_large})` }}
  >
    <Link to={`/show/${slug}`}>
      {/* <PlayMix {...props}> */}
      <div className="ph5 pv4 aspect-ratio--object mix-overlay">
        <div className="flex items-center relative z-2">
          <h1 className="f4 f3-1 mv0 white ttu biryani pr2 1h-title">{name}</h1>
          <PlayButton />
        </div>
      </div>
      {/* </PlayMix> */}
    </Link>
  </div>
);

export default Mix;
