import React, { Component } from "react";
import "./App.css";
//importando libs material ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Home from "./pages/Home";
class App extends Component {
  /**
   *
   * @param {*} props representa las props pasadas
   */
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
          <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
