import React, {Component} from "react";
import classNames from "classnames";

//Custom CSS
import * as styles from "./header.scss";

//Images
import Logo from "../../../resources/images/logo.png";

export default class Header extends Component {
  render() {
    return (
      <header className={classNames(styles["site-header"], "col-md-3 col-xl-2")}>
        <div className={classNames(styles["header-bar"], "d-flex align-items-center d-md-none")}>
          <h4 className="font-weight-bold mb-0">
            <a href="#" className="text-uppercase text-white">Yash Thakur</a>
          </h4>
          <button className={classNames(styles["toggle-btn"], "btn btn-link p-0")} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </button>
        </div>
        <div className={classNames(styles["left-sidebar"], "bg-dark col-md-3 col-xl-2 px-0")}>
          <nav>
            <div className="p-4 text-center">
              <a href="#"className={styles["logo"]}>
                <img id="logo_img" src={Logo} alt="LOGO" className="mw-100"/>
              </a>
              <p className={classNames(styles["site-description"], "mt-2")}>Aligning Creativity, Inspiring Ideas!</p>
            </div>
            <div className={styles["menu-links"]}>
              <ul className="list-unstyled">
                <li>
                  <a href="#home" className={classNames(styles["active"], styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Home</a>
                </li>
                <li>
                  <a href="#about" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>About</a>
                </li>
                <li>
                  <a href="#service" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Service</a>
                </li>
                <li>
                  <a href="#resume" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Resume</a>
                </li>
                <li>
                  <a href="#skill" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Skill</a>
                </li>
                <li>
                  <a href="#portfolio" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Portfolio</a>
                </li>
                <li>
                  <a href="#availability-calendar" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Calendar</a>
                </li>
                <li>
                  <a href="#blog" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Blog</a>
                </li>
                <li>
                  <a href="#testimonials" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Testimonials</a>
                </li>
                <li>
                  <a href="#contact" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <div className="px-4 py-2">
              <ul className="list-unstyled mb-0">
                <li className="d-inline-block p-2">
                  <a href="#" className={classNames(styles["social-icon"], "d-block")}><i className="fa fa-facebook"/></a>
                </li>
                <li className="d-inline-block p-2">
                  <a href="#" className={classNames(styles["social-icon"], "d-block")}><i className="fa fa-twitter"/></a>
                </li>
                <li className="d-inline-block p-2">
                  <a href="#" className={classNames(styles["social-icon"], "d-block")}><i className="fa fa-linkedin"/> </a>
                </li>
              </ul>
            </div>
            <div className={classNames(styles["copy-right"], "px-4 py-2")}>
              <p className="text-white text-uppercase">
                &copy; Yash Thakur <span className="d-block">all rights reserved</span>
              </p>
            </div>
          </div>
        </div>
      </header>
  );
  }
}
