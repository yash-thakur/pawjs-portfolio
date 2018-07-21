import React, {Component} from "react";
import _ from "lodash";
import PortfolioBanner from "./portfolio-banner";
import Header from "../header/header";
import Footer from "../footer/footer";
import PortfolioBody from "./portfolio-body";

export default class PortfolioSingle extends Component {
  render() {
    return (
      <div className="row flex-xl-nowrap mx-0">
        <Header/>
        <main className="col-12 col-lg-9 col-xl-10 p-0">
          <PortfolioBanner
            title={_.get(this.props, "title", "")}
            authorName={_.get(this.props, "author.name", "")}
          />
          <PortfolioBody
            portfolioImages={_.get(this.props, "portfolioImages", [])}
            title={_.get(this.props, "title", "")}
            projectUrl={_.get(this.props, "projectUrl", "")}
            releaseDate={_.get(this.props, "releaseDate", "")}
            clientName={_.get(this.props, "clientName", "")}
            author={_.get(this.props, "author", {})}
            skills={_.get(this.props, "skills", "")}
          >
            {this.props.children}
          </PortfolioBody>
          <Footer/>
        </main>
      </div>
    );
  }
}
