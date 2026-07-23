import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Valid Login Test', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    beforeEach(() => {
        cy.fixture('testData').then((data) => {
            cy.wrap(data).as('testData');
        });

        loginPage.visit();
    });

    it('should login successfully with valid credentials', function () {

        loginPage.login(
            this.testData.validUser.username,
            this.testData.validUser.password
        );

        inventoryPage.verifyInventoryPage();
    });

});