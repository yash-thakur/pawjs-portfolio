import React, {Component} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";

import * as styles from "./portofolio-single.scss";

import PortfolioImg from "../../../resources/images/bg/01.jpg";

export default class PortfolioBanner extends Component {
  render() {
    return(
      <div className={classNames(styles["bg-img"], styles["gradient"])} style={{backgroundImage: `url(${PortfolioImg})`}}>
        <div className={classNames(styles["blog-content"], "container")}>
          <div className={classNames(styles["top-bar"], "d-flex justify-content-sm-between flex-sm-nowrap flex-wrap mx-4 py-5")}>
            <Link to="/" className="btn-home btn btn-secondary px-4 text-white d-flex align-items-center mb-2 mr-3">
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
                <Link to="/" className="text-white">
                  Portfolios
                </Link>
              </li>
              <li className="breadcrumb-item active text-white">{this.props.title}</li>
            </ul>
          </div>
          <div className="mx-4 py-5 text-white">
            <h1 className="mb-4 font-weight-normal">{this.props.title}</h1>
            <span>{this.props.authorName}'s Blog</span>
          </div>
        </div>
      </div>
    );
  }
}
