import React from "react";
import FeaturedMix from "./FeaturedMix";
import Header from "./Header";

function App() {
  return (
    <div>
      <div>
        <FeaturedMix />
        <div>
          <Header />
          {/* RoutedPages */}
        </div>
      </div>
      <iframe
        width="100%"
        height="60"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Ftheheatwave%2Fcarnival-bashment-2016%2F"
        frameBorder="0"
      />
    </div>
  );
}

export default App;
