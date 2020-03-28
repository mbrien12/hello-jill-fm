import React from "react";
import Counter from "./Counter";

const Stat = ({ statName, statNumber, statWord }) => (
  <div className="mb4" style={{ marginRight: -2 }}>
    <div className="f5 black mb0 b">{statName}</div>
    <Counter end={statNumber} duration={2} />
    <div className="f4 lh-1">{statWord}</div>
  </div>
);

const About = ({ mixes }) => (
  <div className="measure center">
    <div className="1h-copy mb4">
      <p className="mt0">
        Hello Jill FM brings you banging tunes for banging days.
      </p>
      <p>Rock your socks off.</p>
    </div>
    <div>
      <Stat
        statName="Featuring..."
        statNumber={mixes.length}
        statWord=" mixes"
      />
      <Stat
        statName="Played..."
        statNumber={mixes.reduce(
          (accum, current) => accum + current.play_count,
          0
        )}
        statWord=" times"
      />
      <Stat
        statName="With..."
        statNumber={mixes.reduce(
          (accum, current) => accum + current.audio_length,
          0
        )}
        statWord=" mins"
      />
    </div>
  </div>
);

export default About;
