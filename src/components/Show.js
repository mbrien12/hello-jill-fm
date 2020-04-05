import React, { useState, useEffect } from "react";

const Show = ({ match, mixes }) => {
  const [mix, setMix] = useState(null);
  useEffect(() => {
    const [firstMix = {}] = mixes.filter(mix => mix.slug === match.params.slug);
    setMix(firstMix);
  }, [mix]);

  return (
    <div className="ph3 ph4-1 pad-bottom">
      <div className="measure center 1h-copy">
        <p>{mix.description}</p>
      </div>
    </div>
  );
};
export default Show;
