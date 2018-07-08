import React, {Component} from "react";
import classNames from "classnames";

//Custom CSS
import * as styles from "./home.scss";

//Images
import BannerImg from "../../../resources/images/bg.jpg";

export default class HomeBanner extends Component {
  render() {
    return(
      <div className={styles["banner-section"]}>
        <div className={styles["bg-img"]} style={{backgroundImage: `url(${BannerImg})`}}>
          <div className={styles["content"]}>
            <h1 className={classNames(styles["banner-title"], "h2 text-white")}>Hello I'm
              <span className={classNames(styles["person-name"], "d-block font-weight-bold")}>
                Yash Thakur
              </span>
            </h1>
            <div className={classNames(styles["typing-text"], "h2 text-uppercase text-white")}>Frontend developer</div>
            <button className="btn btn-primary text-uppercase px-4 mt-3">Download my cv</button>
          </div>
          <a href="#about" className={styles["scroll-down"]}>
            <span/>
          </a>
        </div>
      </div>
    );
  }
}
