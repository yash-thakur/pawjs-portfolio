import HomeRoute from "./pages/home";
import BlogRoute from "./pages/blog";
import PortfoliosRoute from "./pages/portfolios";

export default class Routes {
  
  apply(routeHandler) {
  
    const routes = [
      ...HomeRoute,
      ...BlogRoute,
      ...PortfoliosRoute
    ];
    
    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
      routeHandler.getDefaultSeoSchema = () => ({
        title: "Yash Thakur",
        name: `Home | Yash Thakur`,
        description: "",
        type: "website",
        url: `https://yashthakur.in`,
        site_name: "Yash Thakur",
        image: "",
        meta: [
          {
            name: "author",
            content: "Yash Thakur"
          },
          {
            name: "application-name",
            content: "Yash Thakur",
          },
          {
            name: "generator",
            content: "Yash Thakur"
          },
          {
            name: "apple-mobile-web-app-title",
            content: "Yash Thakur"
          }
        ]
      })
    });
  }
}
