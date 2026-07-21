import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test('Invalid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate(testData.baseURL);

    await login.login(
        testData.invalidUser.username,
        testData.invalidUser.password
    );

    await login.verifyError();

});