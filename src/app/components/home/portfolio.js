import React, {Component} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import classNames from "classnames";

import portfoliosList from "../portfolios/portfolios-list";

//Custom CSS
import * as styles from "./home.scss";

//Images
import Port from "../../../resources/images/portfolio/01.jpg";
export default class Portfolio extends Component {
  render() {
    return(
      <div className={classNames(styles["portfolio"], "py-md-5 px-xl-5 px-md-3 p-3")}>
        <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">My Featured Work</div>
        <h2>My Portfolio</h2>
        <div className="py-4">
          <div>
            <div className="button-group filters-button-group">
              <button className={classNames(styles["button"], "btn btn-link px-0 is-checked")} data-filter="*">
                View All
                <span className="px-2">/</span>
              </button>
              <button className={classNames(styles["button"], "btn btn-link px-0")} data-filter=".web-design">
                Web Design
                <span className="px-2">/</span>
              </button>
              <button className={classNames(styles["button"], "btn btn-link px-0")} data-filter=".graphic-design"> Graphic Design
                <span className="px-2">/</span>
              </button>
              <button className={classNames(styles["button"], "btn btn-link px-0")} data-filter=".website-templates">
                Website Templates
                <span className="px-2">/</span>
              </button>
            </div>
            <div className="grid row my-4 mx-0">
              {
                _.map(portfoliosList, (portfolio, key) => {
                  let img = _.get(portfolio, "img", "");
                  return (
                    <div key={key} className="col-xl-3 col-lg-6 col-md-4 col-sm-6 p-sm-2 p-3 element-item web-design graphic-design">
                      <div className={styles["portfolio-item"]}>
                        <div className={styles["item"]}>
                          <div className={styles["item-hover"]}>
                            <div className={styles["item-inner"]}>
                              <img className="mw-100" src={img !== "" ? img : Port} alt="Portfolio Image"/>
                            </div>
                            <div className={styles["item-info"]}>
                              <a href="#" className="text-white text-capitalize">{portfolio.title}</a>
                              <span className="text-primary d-block">by {portfolio.author.name}</span>
                              <div className="item-link">
                                <a className="small-icon btn" href="images/portfolio/01.jpg">
                                  <span className="ti-plus"/>
                                </a>
                                <Link className="small-icon btn" to={portfolio.url}>
                                  <span className="ti-link"/>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
