import React, {Component} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import classNames from "classnames";

import * as styles from "../blog/blog.scss";

import BannerImg from "../../../resources/images/bg/01.jpg";

export default class BlogBanner extends Component {
  render() {
    return(
      <div className={classNames(styles["bg-img"], styles["gradient"])} style={{backgroundImage: `url(${_.get(this.props, "bannerImg", BannerImg)})`}}>
        <div className={classNames(styles["blog-content"], "container")}>
          <div className={classNames(styles["top-bar"], "d-flex justify-content-sm-between flex-sm-nowrap flex-wrap mx-4 py-5")}>
            <Link to="/" className={classNames(styles["btn-home"], "btn btn-secondary px-4 text-white d-flex align-items-center mb-2 mr-3")}>
              <span className="ti-angle-left pr-2"/>
              back to home
            </Link>
            <ul className={classNames(styles["custom-breadcrumb"], "breadcrumb mb-0 align-items-center mb-2")}>
              <li className="breadcrumb-item">
                <Link to="/" className="text-white">
                  <span className="ti-home pr-2"/>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blog" className="text-white">
                  Blog
                </Link>
              </li>
              <li className="breadcrumb-item active text-white">{this.props.title}</li>
            </ul>
          </div>
          <div className="mx-4 py-5 text-white">
            <h1 className="mb-4 font-weight-normal">{this.props.title}</h1>
            <div className={styles["blog-meta"]}>
              <p className="d-inline-block align-top pr-2">
                <span className="ti-user pr-1"/>
                <span>{_.get(this.props, "author.name", "")} </span>
              </p>
              <p className="d-inline-block align-top pr-2">
                <span className="ti-folder pr-1"/>
                <span>{_.get(this.props, "author.profession", "")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
