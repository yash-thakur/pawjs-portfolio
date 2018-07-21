import React, {Component} from "react";
import _ from "lodash";
import Header from "../header/header";
import BlogBanner from "./blog-banner";
import BlogBody from "./blog-body";

export default class BlogSingle extends Component {
  render() {
    return(
      <div className="row flex-xl-nowrap mx-0">
        <Header/>
        <main className="col-12 col-lg-9 col-xl-10 p-0">
          <BlogBanner
            title={this.props.title}
            bannerImg={this.props.bannerImg}
            author={_.get(this.props, "author", "")}
          />
          <BlogBody
            title={this.props.title}
            author={_.get(this.props, "author", {})}
            sliderImgs={this.props.sliderImgs}
          >
            {this.props.children}
          </BlogBody>
        </main>
      </div>
    );
  }
}
