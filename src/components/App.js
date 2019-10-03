/*global Mixcloud*/
import React, { Component } from "react";
import FeaturedMix from "./FeaturedMix";
import Header from "./Header";
import Home from "./Home";
import Archive from "./Archive";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom";

import mixesData from "../data/mixes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: "",
      mixIds: mixesData,
      mix: null,
      mixes: []
    };
  }

  fetchMixes = async () => {
    const { mixIds } = this.state;
    mixIds.map(async id => {
      try {
        const response = await fetch(`https://api.mixcloud.com${id}`);
        const data = await response.json();
        this.setState((prevState, props) => ({
          mixes: [...prevState.mixes, data]
        }));
      } catch (error) {
        console.log(error);
      }
    });
  };

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    this.widget.events.pause.on(() =>
      this.setState({
        playing: false
      })
    );
    this.widget.events.play.on(() =>
      this.setState({
        playing: true
      })
    );
  };

  actions = {
    togglePlay: () => {
      this.widget.togglePlay();
    },
    playMix: mixName => {
      const { currentMix } = this.state;

      if (mixName === currentMix) {
        return this.widget.togglePlay();
      }
      this.setState({
        currentMix: mixName
      });
      this.widget.load(mixName, true);
      this.mountAudio();
    }
  };

  componentDidMount() {
    this.mountAudio();
    this.fetchMixes();
  }

  render() {
    const [firstMix = {}] = this.state.mixes;
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix
              {...this.state}
              {...this.actions}
              {...firstMix}
              id={firstMix.key}
            />
            <div className="w-50-l relative z-1">
              <Header />
              <div></div>
              <div></div>
              <Route
                exact
                path="/"
                render={() => <Home {...this.state} {...this.actions} />}
              ></Route>
              <Route
                path="/archive"
                render={() => <Archive {...this.state} {...this.actions} />}
              />
              <Route
                path="/about"
                render={() => <About {...this.state} />}
              />
            </div>
          </div>
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Ftheheatwave%2Fcarnival-bashment-2016%2F"
            frameBorder="0"
            className="db fixed bottom-0 z-5"
            ref={player => (this.player = player)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
