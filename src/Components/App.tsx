import * as React from "react";
import Home from "src/Routes/Home";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Bio from "./Bio";
import Skill from "./Skill";
import { GlobalStyle } from "src/global-styles";

class App extends React.Component {
  public render() {
    return (
      <>
        <GlobalStyle />
        <Navigation />
        <Profile />
        <Bio />
        <Skill />
        <Home />
      </>
    );
  }
}

export default App;
