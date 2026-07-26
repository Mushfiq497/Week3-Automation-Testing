const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");

(async function formTest() {

    let driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {

        // Open Website
        await driver.get("https://demoqa.com/text-box");
        await driver.manage().window().maximize();
        await driver.sleep(2000);

        // Fill Name
        await driver.findElement(By.id("userName")).sendKeys("Muhammad Mushfiq");
        await driver.sleep(1000);

        // Fill Email
        await driver.findElement(By.id("userEmail")).sendKeys("mushfiq@example.com");
        await driver.sleep(1000);

        // Fill Current Address
        await driver.findElement(By.id("currentAddress")).sendKeys("Lahore, Pakistan");
        await driver.sleep(1000);

        // Fill Permanent Address
        await driver.findElement(By.id("permanentAddress")).sendKeys("Lahore, Pakistan");
        await driver.sleep(1000);

        // Scroll to Submit Button
        const submitBtn = await driver.findElement(By.id("submit"));
        await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", submitBtn);
        await driver.sleep(2000);

        // Click Submit
        await driver.executeScript("arguments[0].click();", submitBtn);

        // Wait for Output
        await driver.wait(until.elementLocated(By.id("output")), 5000);
        await driver.sleep(3000);

        // Assertion
        const output = await driver.findElement(By.id("output")).getText();

        if (output.includes("Muhammad Mushfiq")) {
            console.log("✅ Form Submitted Successfully");
        } else {
            console.log("❌ Form Submission Failed");
        }

        // Keep browser open for 5 seconds
        await driver.sleep(3000);

    } catch (error) {

        console.error(error);

    } finally {

        await driver.quit();

    }

})();