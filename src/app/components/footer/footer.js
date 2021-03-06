import React, {Component} from "react";
import classNames from "classnames";
import ReactDOM from "react-dom"

import * as styles from "../home/home.scss";
import config from "../../../config";

import BlueMarker from "./images/blue-marker.png";

export default class Footer extends Component {
  
  componentDidMount() {
    this.initializeMap();
  }
  
  componentWillReceiveProps() {
    this.initializeMap();
  }
  
  
  initializeMap() {
    
    let myLatLng=new google.maps.LatLng(20.599046699073398,72.94154964409734);
    let mapOptions={
      zoom: 15,
      center: myLatLng,
      draggable: true,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":1}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
    };
    let mapElement=ReactDOM.findDOMNode(this.mapCanvas);
    let map=new google.maps.Map(mapElement, mapOptions);
    let marker=new google.maps.Marker({
      position: new google.maps.LatLng(20.599046699073398,72.94154964409734),
      map: map,
      icon: BlueMarker,
    });
  }
  
  render() {
    return(
      <div className={styles["contact"]}>
        <div className={styles["contact-info"]}>
          <div id="google-map">
            <div id="map-canvas" className={styles["map-canvas"]} ref={el => this.mapCanvas = el}/>
          </div>
          <div className={classNames(styles["contact-details"], "p-4 text-white")}>
            <h2 className="font-weight-normal my-4">Say Hi It’s Free!</h2>
            <div className={classNames(styles["address"], "pt-4")}>
              <ul className="list-unstyled">
                <li className="d-table mb-4">
                  <span className={classNames(styles["icon"], "d-table-cell ti-location-pin")}/>
                  <p className="d-table-cell pl-3">Valsad, Gujarat, India.</p>
                </li>
                <li className="d-table mb-4">
                  <span className={classNames(styles["icon"], "d-table-cell ti-marker-alt")}/>
                  <p className="d-table-cell pl-3">
                    <a href="mailto:thakur.yash514@gmail.com" className={styles["email"]}>thakur.yash514@gmail.com</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className={classNames(styles["social"], "pt-4")}>
              <h5 className="font-weight-normal text-uppercase">I'm also on Social Networks</h5>
              <p className={styles["info-text"]}>Follow me on social networks to get the latest news, blog, updates and much
                more.</p>
              <ul className="list-unstyled text-center pt-4">
                <li className="d-inline-block align-top">
                  <a href={config.social.fb} rel="noreferrer noopener nofollow" target="_blank" className={classNames(styles["social-icon"], "px-2")}><span className="d-none">FB URL</span><i className="fa fa-facebook"/></a>
                </li>
                <li className="d-inline-block align-top">
                  <a href={config.social.twitter} rel="noreferrer noopener nofollow" target="_blank" className={classNames(styles["social-icon"], "px-2")}><span className="d-none">Twitter URL</span><i className="fa fa-twitter"/></a>
                </li>
                <li className="d-inline-block align-top">
                  <a href={config.social.github} rel="noreferrer noopener nofollow" target="_blank" className={classNames(styles["social-icon"], "px-2")}><span className="d-none">Github URL</span><i className="fa fa-github"/></a>
                </li>
                <li className="d-inline-block align-top">
                  <a href={config.social.linkedIn} rel="noreferrer noopener nofollow" target="_blank" className={classNames(styles["social-icon"], "px-2")}><span className="d-none">LinkedIn URL</span><i className="fa fa-linkedin"/></a>
                </li>
              </ul>
            </div>
            <div className="text-center pt-4">
              <a
                className="btn btn-primary py-3 px-4 text-uppercase"
                href=""
              >
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
