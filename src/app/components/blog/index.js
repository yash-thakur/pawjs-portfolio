import React, {Component} from "react";
import _ from "lodash";
import classNames from "classnames";
import Header from "../header/header";
import * as styles from "./blog.scss";
import BlogItem from "../home/blog/blog-item";
import BlockBackgroundImage from "../../../resources/images/bg/01.jpg";
import config from "../../../config";
import Footer from "../footer/footer";

export default class Blog extends Component {
  render() {
    return(
      <div className="row flex-xl-nowrap mx-0">
        <Header/>
        <main className="col-12 col-lg-9 col-xl-10 p-0">
          <div className={classNames(styles["blog-bg"], styles["gradient"])} style={{backgroundImage: `url(${BlockBackgroundImage})`}}>
            <div className={classNames(styles["blog-content"], "container")}>
              <div className={classNames(styles["top-bar"], "d-flex justify-content-between mx-4 py-5")}>
                <a className={classNames(styles["btn-home"], "btn btn-secondary px-4 text-white d-flex align-items-center")}>
                  <span className="ti-angle-left pr-2"/>
                  back to home
                </a>
                <ul className={classNames(styles["custom-breadcrumb"], "breadcrumb mb-0 align-items-center")}>
                  <li className="breadcrumb-item">
                    <a href="#" className="text-white">
                      <span className="ti-home pr-2"/>
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active text-white">Blog</li>
                </ul>
              </div>
              <div className="mx-4 py-5 text-white">
                <h1 className="mb-4 font-weight-normal">Blog Page</h1>
                <span>{_.get(config, "name", "")}'s Blog</span>
              </div>
            </div>
          </div>
          <div className={classNames(styles["blog"], "py-5 mx-4")}>
            <div className="row mx-0 my-4">
              {
                _.map([1,2,3,4], key => {
                  return <BlogItem key={key} styles={styles}/>
                })
              }
            </div>
          </div>
          <Footer/>
        </main>
      </div>
    );
  }
}