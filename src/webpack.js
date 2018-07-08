import ImageOptimizer from "@pawjs/image-optimizer/lib/webpack";

export default class ProjectWebpack {
  constructor({addPlugin}) {
    
    // Production is default supported env
    const optimizerOptions = {
      supportedEnv: [
        "production"
      ],
      configLabel: "MAX_QUALITY"
    };
    addPlugin(new ImageOptimizer(optimizerOptions));
  }
}
