import React, {Component} from "react";
import _ from "lodash";
import classNames from "classnames";

import * as styles from "../home.scss";
import TestimonialItem from "./testimonial-item";

import Testimonials from "./clients-testimonials";

export default class TestimonialsSection extends Component {
  render() {
    return(
      <div className={classNames(styles["testimonials"], "py-md-5 px-xl-5 px-md-3 p-3")}>
        <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">Look at their opinions!</div>
        <h2 className="pb-4">Testimonials</h2>
        <div className="row mx-0 my-4">
          {
            _.map(_.get(Testimonials, "testimonials", []), (testimonial, key) => {
              return <TestimonialItem key={key} testimonial={testimonial}/>
            })
          }
        </div>
      </div>
    );
  }
}
