import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { testData } from '../utils/testData';

test('Product Navigation', async ({ page }) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.navigate(testData.baseURL);

    await login.login(
        testData.validUser.username,
        testData.validUser.password
    );

    await inventory.openBackpack();

    await inventory.verifyBackButton();

});