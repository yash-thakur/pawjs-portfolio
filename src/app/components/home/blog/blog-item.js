import React, {Component} from "react";
import _ from "lodash";
import classNames from "classnames";
import {Link} from "react-router-dom";

import DefaultBlogImage from "../../../../resources/images/blog/02.jpg";


export default class BlogItem extends Component {
  
  render() {
    const {blog, styles} = this.props;
    let blogImg = _.get(blog, "bannerImg", "")
    return(
      <div className="col-xl-3 col-lg-6 col-sm-6">
        <div className={classNames(styles["blog-block"], "mb-5")}>
          <div className={styles["blog-bg-img"]} style={{backgroundImage: `url(${blogImg !== "" ? blogImg : DefaultBlogImage})`}}>
            <div className={classNames(styles["date-box"], "text-center bg-primary text-white font-weight-medium")}>
              <span>{blog.date}</span>
            </div>
          </div>
          <div className={classNames(styles["blog-info"], "p-3 bg-light")}>
            <div className="blog-meta">
              {/*<p className="small d-inline-block align-top text-gray-light pr-1">*/}
                {/*<span className="ti-comment-alt"/>*/}
                {/*<a href="#" className="text-dark font-weight-medium pl-1">4</a>*/}
              {/*</p>*/}
              <p className="small d-inline-block align-top text-gray-light pr-1">
                <span className="ti-user pr-1"/>
                <span className="text-dark font-weight-medium">{blog.author.name} </span>
              </p>
              <p className="small text-gray-light">
                <span className="ti-folder pr-1"/>
                <a href="#" className="text-dark font-weight-medium">{_.first(blog.tags)}</a>
              </p>
            </div>
            <div className={styles["blog-content"]}>
              <Link to={blog.url} className={styles["title"]}>{blog.title}</Link>
              <p className={classNames(styles["desc"], "text-gray-light")}>{blog.shortDesc}</p>
              <div>
                <Link to={blog.url} className="btn btn-primary btn-sm">Read More...</Link>
                <div className="text-right">
                  <ul className="list-unstyled mb-0">
                    <li className="d-inline-block align-top">
                      <a href="#" className={classNames(styles["social-icon"], "p-1")}><i className="fa fa-facebook"/></a>
                    </li>
                    <li className="d-inline-block align-top">
                      <a href="#" className={classNames(styles["social-icon"], "p-1")}><i className="fa fa-twitter"/></a>
                    </li>
                    <li className="d-inline-block align-top">
                      <a href="#" className={classNames(styles["social-icon"], "p-1")}><i className="fa fa-linkedin"/></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
