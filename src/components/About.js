import React from "react";

const Stat = ({ statName, statNumber, statWord }) => (
  <div
    className="w-third tc pa3 ba bw2 b--light-gray"
    style={{ marginRight: -2 }}
  >
    <div className="f6 biryani ttu">{statName}</div>
    <div className="f5 b biryani-black ttu tracked">
      {statNumber}
      {statWord}
    </div>
  </div>
);

const About = ({mixes}) => (
  <div className="ph3 ph4-1">
    <div className="measure center 1h-copy f4 ph3">
      <p className="mt0">
        Hello Jill FM brings you banging tunes for banging days.
      </p>
      <p>Rock your socks off.</p>
    </div>
    <div className="flex pt3">
      <Stat statName="Featuring..." statNumber={mixes.length} statWord=" mixes" />
      <Stat statName="Played..." statNumber={mixes.reduce((accum, current) => accum + current.play_count, 0)} statWord=" times" />
      <Stat statName="With..." statNumber={mixes.reduce((accum, current) => accum + current.audio_length, 0)} statWord=" mins" />
    </div>
  </div>
);

export default About;
