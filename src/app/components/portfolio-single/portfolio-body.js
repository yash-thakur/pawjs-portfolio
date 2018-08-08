import React, {Component} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import _ from "lodash";
import Swiper from "swiper/dist/js/swiper.js";

import * as styles from "./portofolio-single.scss";
import "swiper/dist/css/swiper.css";
import config from "../../../config";
import {slugify} from "../../utils/utils";
import portfoliosList from "../portfolios/portfolios-list";

export default class PortfolioBody extends Component {
  
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
    const tags = _.get(_.find(portfoliosList, portfolio => portfolio.title.toLowerCase() === this.props.title.toLowerCase()), "tags", []);
    return (
      <div className={classNames(styles["portfolio-desc"], "py-5 mx-4")}>
        <div className="row mx-0">
          <div className="col-md-6 py-2">
            <div className="swiper-container" ref={el => this.swiperContainer = el}>
              <div className="swiper-wrapper">
                {
                  _.map(_.get(this.props, "portfolioImages", []), (img,key) => {
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
          </div>
          <div className="col-md-6 py-2">
            <h2>{this.props.title}</h2>
            <div className="py-3">
              <h6 className="d-inline-block align-middle mr-2 mb-0">Tags:</h6>
              <div className="d-inline-block align-middle">
                {
                  _.map(_.take(tags, 4), (tag,key) => {
                    return (
                      <Link to={`/portfolios/tags/${slugify(tag)}`} key={key} className={classNames(styles["btn-tag"], "btn btn-sm btn-primary mr-2")}>{tag}</Link>
                    );
                  })
                }
              </div>
            </div>
            <ul className="list-unstyled">
              <li className="d-table py-2">
                <span className={classNames(styles["min-w"], "d-table-cell align-top text-primary")}>Date:</span>
                <span className="d-table-cell align-top">{this.props.releaseDate}</span>
              </li>
              <li className="d-table py-2">
                <span className={classNames(styles["min-w"], "d-table-cell align-top text-primary")}>Client:</span>
                <span className="d-table-cell align-top">{this.props.clientName}</span>
              </li>
              <li className="d-table py-2">
                <span className={classNames(styles["min-w"], "d-table-cell align-top text-primary")}>Live Demo:</span>
                <span className="d-table-cell align-top">{this.props.projectUrl}</span>
              </li>
              <li className="d-table py-2">
                <span className={classNames(styles["min-w"], "d-table-cell align-top text-primary")}>Skills:</span>
                <span className="d-table-cell align-top">{this.props.skills}</span>
              </li>
            </ul>
            {this.props.children}
            <a href={this.props.projectUrl} rel="noreferrer noopener nofollow" target="_blank" className="btn btn-primary px-4 text-uppercase">View Project</a>
          </div>
        </div>
        <div className="bg-light p-3 mt-5 mb-3">
          <div className="d-sm-table">
            <div className="d-sm-table-cell align-top mb-3">
              <div className={classNames(styles["post-photo"], "pr-3 mx-auto")}>
                <img src={_.get(this.props, "author.img", "")} alt="" className="mw-100"/>
              </div>
            </div>
            <div className="d-sm-table-cell align-top w-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className={classNames(styles["post-title"], "d-inline-block font-weight-normal mb-0")}>
                  <span>Posted by: </span>
                  {_.get(this.props, "author.name", "")}
                </h4>
                <div className="float-right">
                  <strong>Follow on:</strong>
                  <a href={config.social.fb} rel="noreferrer noopener nofollow" target="_blank" className={classNames(styles["social-icon"], "p-1")}><i className="fa fa-facebook"/></a>
                  <a href={config.social.twitter} rel="noreferrer noopener nofollow" target="_blank" className={classNames(styles["social-icon"], "p-1")}><i className="fa fa-twitter"/></a>
                  <a href={config.social.linkedIn} rel="noreferrer noopener nofollow" target="_blank" className={classNames(styles["social-icon"], "p-1")}><i className="fa fa-linkedin"/></a>
                </div>
              </div>
              <div className={classNames(styles["post-desc"], "text-gray-light")}>
                {_.get(this.props, "author.description", "")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
