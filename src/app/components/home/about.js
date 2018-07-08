import React, {Component} from "react";
import _ from "lodash"
import classNames from "classnames";
import config from "../../../config";
//Custom CSS
import * as styles from "./home.scss";

//Images
import MyImg from "../../../resources/images/me.jpg";
import Signature from "../../../resources/images/signature.png";

export default class About extends Component {
  render() {
    return(
      <div className={classNames(styles["about"], "py-5 px-md-5 px-3")}>
        <div className="row mx-0">
          <div className="col-xl-4 col-lg-6 col-md-4 py-2">
            <div className="about-img">
              <img src={MyImg} alt="User" className="w-100 mw-100"/>
            </div>
            <div className="about-social bg-primary text-center p-3 text-center">
              <a href="#" className={classNames(styles["social-icon"], "d-inline-flex align-items-center justify-content-center m-1")}>
                <i className="fa fa-facebook"/>
              </a>
              <a href="#" className={classNames(styles["social-icon"], "d-inline-flex align-items-center justify-content-center m-1")}>
                <i className="fa fa-twitter"/>
              </a>
              <a href="#" className={classNames(styles["social-icon"], "d-inline-flex align-items-center justify-content-center m-1")}>
                <i className="fa fa-dribbble"/>
              </a>
              <a href="#" className={classNames(styles["social-icon"], "d-inline-flex align-items-center justify-content-center m-1")}>
                <i className="fa fa-vimeo"/>
              </a>
              <a href="#" className={classNames(styles["social-icon"], "d-inline-flex align-items-center justify-content-center m-1")}>
                <i className="fa fa-pinterest-p"/>
              </a>
              <a href="#" className={classNames(styles["social-icon"], "d-inline-flex align-items-center justify-content-center m-1")}>
                <i className="fa fa-behance"/>
              </a>
              <a href="#" className={classNames(styles["social-icon"], "d-inline-flex align-items-center justify-content-center m-1")}>
                <i className="fa fa-linkedin"/>
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-lg-6 col-md-8 py-2">
            <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">Know about me</div>
            <h2>About Me</h2>
            <div className="row mx-0 my-4">
              <div className="col-xl-6 col-lg-6 col-sm-6 px-md-0 py-3">
                <div className={classNames(styles["icons"], "d-inline-block align-top pr-3")}>
                  <i className="ti-user"/>
                </div>
                <div className="d-inline-block align-top">
                  <h5 className="font-weight-medium">Name:</h5>
                  <p className="text-gray-light font-weight-medium">
                    {_.get(config, "name", "")}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-sm-6 px-md-0 py-3">
                <div className={classNames(styles["icons"], "d-inline-block align-top pr-3")}>
                  <i className="ti-email"/>
                </div>
                <div className="d-inline-block align-top">
                  <h5 className="font-weight-medium">Email:</h5>
                  <p className="text-gray-light font-weight-medium">
                    {_.get(config, "about.email", "")}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-sm-6 px-md-0 py-3">
                <div className={classNames(styles["icons"], "d-inline-block align-top pr-3")}>
                  <i className="ti-calendar"/>
                </div>
                <div className="d-inline-block align-top">
                  <h5 className="font-weight-medium">Date Of Birth:</h5>
                  <p className="text-gray-light font-weight-medium">
                    {_.get(config, "about.dob", "")}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-sm-6 px-md-0 py-3">
                <div className={classNames(styles["icons"], "d-inline-block align-top pr-3")}>
                  <i className="ti-flag-alt-2"/>
                </div>
                <div className="d-inline-block align-top">
                  <h5 className="font-weight-medium">Nationality:</h5>
                  <p className="text-gray-light font-weight-medium">
                    {_.get(config, "about.nationality", "")}
                  </p>
                </div>
              </div>
            </div>
            <div className="desc">
              <p className="font-italic text-gray-light">
                Hi I am Yash Thakur. I have been building my niche in freelancing since 2015.
                Having started my career in a start-up, I plan to create my own space in the web now.
                I specialize in editing <span className="text-dark font-weight-medium">WordPress</span> websites and <span className="text-dark font-weight-medium">Mobile Responsiveness</span>.
                I have also tried my hands on <span className="text-dark font-weight-medium">Cross-Platform Mobile Apps</span> Development and it won’t be long before I push them to the list above.
              </p>
              <div className="text-right py-3">
                <img src={Signature} className="mw-100"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
