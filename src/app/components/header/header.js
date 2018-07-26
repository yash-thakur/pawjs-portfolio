import React, {Component} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import classNames from "classnames";

import config from "../../../config";

//Custom CSS
import * as styles from "./header.scss";

//Images
import Logo from "../../../resources/images/logo.png";

export default class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false
    }
  }
  
  toggleMenu(e) {
    if(e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen
    });
  }
  render() {
    return (
      <header
        className={classNames(
          styles["site-header"],
          this.state.isMobileMenuOpen ? styles["open"] : "",
          "col-md-3 col-xl-2"
        )}>
        <div className={classNames(styles["header-bar"], "d-flex align-items-center d-lg-none")}>
          <h4 className="font-weight-bold mb-0">
            <a href="#" className="text-uppercase text-white">{_.get(config, "name", "")}</a>
          </h4>
          <button
            className={classNames(styles["toggle-btn"], "btn btn-link p-0")}
            type="button"
            onClick={e => this.toggleMenu(e)}
          >
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
        <div className={classNames(styles["left-sidebar"], "bg-dark col-lg-3 col-xl-2 px-0")}>
          <nav>
            <div className="p-3 text-center">
              <a href="#"className={styles["logo"]}>
                <img id="logo_img" src={Logo} alt="LOGO" className="mw-100"/>
              </a>
            </div>
            <p className={classNames(styles["site-description"], "mt-2")}>{_.get(config, "motto", "")}</p>
            <div className={styles["menu-links"]}>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/#home" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Home</Link>
                </li>
                <li>
                  <Link to="/#about" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>About</Link>
                </li>
                <li>
                  <Link to="/#services" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Service</Link>
                </li>
                <li>
                  <Link to="/#resume" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Resume</Link>
                </li>
                <li>
                  <Link to="/#skills" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Skill</Link>
                </li>
                <li>
                  <Link to="/#portfolio" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Portfolio</Link>
                </li>
                <li>
                  <Link to="/#blog" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Blog</Link>
                </li>
                <li>
                  <Link to="/#testimonials" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>Testimonials</Link>
                </li>
                <li>
                  <Link to="/#contact" className={classNames(styles["site-links"], "page-scroll text-uppercase px-4 py-2 d-block")}>contact</Link>
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
                &copy; {_.get(config, "name", "")} <span className="d-block">all rights reserved</span>
              </p>
            </div>
          </div>
        </div>
      </header>
  );
  }
}
