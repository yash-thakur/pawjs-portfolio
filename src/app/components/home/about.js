import React, {Component} from "react";
import classNames from "classnames";

//Custom CSS
import * as styles from "./home.scss";

//Images
import MyImg from "../../../resources/images/me.jpg";
import Signature from "../../../resources/images/signature.png";

export default class About extends Component {
  render() {
    return(
      <div className={classNames(styles["about"], "py-5 px-md-5 px-3")}>
        <div className="row">
          <div className="col-lg-4 py-2">
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
          <div className="col-lg-8 py-2">
            <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">Know about me</div>
            <h2>About Me</h2>
            <div className="row mx-0 my-4">
              <div className="col-lg-6 col-md-6 px-md-0 py-3">
                <div className={classNames(styles["icons"], "d-inline-block align-top pr-3")}>
                  <i className="ti-user"/>
                </div>
                <div className="d-inline-block align-top">
                  <h5 className="font-weight-medium">Name:</h5>
                  <p className="text-gray-light font-weight-medium">Yash Thakur</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 px-md-0 py-3">
                <div className={classNames(styles["icons"], "d-inline-block align-top pr-3")}>
                  <i className="ti-email"/>
                </div>
                <div className="d-inline-block align-top">
                  <h5 className="font-weight-medium">Email:</h5>
                  <p className="text-gray-light font-weight-medium">thakur.yash514@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 px-md-0 py-3">
                <div className={classNames(styles["icons"], "d-inline-block align-top pr-3")}>
                  <i className="ti-calendar"/>
                </div>
                <div className="d-inline-block align-top">
                  <h5 className="font-weight-medium">Date Of Birth:</h5>
                  <p className="text-gray-light font-weight-medium">
                    24 October, 1993
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 px-md-0 py-3">
                <div className={classNames(styles["icons"], "d-inline-block align-top pr-3")}>
                  <i className="ti-flag-alt-2"/>
                </div>
                <div className="d-inline-block align-top">
                  <h5 className="font-weight-medium">Nationality:</h5>
                  <p className="text-gray-light font-weight-medium">
                    India
                  </p>
                </div>
              </div>
            </div>
            <div className="desc">
              <p className="font-italic text-gray-light">I have more than <span
                className="text-dark font-weight-medium">9 years of experience</span> in the field of Graphic/ E
                Learning/Web Designing. Specialized in Adobe web & graphic designing tools and also in otheta tools.
                Professional in Corporate branding, Graphic designing, <span className="text-dark font-weight-medium">Web Designing,</span> visualization,
                GUI, graphics & animations for e-learning, illustrations, web icons, flash web banner, flash intro
                animations, logos, brochures, posters etc.</p>
              <p className="font-italic text-gray-light">Creative Solution Provider as a Freelance Graphic Artist and a
                Dedicated, Team worker to Induce the Creative Juice among the colleagues with a View to deliver the Best
                and New in the business.</p>
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
