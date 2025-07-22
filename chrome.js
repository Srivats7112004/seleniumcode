const { Builder } = require('selenium-webdriver');

(async function openGoogle() {
  // Launch Chrome browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open Google
    await driver.get('https://www.google.com');
    console.log("Successful OPen");
    
    
  } catch (error) {
    console.error('Error opening Google:', error);
  }
  finally {
    await driver.quit();
  }
})();
