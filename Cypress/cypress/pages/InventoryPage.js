class InventoryPage {

    verifyInventoryPage() {
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    }

    addBackpackToCart() {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
    }

    openCart() {
        cy.get('.shopping_cart_link').click();
    }

    verifyCartItem() {
        cy.get('.inventory_item_name')
            .should('contain', 'Sauce Labs Backpack');
    }
}

export default InventoryPage;