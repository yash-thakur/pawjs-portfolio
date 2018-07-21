import React, {Component} from "react";
import classNames from "classnames";

//Custom CSS
import * as styles from "./home.scss";

export default class Resume extends Component {
  render() {
    return(
      <div className={classNames(styles["resume"], "py-md-5 px-xl-5 px-md-3 p-3")}>
        <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">My Work Experience</div>
        <h2>Resume</h2>
        <div className="py-4">
          <h3>Experience :</h3>
          <div className="row py-4 mx-0">
            <div className="col-md-4 py-1 px-0">
              <div className="row mx-0">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2 px-0">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light fa fa-briefcase"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10 pl-0">
                  <h3 className="text-primary">
                    Atyantik Technologies Pvt. Ltd
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">March, 2017 to Present</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1 px-0">
              <h3>Software Engineer</h3>
              <p className="text-gray-light"></p>
            </div>
          </div>
          <div className="row py-4 mx-0">
            <div className="col-md-4 py-1 px-0">
              <div className="row mx-0">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2 px-0">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light fa fa-briefcase"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10 pl-0">
                  <h3 className="text-primary">
                    Freelancing
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">
									2015 to present
								</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1 px-0">
              <h3>Front-End Development</h3>
              <p className="text-gray-light"></p>
            </div>
          </div>
          <div className="row py-4 mx-0">
            <div className="col-md-4 py-1 px-0">
              <div className="row mx-0">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2 px-0">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light fa fa-briefcase"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10 pl-0">
                  <h3 className="text-primary">
                    Milople
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">
									Jan- Apr, 2015
								</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1 px-0">
              <h3>Junior Developer</h3>
              <p className="text-gray-light">Worked at Milople an E-commerce outsourcing company.</p>
            </div>
          </div>
          <div className="row py-4 mx-0">
            <div className="col-md-4 py-1 px-0">
              <div className="row mx-0">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2 px-0">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light fa fa-briefcase"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10 pl-0">
                  <h3 className="text-primary">
                    BSNL (Bharat Sanchar Nigam Ltd.)
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">
									2014
								</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1 px-0">
              <h3>Junior Intern</h3>
              <p className="text-gray-light">
                Interned as a <strong>Junior Intern</strong> at India’s largest telecom company BSNL (Bharat Sanchar Nigam Ltd.),
                which has exposed me to the best of wireless and Industry standards and practices.
              </p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h3>Education:</h3>
          <div className="row py-4 mx-0">
            <div className="col-md-4 py-1 px-0">
              <div className="row mx-0">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2 px-0">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light fa fa-graduation-cap"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10 pl-0">
                  <h3 className="text-primary">
                    Parul University
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">
									2015 to 2017
								</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1 px-0">
              <h3>M.Tech. in Computer Science & Engineering</h3>
              <p className="text-gray-light"></p>
            </div>
          </div>
          <div className="row py-4 mx-0">
            <div className="col-md-4 py-1 px-0">
              <div className="row mx-0">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2 px-0">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light fa fa-university"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10 pl-0">
                  <h3 className="text-primary">
                    Gujarat Technological University
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">
									2011 to 2015
								</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1 px-0">
              <h3>B.E. in Computer Science & Engineering</h3>
              <p className="text-gray-light"></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
