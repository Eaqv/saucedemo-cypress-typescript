class ProductsPage {
    private inventoryList = '.inventory_list';
    private addToCartButtons = '[data-test^="add-to-cart"]';
    private cartBadge = '.shopping_cart_badge';
    private cartLink = '.shopping_cart_link';

    addItemToCart(index: number = 0) {
        cy.get(this.addToCartButtons).eq(index).click();
    }

    getCartBadge() {
        return cy.get(this.cartBadge);
    }

    goToCart() {
        cy.get(this.cartLink).click();
    }

    verifyInventoryVisible() {
        cy.get(this.inventoryList).should('be.visible');
    }
}

export const productsPage = new ProductsPage();