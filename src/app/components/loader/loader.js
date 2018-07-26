import React, {Component} from "react";
import LoaderImg from "./images/loader.gif";

export default class Loader extends Component {
  render() {
    return (
      <div className={"d-flex align-items-center justify-content-center"} style={{height: "100vh", backgroundColor: "#5e96cd"}}>
        <img className="img-fluid" src={LoaderImg} />
      </div>
    );
  }
}
