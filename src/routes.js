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
    });
  }
}
