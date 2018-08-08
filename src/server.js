import React from "react";
export default class Server {
  
  apply(serverHandler) {
    serverHandler.hooks.beforeHtmlRender.tap("AddGoogleAnalytics", (Application) => {
      Application.htmlProps.head.push(
        <script key="kjhs" async src="https://www.googletagmanager.com/gtag/js?id=UA-90331911-1"/>);
      Application.htmlProps.head.push(
        <script key="kjshad" dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
  
      gtag('config', 'UA-90331911-1');`}}/>);
      return Application;
    })
  }
}
