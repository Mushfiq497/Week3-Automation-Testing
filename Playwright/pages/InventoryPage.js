import { expect } from '@playwright/test';

export class InventoryPage {

    constructor(page) {
        this.page = page;

        this.title = '.title';
        this.backpack = '#item_4_title_link';
        this.cart = '.shopping_cart_link';
        this.cartBadge = '.shopping_cart_badge';
        this.addToCart = '#add-to-cart-sauce-labs-backpack';
        this.backButton = '#back-to-products';
    }

    async verifyInventoryPage() {
        await expect(this.page.locator(this.title)).toHaveText('Products');
    }

    async openBackpack() {
        await this.page.click(this.backpack);
    }

    async verifyBackButton() {
        await expect(this.page.locator(this.backButton)).toBeVisible();
    }

    async addProduct() {
        await this.page.click(this.addToCart);
    }

    async verifyCartBadge() {
        await expect(this.page.locator(this.cartBadge)).toHaveText('1');
    }
}