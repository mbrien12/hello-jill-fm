import React, { useState, useEffect } from "react";
import Stat from "./Stat";

const Show = ({ match, mixes }) => {
  const [mix, setMix] = useState(null);
  useEffect(() => {
    const [firstMix = {}] = mixes.filter(mix => mix.slug === match.params.slug);
    setMix(firstMix);
  }, [mix]);

  return (
    <div className="ph3 ph4-1 pad-bottom">
      <div className="measure center 1h-copy">
        <p>{mix && mix.description}</p>
        <Stat
          statName="Plays"
          statNumber={mix && mix.play_count}
          statWord=" times"
        />
        <Stat
          statName="Favourited"
          statNumber={mix && mix.favorite_count}
          statWord="times"
        />
        <Stat
          statName="Lasting for"
          statNumber={(mix && mix.audio_length) / 60}
          statWord="minutes"
        />
      </div>
    </div>
  );
};
export default Show;
