const { Builder, By, until } = require('selenium-webdriver');

(async function testLogin() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://127.0.0.1:5501/login.html');

    // Enter username and password
    await driver.findElement(By.id("username")).sendKeys("admin");
    await driver.findElement(By.id("password")).sendKeys("12345");

    // Click login button
    await driver.findElement(By.id("loginBtn")).click();

    // Wait for the message to be visible
    const message = await driver.findElement(By.id("message")).getText();
    await driver.sleep(2000);
    // Validate message
    if (message === "Login successful!") {
      console.log("✅ Test Passed: Valid credentials worked.");
    } else {
      console.log("❌ Test Failed: Unexpected message:", message);
    }

  } catch (err) {
    console.error("❌ Error during test:", err);
  } finally {
    await driver.quit();
  }
})();
