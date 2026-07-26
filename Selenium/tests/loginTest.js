const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");

(async function loginTest() {

    let driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {

        // Open Website
        await driver.get("https://www.saucedemo.com/");
        await driver.manage().window().maximize();
        await driver.sleep(2000);

        // Enter Username
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.sleep(1000);

        // Enter Password
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.sleep(1000);

        // Click Login
        await driver.findElement(By.id("login-button")).click();

        // Wait for Inventory Page
        await driver.wait(until.urlContains("inventory"), 5000);
        await driver.sleep(3000);

        // Assertion
        const currentUrl = await driver.getCurrentUrl();

        if (currentUrl.includes("inventory")) {
            console.log("✅ Login Successful");
        } else {
            console.log("❌ Login Failed");
        }

        // Keep browser open for 5 seconds
        await driver.sleep(3000);

    } catch (error) {

        console.error(error);

    } finally {

        await driver.quit();

    }

})();