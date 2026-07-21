import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = '[data-test="error"]';
        this.logo = '.login_logo';
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginButton);
    }

    async verifyLogo() {
        await expect(this.page.locator(this.logo)).toBeVisible();
    }

    async verifyError() {
        await expect(this.page.locator(this.errorMessage)).toBeVisible();
    }
}