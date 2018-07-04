import React, {Component} from "react";
import ReactDom from "react-dom";
import classNames from "classnames";

//Custom CSS
import * as styles from "./home.scss";

export default class Skills extends Component {
  
  componentDidMount() {
    this.loadCircularProgressBars();
  }
  
  loadCircularProgressBars() {
    let progressValue = document.querySelectorAll(".progress-value");
    let RADIUS = 71;
    let CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    let elements = document.getElementsByClassName("circular-progress-bar");
    for (let i = 0; i < elements.length; i++){
      let value = elements[i].dataset.percent;
      function progress(value) {
      
        let progress = value / 100;
        let dashoffset = CIRCUMFERENCE * (1 - progress);
      
        // console.log('progress:', value + '%', '|', 'offset:', dashoffset);
      
        progressValue[i].style.strokeDashoffset = dashoffset;
      
      }
      progressValue[i].style.strokeDasharray = CIRCUMFERENCE;
      progress(value);
    }
  }
  render() {
    return(
      <div id="skill" className={classNames(styles["skill"], "py-5 px-md-5 px-3")}>
        <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">I am good at</div>
        <div className="py-4">
          <h2>My Skill</h2>
          <div className="row my-4">
            <div className="col-md-6">
              <h3>My Professional Strengths</h3>
              <p className="text-gray-light font-weight-medium h5 my-4">
                “The strength of a man's virtue should not be measured by his special exertions, but by his habitual
                acts”
              </p>
              <blockquote className={classNames(styles["skill-content"], "pl-3 blockquote")}>
                <p className="text-gray-light font-italic">My Professional Strengths Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Debitis velit error culpa unde, esse quam quasi, necessitatibus
                  voluptatem possimus, repellendus.</p>
                <p className="text-gray-light font-italic">The other virtues practice in succession by Franklin were
                  silence, order, resolution, frugality, industry, sincerity, Justice, moderation, cleanliness,
                  tranquility, chastity and humility. For the summary order he followed a little scheme of employing his
                  time each day. From five to seven each morning he spent in bodily personal attention, saying a short
                  prayer, thinking over the day’s business and resolutions, studying and eating breakfast. From eight
                  till twelve he worked at his trade. From twelve to one he read or overlooked his accounts and dined.
                  From two to five he worked at his trade. The rest of the evening until 10 he spent in music, or
                  diversion of some sort.</p>
              </blockquote>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled mb-3 d-inline-block w-100">
                <li className="mb-3">
                  <p className="text-gray-light mb-1 font-weight-medium">
                    Web & Graphic Design
                  </p>
                  <div className={classNames(styles["progress-bar"], "d-inline-block w-100 mb-0")}>
                    <p className={classNames(styles["bar"], "bg-primary float-left py-2 mb-0")} style={{width: "70%"}}>
                      <span className="font-weight-medium text-gray-light">70%</span>
                    </p>
                  </div>
                </li>
                <li className="mb-3">
                  <p className="text-gray-light mb-1 font-weight-medium">
                    HTML5 & CSS3
                  </p>
                  <div className={classNames(styles["progress-bar"], "d-inline-block w-100 mb-0")}>
                    <p className={classNames(styles["bar"], "bg-primary float-left py-2 mb-0")} style={{width: "55%"}}>
                      <span className="font-weight-medium text-gray-light">55%</span>
                    </p>
                  </div>
                </li>
                <li className="mb-3">
                  <p className="text-gray-light mb-1 font-weight-medium">
                    JavaScript / JQuery
                  </p>
                  <div className={classNames(styles["progress-bar"], "d-inline-block w-100 mb-0")}>
                    <p className={classNames(styles["bar"], "bg-primary float-left py-2 mb-0")} style={{width: "80%"}}>
                      <span className="font-weight-medium text-gray-light">80%</span>
                    </p>
                  </div>
                </li>
                <li className="mb-3">
                  <p className="text-gray-light mb-1 font-weight-medium">
                    PHP
                  </p>
                  <div className={classNames(styles["progress-bar"], "d-inline-block w-100 mb-0")}>
                    <p className={classNames(styles["bar"], "bg-primary float-left py-2 mb-0")} style={{width: "60%"}}>
                      <span className="font-weight-medium text-gray-light">65%</span>
                    </p>
                  </div>
                </li>
              </ul>
              <ul className={classNames(styles["skill-chart"], "row list-unstyled my-4 mx-0")}>
                <li className={classNames(styles["expand"], styles["expand-left"], "col-3 px-0")}>
                  <p className="text-gray-light mb-0 mt-1">Newbie</p>
                </li>
                <li className={classNames(styles["expand"], styles["expand-left"], "col-3 px-0")}>
                  <p className="text-gray-light mb-0 mt-1">Decent</p>
                </li>
                <li className={classNames(styles["expand"], styles["expand-right"], "col-3 px-0 text-right")}>
                  <p className="text-gray-light mb-0 mt-1">Pretty Good</p>
                </li>
                <li className={classNames(styles["expand"], styles["expand-right"], "col-3 px-0 text-right")}>
                  <p className="text-gray-light mb-0 mt-1">Master</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h2>Language skills</h2>
          <p className="text-gray-light">You will begin to realise why this exercise is called the Dickens Pattern with
            reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise
            is to hypnotize yourself to be aware of two very real possibilities for your future. Two distinct
            pathways.</p>
          <div className="row py-4">
            <div className="col-lg-3 col-sm-6 py-3 text-center">
              <div className={classNames(styles["circular-progress-bar"], "circular-progress-bar")} data-percent="80">
                <svg className={styles["circle"]} width="150" height="150" viewBox="0 0 150 150">
                  <circle className={styles["progress-meter"]} cx="75" cy="75" r="71" strokeWidth="8"/>
                  <circle className={classNames(styles["progress-value"], "progress-value")} cx="75" cy="75" r="71" strokeWidth="8"/>
                </svg>
              </div>
              <h5 className="text-gray-light font-weight-medium my-3">English Experienced</h5>
            </div>
            <div className="col-lg-3 col-sm-6 py-3 text-center">
              <div className={classNames(styles["circular-progress-bar"], "circular-progress-bar")} data-percent="70">
                <svg className={styles["circle"]} width="150" height="150" viewBox="0 0 150 150">
                  <circle className={styles["progress-meter"]} cx="75" cy="75" r="71" strokeWidth="8"/>
                  <circle className={classNames(styles["progress-value"], "progress-value")} cx="75" cy="75" r="71" strokeWidth="8"/>
                </svg>
              </div>
              <h5 className="text-gray-light font-weight-medium my-3">French Advanced</h5>
            </div>
            <div className="col-lg-3 col-sm-6 py-3 text-center">
              <div className={classNames(styles["circular-progress-bar"], "circular-progress-bar")} data-percent="65">
                <svg className={styles["circle"]} width="150" height="150" viewBox="0 0 150 150">
                  <circle className={styles["progress-meter"]} cx="75" cy="75" r="71" strokeWidth="8"/>
                  <circle className={classNames(styles["progress-value"], "progress-value")} cx="75" cy="75" r="71" strokeWidth="8"/>
                </svg>
              </div>
              <h5 className="text-gray-light font-weight-medium my-3">Spanish Basic</h5>
            </div>
            <div className="col-lg-3 col-sm-6 py-3 text-center">
              <div className={classNames(styles["circular-progress-bar"], "circular-progress-bar")} data-percent="90">
                <svg className={styles["circle"]} width="150" height="150" viewBox="0 0 150 150">
                  <circle className={styles["progress-meter"]} cx="75" cy="75" r="71" strokeWidth="8"/>
                  <circle className={classNames(styles["progress-value"], "progress-value")} cx="75" cy="75" r="71" strokeWidth="8"/>
                </svg>
              </div>
              <h5 className="text-gray-light font-weight-medium my-3">German Basic</h5>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h2>Knowledge</h2>
          <p className="text-gray-light">Auis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.</p>
          <div className="row">
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Web design and development</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Strong creative skills</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Cultivate a design sense</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Multimedia design</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>The ability to pay attention to detail</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Right balance of tools</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Digital media development</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Ability to work to deadlines</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Approach every new skill</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Interactive computing</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Comfortable with a CMS</span>
            </div>
            <div className="col-lg-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Good business management</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
