import { ESLintConfigBuilder, filePatterns } from '@tomaschochola/tooling-eslint';

const browserFiles = ['src/**/*.js', 'src/**/*.mjs'];

export default new ESLintConfigBuilder()
    .addNodeGlobalsForConfigFiles()
    .addBrowserGlobals({ files: browserFiles })
    .addGitIgnoreFile(import.meta.url)
    .addJavaScriptRecommendedRules({ files: filePatterns.scripts })
    .addNativeBrowserModuleRules({ files: browserFiles })
    // .addSonarJsRecommendedRules({ files: browserFiles })
    .toConfig();
