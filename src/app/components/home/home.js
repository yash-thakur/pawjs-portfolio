import React, {Component} from "react" ;
import ReactDom from "react-dom";
import _ from "lodash";
import Header from "../header/header";
import HomeBanner from "./banner";
import About from "./about";
import Services from "./services";
import Resume from "./resume";
import Skills from "./skills";
import Portfolio from "./portfolio";
import BlogSection from "./blog/blog";
import TestimonialsSection from "./testimonials/testimonials";
import Footer from "../footer/footer";
import {smoothScroll} from "../../utils/utils";

export default class Home extends Component {
  
  componentDidMount() {
    this.scrollPageTo(this.props);
  }
  
  componentWillReceiveProps(nextProps) {
    this.scrollPageTo(nextProps);
  }
  
  scrollPageTo(props = this.props) {
    if (_.get(props, "location.hash", "") === "#home") {
      this.scrollTo(null, this.home);
    }
    if (_.get(props, "location.hash", "") === "#about") {
      this.scrollTo(null, this.about);
    }
    if (_.get(props, "location.hash", "") === "#services") {
      this.scrollTo(null, this.services);
    }
    if (_.get(props, "location.hash", "") === "#resume") {
      this.scrollTo(null, this.resume);
    }
    if (_.get(props, "location.hash", "") === "#skills") {
      this.scrollTo(null, this.skills);
    }
    if (_.get(props, "location.hash", "") === "#portfolio") {
      this.scrollTo(null, this.portfolio);
    }
    if (_.get(props, "location.hash", "") === "#blog") {
      this.scrollTo(null, this.blog);
    }
    if (_.get(props, "location.hash", "") === "#testimonials") {
      this.scrollTo(null, this.testimonials);
    }
    if (_.get(props, "location.hash", "") === "#contact") {
      this.scrollTo(null, this.contact);
    }
  }
  
  
  scrollTo(e, refId) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const Element = ReactDom.findDOMNode(refId);
    smoothScroll(Element, 0, 0.7);
  }
  
  render() {
    return (
      <div className="row flex-xl-nowrap mx-0">
        <Header/>
        <main className="col-12 col-md-9 col-xl-10 p-0">
          <HomeBanner ref={el => this.home = el}/>
          <About ref={el => this.about = el}/>
          <Services ref={el => this.services = el}/>
          <Resume ref={el => this.resume = el}/>
          <Skills ref={el => this.skills = el}/>
          <Portfolio ref={el => this.portfolio = el}/>
          <BlogSection ref={el => this.blog = el}/>
          <TestimonialsSection ref={el => this.testimonials = el}/>
          <Footer ref={el => this.contact = el}/>
        </main>
      </div>
    );
  }
}
