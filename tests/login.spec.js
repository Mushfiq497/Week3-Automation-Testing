import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { testData } from '../utils/testData';

test('Valid Login', async ({ page }) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.navigate(testData.baseURL);

    await login.login(
        testData.validUser.username,
        testData.validUser.password
    );

    await inventory.verifyInventoryPage();

});