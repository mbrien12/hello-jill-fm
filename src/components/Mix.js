import React from "react";

const Mix = props => (
  <div className="aspect-ratio aspect-ratio--3x4 pointer bg-black">
    <div className="ph5 pv4 aspect-ratio--object mix-overlay">
      <div className="flex items-center relative z-2">
        <h1 className="f4 f3-1 mv0 white ttu biryani pr2 1h-title">
          {props.name}
        </h1>
      </div>
    </div>
  </div>
);

export default Mix;
