import React, {Component} from "react" ;
import Header from "../header/header";
import HomeBanner from "./banner";
import About from "./about";
import Services from "./services";
import Resume from "./resume";
import Skills from "./skills";

export default class Home extends Component {
  render() {
    return (
      <div className="row flex-xl-nowrap mx-0">
        <Header/>
        <main className="col-12 col-md-9 col-xl-10 p-0">
          <HomeBanner/>
          <About/>
          <Services/>
          <Resume/>
          <Skills/>
        </main>
      </div>
    );
  }
}
