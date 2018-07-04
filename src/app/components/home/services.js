import React, {Component} from "react";
import classNames from "classnames";
//Custom CSS
import * as styles from "./home.scss";

export default class Services extends Component {
  render() {
    return(
      <div className={classNames(styles["service"], "py-5 px-md-5 px-3")}>
        <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">What i can do better</div>
        <h2>Services</h2>
        <div className="row my-4">
          <div className="col-lg-3 col-md-6 py-2">
            <div className={styles["service-block"]}>
              <span className={classNames(styles["service-icon"], "text-gray-light ti-desktop")}/>
              <h4 className="my-4">Tranding Design</h4>
              <p className="text-gray-light">You will begin to realise why this exercise is called the Dickens Pattern
                (with reference to the ghost showing Scrooge some different futures) as you notice that the idea of this
                exercise is to hypnotize yourself to be aware of two....</p>
              <div className={styles["contact-btn"]}>
                <a href="#" className="clearfix btn btn-primary btn-block rounded-0 py-0">
                  <span className="float-left">Read More...</span>
                  <span className="ti-arrow-circle-right float-right"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-2">
            <div className={styles["service-block"]}>
              <span className={classNames(styles["service-icon"], "text-gray-light ti-slice")}/>
              <h4 className="my-4">Clear Code</h4>
              <p className="text-gray-light">Two distinct pathways that you could take for your life this very day. Have
                a think about something that you do that you are maybe not motivated to change about yourself. Prior to
                running through this technique, just have a about...</p>
              <div className={styles["contact-btn"]}>
                <a href="#" className="clearfix btn btn-primary btn-block rounded-0 py-0">
                  <span className="float-left">Read More...</span>
                  <span className="ti-arrow-circle-right float-right"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-2">
            <div className={styles["service-block"]}>
              <span className={classNames(styles["service-icon"], "text-gray-light ti-brush-alt")}/>
              <h4 className="my-4">App Design</h4>
              <p className="text-gray-light">Then with that thing in mind, follow these simple steps. Step One: Get
                yourself nice and relaxed and settled. Concentrate on your breathing, engage in the moment and spend
                some time being still, quiet and drift inside of your mind... </p>
              <div className={styles["contact-btn"]}>
                <a href="#" className="clearfix btn btn-primary btn-block rounded-0 py-0">
                  <span className="float-left">Read More...</span>
                  <span className="ti-arrow-circle-right float-right"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-2">
            <div className={styles["service-block"]}>
              <span className={classNames(styles["service-icon"], "text-gray-light ti-layout-media-center")}/>
              <h4 className="my-4">UI/UX Design</h4>
              <p className="text-gray-light">Become aware of the temperature, the sights, the sounds and enjoy walking
                along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling
                of your feet walking along the path and the sound....</p>
              <div className={styles["contact-btn"]}>
                <a href="#" className="clearfix btn btn-primary btn-block rounded-0 py-0">
                  <span className="float-left">Read More...</span>
                  <span className="ti-arrow-circle-right float-right"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
