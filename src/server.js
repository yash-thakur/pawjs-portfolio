import React from "react";
export default class Server {
  
  apply(serverHandler) {
    serverHandler.hooks.beforeHtmlRender.tap("AddGoogleAnalytics", (Application) => {
      Application.htmlProps.head.push(
        <script key="analytics_link" async src="https://www.googletagmanager.com/gtag/js?id=UA-90331911-1"/>);
      Application.htmlProps.head.push(
        <script key="analytics" dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
  
      gtag('config', 'UA-90331911-1');`}}/>);
      Application.htmlProps.head.push(
        <script key="google_maps" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1z69MxzLu1V4vsP3ATKeogOSkA1op0FU&ver=4.9.4"/>
      );
      return Application;
    })
  }
}
