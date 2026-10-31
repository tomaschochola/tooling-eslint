import { ESLintConfigBuilder, filePatterns } from '@tomaschochola/tooling-eslint';

const browserFiles = ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.mjs'];

export default new ESLintConfigBuilder()
    .addNodeGlobalsForConfigFiles()
    .addBrowserGlobals({ files: browserFiles })
    .addGitIgnoreFile(import.meta.url)
    .addJavaScriptRecommendedRules({ files: filePatterns.scripts })
    // .addSonarJsRecommendedRules({ files: browserFiles })
    .toConfig();
