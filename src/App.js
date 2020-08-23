import React, { Component } from "react";
import CompoundInterestPage from "./pages/compoundInterestPage";
import PagesContainer from "./components/container/container";

export default class App extends Component {
  render() {
    return (
      <PagesContainer>
        <CompoundInterestPage />
      </PagesContainer>
    );
  }
}
