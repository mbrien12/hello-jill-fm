import React from "react";
import Stat from "./Stat";

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
