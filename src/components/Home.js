import React from "react";
import Mix from "./Mix";

const Home = props => (
  <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
    <div className="mix mb4">
      <Mix name='Bonobo Mix' id='/NTSRadio/bonobo-31st-august-2018/' {...props} />
    </div>
    <div className="mix mb4">
      <Mix name='Mr Scruff Mix' id='/Mr_Scruff/mr-scruff-dj-set-keep-it-unreal-2nd-birthday-at-music-box-manchester-2001/' {...props} />
    </div>
    <div className="mix mb4">
      <Mix name='Horse Meat Disco Mix' id='/eventbrite/moments-in-music-horse-meat-disco/' {...props} />
    </div>
  </div>
);

export default Home;
