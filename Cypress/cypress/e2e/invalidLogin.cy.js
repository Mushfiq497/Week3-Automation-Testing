import LoginPage from '../pages/LoginPage';

describe('Invalid Login Test', () => {

    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.fixture('testData').then((data) => {
            cy.wrap(data).as('testData');
        });

        loginPage.visit();
    });

    it('should display error message for invalid login', function () {

        loginPage.login(
            this.testData.invalidUser.username,
            this.testData.invalidUser.password
        );

        loginPage.getErrorMessage()
            .should('contain', 'Username and password do not match');
    });

});