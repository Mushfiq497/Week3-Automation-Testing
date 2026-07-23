import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Homepage Navigation', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    beforeEach(() => {
        cy.fixture('testData').then((data) => {
            cy.wrap(data).as('testData');
        });

        loginPage.visit();

        cy.get('@testData').then((data) => {
            loginPage.login(
                data.validUser.username,
                data.validUser.password
            );
        });
    });

    it('should add backpack to cart successfully', () => {

        inventoryPage.addBackpackToCart();

        inventoryPage.openCart();

        inventoryPage.verifyCartItem();

    });

});