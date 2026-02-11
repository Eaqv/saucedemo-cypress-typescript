class CartPage {
    private checkoutButton = '[data-test="checkout"]';
    private cartItem = '.cart_item';
    private removeButton = '[data-test^="remove"]';

    clickCheckout() {
        cy.get(this.checkoutButton).click();
    }

    verifyItemInCart() {
        cy.get(this.cartItem).should('be.visible');
    }

    removeItem() {
        cy.get(this.removeButton).first().click();
    }
}

export const cartPage = new CartPage();