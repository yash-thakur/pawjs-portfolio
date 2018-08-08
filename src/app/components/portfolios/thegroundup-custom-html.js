import React, {Component} from "react";
import _ from "lodash";
import PortfolioSingle from "../portfolio-single/portfolio-single";
import authorsList from "./authorsList";

import GroundUpImg from "./images/The-GroundUp.jpg";
import GroundUpHomeImg from "./images/TheGroundUp-Home.jpg";

export default class TheGroundUp extends Component {
  render() {
    return (
      <PortfolioSingle
        title="The Groundup Custom HTML"
        portfolioImages={[
          GroundUpImg,
          GroundUpHomeImg
        ]}
        projectUrl="http://thegroundup.com/staff-resources/"
        skills="CSS, HTML, JavaScript"
        author={_.get(authorsList, "authors.yash_thakur", {})}
        releaseDate="18/08/2016"
        clientName="Luis Chamorro"
      >
        <div>
          <h2>Custom HTML Requirement:</h2>
          <p>This work contains a requirement of the client to have an invoice form that the staff can use from staff
            resources which the staff can access from anywhere, and the staff can send the quote to the customers. The
            invoice also contains the ability to print it or save it as pdf from the print setup. During print, only the
            invoice would print, and all the remaining contents of the website would hide. Hence it was a custom HTML
            requirement by the client to create such an HTML form for his site. Also, the client required a small
            calculator which you can see above this invoice form which should give the cost of sending the quantity to a
            particular location.</p>
          <h2>The work:</h2>
          <p>The work is complete as per the requirement and you can follow up the <a href="http://thegroundup.com/staff-resources/" rel="noreferrer noopener nofollow" target="_blank">link</a> to check the work in action.</p></div>
      </PortfolioSingle>
    );
  }
}
