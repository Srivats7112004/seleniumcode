const { Builder, By, until } = require("selenium-webdriver");

(async function testAddition() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://127.0.0.1:5501/calc.html");

    // Enter numbers
    await driver.findElement(By.id("num1")).sendKeys("20");
    await driver.findElement(By.id("num2")).sendKeys("30");

    // Click "Add" button
    await driver.findElement(By.id("addBtn")).click();

    // Wait and get result
    let result = await driver.findElement(By.id("result")).getText();

    if (result === "Result: 50") {
      console.log("✅ Test Passed: 20 + 30 = 50");
    } else {
      console.log("❌ Test Failed. Got:", result);
    }

  } catch (error) {
    console.error("❌ Error during test:", error);
  } finally {
    await driver.quit();
  }
})();
