import React, {Component} from "react";
import _ from "lodash";
import classNames from "classnames";
import * as styles from "../blog/blog.scss";
import Swiper from "swiper/dist/js/swiper.js";


import "swiper/dist/css/swiper.css";

export default class BlogBody extends Component {
  
  componentDidMount() {
    //eslint-disable-next-line
    new Swiper(this.swiperContainer, {
      speed: 600,
      simulateTouch : true,
      autoplay: true,
      loop: true
    });
  }
  
  render() {
    return (
      <div className={classNames(styles["blog-desc"], "py-5 mx-4")}>
        <div className="row mx-0">
          <div className="col-xl-9 col-md-8">
            <div className="swiper-container" ref={el => this.swiperContainer = el}>
              <div className="swiper-wrapper">
                {
                  _.map(_.get(this.props, "sliderImgs", []), (img, key) => {
                    return (
                      <div
                        key={key}
                        className={classNames(styles["slider-img"], "swiper-slide")}
                        style={{backgroundImage: `url(${img})`}}
                      />
                    );
                  })
                }
              </div>
            </div>
            <div className="py-3">
              {
                this.props.children
              }
            </div>
          </div>
          <div className="sidebar col-xl-3 col-md-4">
            <div className="bg-light p-3 mb-3">
              <div className="d-sm-table text-sm-left text-center">
                <div className="author-avtar d-sm-table-cell align-middle pr-3 py-2 mx-auto">
                  <img src={_.get(this.props, "author.img", "")} alt="" className="rounded-circle mw-100"/>
                </div>
                <div className="d-sm-table-cell align-middle py-2">
                  <h5 className="font-weight-normal">{_.get(this.props, "author.name", "")}</h5>
                  <h6 className="text-primary text-uppercase font-weight-bold">
                    <span className="d-block">{_.get(this.props, "author.profession", "")}</span>
                  </h6>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-gray-light">Hello, i am UI/UX Designer Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="text-gray-light mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
              </div>
            </div>
            <div className="bg-light p-3 mb-3">
              <div>
                <h6 className="d-inline-block align-top text-gray-light mb-0">Share Post:</h6>
                <div className="d-inline-block align-top">
                  <a href="#" className="social-icon p-1">
                    <i className="fa fa-facebook"/>
                  </a>
                  <a href="#" className="social-icon p-1">
                    <i className="fa fa-twitter"/>
                  </a>
                  <a href="#" className="social-icon p-1">
                    <i className="fa fa-pinterest-p"/>
                  </a>
                  <a href="#" className="social-icon p-1">
                    <i className="fa fa-linkedin"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h4 className="text-primary">Categories</h4>
              <ul className="list-unstyled">
                <li className="cat-link"><a href="#" className="py-3 d-block">Architecture</a></li>
                <li className="cat-link"><a href="#" className="py-3 d-block">Business</a></li>
                <li className="cat-link"><a href="#" className="py-3 d-block">Creative</a></li>
                <li className="cat-link"><a href="#" className="py-3 d-block">Design</a></li>
                <li className="cat-link"><a href="#" className="py-3 d-block">Development</a></li>
                <li className="cat-link"><a href="#" className="py-3 d-block">Education</a></li>
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="text-primary">Popular Posts</h4>
              <ul className="list-unstyled">
                <li className="post py-3">
                  <a href="#" className="d-block mb-2">
                    Hypnotherapy For Motivation Getting The Drive Back
                  </a>
                  <p className="text-gray-light mb-0">Monday / jan 10, 2016</p>
                </li>
                <li className="post py-3">
                  <a href="#" className="d-block mb-2">
                    When You Are Down And Out How Do You Get Up And Go Forward
                  </a>
                  <p className="text-gray-light mb-0">Monday / Feb 10, 2016</p>
                </li>
                <li className="post py-3">
                  <a href="#" className="d-block mb-2">
                    How I Lost The Secret Of Dazzling Success For 20 Years
                  </a>
                  <p className="text-gray-light mb-0">Monday / Mar 10, 2016</p>
                </li>
                <li className="post py-3">
                  <a href="#" className="d-block mb-2">
                    Hypnotherapy For Motivation Getting The Drive Back
                  </a>
                  <p className="text-gray-light mb-0">Monday / Apr 10, 2016</p>
                </li>
          
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
