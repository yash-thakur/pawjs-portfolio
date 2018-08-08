import React, {Component} from "react";
import _ from "lodash";
import LazyLoad from "react-lazyload";
import classNames from "classnames";

import * as styles from "../home.scss";


export default class TestimonialItem extends Component {
  render() {
    return(
      <div className="col-xl-4 col-lg-4 col-md-4 py-2">
        <div className="testimonials-block">
          <div className={classNames(styles["testimonials-content"], "rounded p-3 d-table")}>
            <div className={classNames(styles["testimonials-avtar"], "d-table-cell align-middle")}>
              <LazyLoad height={200} offset={200}>
                <img src={_.get(this.props, "testimonial.img")} alt={_.get(this.props, "testimonial.name")} className="rounded-circle"/>
              </LazyLoad>
            </div>
            <div className="d-table-cell align-middle pl-3 text-gray-light">
              <p className={classNames(styles["comment"], "mb-0")}>{_.get(this.props, "testimonial.review")}</p>
            </div>
          </div>
          <div className="mt-sm-5 mt-4">
            <h4 className="text-primary font-weight-normal">{_.get(this.props, "testimonial.name")}</h4>
            <span className="small text-dark font-weight-medium">{_.get(this.props, "testimonial.position")}</span>
          </div>
        </div>
      </div>
    );
  }
}
