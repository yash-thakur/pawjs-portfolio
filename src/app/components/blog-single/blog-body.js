import React, {Component} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {withRouter} from "react-router";
import * as styles from "../blog/blog.scss";
import Swiper from "swiper/dist/js/swiper.js";

import blogList from "../blogs/blog-list";


import "swiper/dist/css/swiper.css";
import {getWindowHost, slugify} from "../../utils/utils";


class BlogBody extends Component {
  
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
    let tags = [];
    _.forEach(blogList, blog => {
      tags=[...tags, ...blog.tags];
    });
    const categories = _.uniq(tags);
    const location = this.props.location;
    return (
      <div className={classNames(styles["blog-desc"], "py-5 mx-4")}>
        <div className="row mx-0">
          <div className="col-xl-9 col-md-8">
            <div
              className={classNames(
                "swiper-container",
                _.get(this.props, "sliderImgs", []).length === 0 ? "d-none": ""
              )}
              ref={el => this.swiperContainer = el}
            >
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
                <p className="text-gray-light">{_.get(this.props, "author.description", "")}</p>
              </div>
            </div>
            <div className="bg-light p-3 mb-3">
              <div>
                <h6 className="d-inline-block align-top text-gray-light mb-0">Share Post:</h6>
                <div className="d-inline-block align-top">
                  <a href={`https://www.facebook.com/share.php?u=${encodeURIComponent(`${getWindowHost()}${location.pathname}`)}`} className="social-icon p-1">
                    <i className="fa fa-facebook"/>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?text=${_.get(this.props, "title", "Blog by Yash Thakur")}&hashtags=blog, yashthakur&url=${encodeURIComponent(`${getWindowHost()}${location.pathname}`)}`} className="social-icon p-1">
                    <i className="fa fa-twitter"/>
                  </a>
                  <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`${getWindowHost()}${location.pathname}`)}`} className="social-icon p-1">
                    <i className="fa fa-pinterest-p"/>
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`${getWindowHost()}${location.pathname}`)}`} className="social-icon p-1">
                    <i className="fa fa-linkedin"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h4 className="text-primary">Categories</h4>
              <ul className="list-unstyled">
                {
                  _.map(categories, (name, key) => {
                    return (
                      <li
                        className="cat-link"
                        key={key}
                      >
                        <Link to={`/blog/categories/${slugify(name)}`} className="py-3 d-block">{name}</Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogBody = withRouter(BlogBody);
