import HomeRoute from "./pages/home";
import BlogRoute from "./pages/blog";

export default class Routes {
  
  apply(routeHandler) {
  
    const routes = [
      ...HomeRoute,
      ...BlogRoute
    ];
    
    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
