import React, {Component} from "react";
import classNames from "classnames";

//Custom CSS
import * as styles from "./home.scss";

export default class Resume extends Component {
  render() {
    return(
      <div id="resume" className={classNames(styles["resume"], "py-5 px-md-5 px-3")}>
        <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">My Work Experience</div>
        <h2>Resume</h2>
        <div className="py-4">
          <h3>Experience :</h3>
          <div className="row py-4">
            <div className="col-md-4 py-1">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light ti-ruler-pencil"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10">
                  <h3 className="text-primary">
                    Website Solutions Pvt. Ltd
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">2013 to present</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1">
              <h3>Front-End Development</h3>
              <p className="text-gray-light">Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.</p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-4 py-1">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light ti-bookmark-alt"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10">
                  <h3 className="text-primary">
                    Global Solutions
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">
									2010 to 2013
								</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1">
              <h3>UI/UX Design</h3>
              <p className="text-gray-light">Ut enim ad minim niam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-4 py-1">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light ti-calendar"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10">
                  <h3 className="text-primary">
                    Template Agency
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">
									2009 to 2010
								</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1">
              <h3>Website production</h3>
              <p className="text-gray-light">Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim niam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip exea.</p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h3>Education:</h3>
          <div className="row py-4">
            <div className="col-md-4 py-1">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light ti-crown"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10">
                  <h3 className="text-primary">
                    University of London
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">
									2008 to 2009
								</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1">
              <h3>Computer science</h3>
              <p className="text-gray-light">Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
                minim niam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident,</p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-4 py-1">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-12 col-sm-1 col-2">
                  <div className={styles["resume-icon"]}>
                    <span className="text-gray-light ti-thumb-up"/>
                  </div>
                </div>
                <div className="resume-name col-xl-10 col-lg-9 col-md-12 col-sm-11 col-10">
                  <h3 className="text-primary">
                    Institue of art & Design
                  </h3>
                  <span className="h5 text-gray-light font-weight-medium">
									2007 to 2009
								</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-1">
              <h3>Software engineering</h3>
              <p className="text-gray-light">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Ut enim ad minim niam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
