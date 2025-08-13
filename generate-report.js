const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version":"1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Parallel": "Scenarios",
    "Executed": "GitHub Actions"
  }
};

reporter.generate(options);
