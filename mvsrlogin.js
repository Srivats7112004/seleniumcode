const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

async function loginTest() {
    // Launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Step 1: Go to login page
        await driver.get("http://results.mvsrec.edu.in/SBLogin.aspx");

        // Step 2: Enter credentials
        await driver.findElement(By.id("txtUserName")).sendKeys("245121737129");
        await driver.findElement(By.id("txtPassword")).sendKeys("245121737129");

        // Step 3: Click on login
        await driver.findElement(By.id("btnSubmit")).click();

        // Step 4: Verify login success by checking label text
        const user = await driver.findElement(By.id("lblHTNo")).getText();
        assert.strictEqual(user, "245121737129");
        console.log("Login success");

        // Step 5: Click on 'Exams' button
        await driver.findElement(By.id("Stud_cpModules_imgbtnExams")).click();

        // Step 6: Click on 'Semester wise marks' link
        await driver.findElement(By.id("cpBody_lnkSem")).click();

        // Step 7: Get current URL to verify redirection
        const ur = await driver.getCurrentUrl();
        assert.strictEqual(ur, "http://results.mvsrec.edu.in/STUDENTLOGIN/Frm_SemwiseStudMarks.aspx");
        console.log("Display marks success");

    } finally {
        // Close the browser
        await driver.quit();
    }
}

// Execute the function
loginTest();
