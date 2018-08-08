import ImageOptimizer from "@pawjs/image-optimizer/lib/webpack";
// import SassPlugin from "@pawjs/sass/webpack";

export default class ProjectWebpack {
  constructor({addPlugin}) {
    
    // Production is default supported env
    const optimizerOptions = {
      supportedEnv: [
        "production"
      ],
      configLabel: "MEDIUM_QUALITY"
    };
    addPlugin(new ImageOptimizer(optimizerOptions));
    // addPlugin(new SassPlugin);
  }
}
