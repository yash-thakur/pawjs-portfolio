import React, {Component} from "react";
import _ from "lodash";
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
      const progress = (value) => {
        let progress = value / 100;
        progressValue[i].style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);
      
      };
      progressValue[i].style.strokeDasharray = CIRCUMFERENCE;
      progress(value);
    }
  }
  
  render() {
    const skills = [
      {
        name: "ReactJS",
        percentage: "80%",
      },
      {
        name: "Mobile Responsiveness",
        percentage: "75%",
      },
      {
        name: "HTML5 & CSS3",
        percentage: "85%",
      },
      {
        name: "Wordpress",
        percentage: "50%",
      },
      {
        name: "JavaScript / JQuery",
        percentage: "90%",
      },
      {
        name: "Remote Technical Support",
        percentage: "75%",
      }
    ];
    
    const languages = [
      {
        name: "English Experienced",
        percentage: "90",
      },
      {
        name: "Hindi Experienced",
        percentage: "80",
      },
      {
        name: "Gujarati Experienced",
        percentage: "90",
      },
    ];
    return(
      <div className={classNames(styles["skill"], "py-md-5 px-xl-5 px-md-3 p-3")}>
        <div className="bg-primary py-2 px-4 d-inline-block text-white mb-3">I am good at</div>
        <div className="py-4">
          <h2>My Skill</h2>
          <div className="row my-4 mx-0">
            <div className="col-md-6 py-2">
              <h3>My Professional Strengths</h3>
              <p className="text-gray-light font-weight-medium h5 my-4">
                “The strength of a man's virtue should not be measured by his special exertions, but by his habitual
                acts”
              </p>
              <blockquote className={classNames(styles["skill-content"], "pl-3 blockquote")}>
                <p className="text-gray-light font-italic">
                  Having tried my hands in the corporate world and excelled in freelancing,
                  I am equipped with the best of both worlds.
                  My experience in the corporate world has taught me team building skills and the art of interaction with clients.
                </p>
                <p className="text-gray-light font-italic">
                  Freelancing has opened the door of new possibilities for me. It has nurtured the potential in me.
                  I have learnt the art of management from beginning to the end. Additionally, time management,
                  self confidence and the ability to grasp new knowledge quickly has been an added advantage.
                  My hunger for knowledge and the desire to arm myself with as many new technologies as possible is the driving force behind my strive for excellence.
                </p>
              </blockquote>
            </div>
            <div className="col-md-6 py-2">
              <ul className="list-unstyled mb-3 d-inline-block w-100">
                {
                  _.map(skills, (skill, key) => {
                    return (
                      <li key={key} className="mb-3">
                        <p className="text-gray-light mb-1 font-weight-medium">
                          {_.get(skill, "name", "")}
                        </p>
                        <div className={classNames(styles["progress-bar"], "d-inline-block w-100 mb-0")}>
                          <p className={classNames(styles["bar"], "bg-primary float-left py-2 mb-0")} style={{width: _.get(skill, "percentage", "50%")}}>
                            <span className="font-weight-medium text-gray-light">{_.get(skill, "percentage", "50%")}</span>
                          </p>
                        </div>
                      </li>
                    );
                  })
                }
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
          <p className="text-gray-light">
            The significance of the language plays a vital role in every aspect and interaction in our everyday lives.
            We use language to inform the people around us of what we feel, what we desire, and question/understand the world around us.
            Having the capacity to speak with each other, shape securities, co-operation, and it’s what isolates people from other creature species.
            Remember, communication is a two way street that should be embraced and not ignored.
          </p>
          <div className="row py-4 mx-0">
            {
              _.map(languages, (language, key) => {
                return (
                  <div key={key} className="col-lg-3 col-sm-6 py-3 text-center">
                    <div className={classNames(styles["circular-progress-bar"], "circular-progress-bar")} data-percent={_.get(language, "percentage", "50")}>
                      <svg className={styles["circle"]} width="150" height="150" viewBox="0 0 150 150">
                        <circle className={styles["progress-meter"]} cx="75" cy="75" r="71" strokeWidth="8"/>
                        <circle className={classNames(styles["progress-value"], "progress-value")} cx="75" cy="75" r="71" strokeWidth="8"/>
                      </svg>
                    </div>
                    <h5 className="text-gray-light font-weight-medium my-3">{_.get(language, "name", "English Advanced")}</h5>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="py-4">
          <h2>Knowledge</h2>
          <p className="text-gray-light">Auis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.</p>
          <div className="row mx-0">
            <div className="col-md-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Web development</span>
            </div>
            <div className="col-md-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Strong creative skills</span>
            </div>
            <div className="col-md-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Cultivate a design sense</span>
            </div>
            <div className="col-md-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>The ability to pay attention to detail</span>
            </div>
            <div className="col-md-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Right balance of tools</span>
            </div>
            <div className="col-md-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Ability to work to deadlines</span>
            </div>
            <div className="col-md-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Approach every new skill</span>
            </div>
            <div className="col-md-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Comfortable with a CMS</span>
            </div>
            <div className="col-md-4 col-sm-6 py-1">
              <span className="ti-hand-point-right pr-2 text-primary"/>
              <span>Good business management</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
