import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test('Website Load and Title Check', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate(testData.baseURL);

    await expect(page).toHaveTitle('Swag Labs');

    await login.verifyLogo();

});