import React, {Component} from "react";
import _ from "lodash";
import classNames from "classnames";

import * as styles from "../home.scss";

import BlogItem from "./blog-item";
import blogList from "../../blogs/blog-list";

export default class BlogSection extends Component {
  render() {
    return(
      <div className={classNames(styles["blog"], "py-md-5 px-xl-5 px-md-3 p-3")}>
        <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">My Latest Blog Posts</div>
        <h2 className="pb-4">From the blog</h2>
        <div className="row mx-0 my-4">
          {
            _.map(_.take(blogList, 4), (blog, key) => {
              return <BlogItem key={key} styles={styles} blog={blog}/>
            })
          }
        </div>
      </div>
    );
  }
}
