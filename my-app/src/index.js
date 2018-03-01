import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "semantic-ui-css/semantic.min.css";

import TopMenu from "./top_menu";
import MiddleSection from "./middle_section";
import Footer from "./footer";


class Nomatic extends React.Component {
  render() {
    return (
        <React.Fragment>
        <TopMenu />
        <MiddleSection />
        <Footer />
        </React.Fragment>
  );
  }
}

ReactDOM.render(<Nomatic/>, document.getElementById("root"));
