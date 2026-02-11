import { loginPage } from '../pages/LoginPage';
import { productsPage } from '../pages/ProductsPage';
import { cartPage } from '../pages/CartPage'; // <--- Nueva importación
import { checkoutPage } from '../pages/CheckoutPage';

describe('Flujo de Compra E2E', () => {
    beforeEach(() => {
        loginPage.visitar();
        loginPage.login('standard_user', 'secret_sauce');
    });

    it('Debería agregar un producto al carrito exitosamente', () => {
        productsPage.addItemToCart(0);
        productsPage.getCartBadge().should('have.text', '1');
    });

    it('Debería completar una compra de principio a fin', () => {
        productsPage.addItemToCart(0);
        productsPage.goToCart();
        cartPage.verifyItemInCart(); // <--- Uso del POM
        cartPage.clickCheckout();    // <--- Uso del POM

        checkoutPage.fillInformation('Alejandro', 'Test', '12345');
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();
        checkoutPage.verifyOrderComplete();
    });

    it('Debería mostrar error si faltan datos en el checkout (Edge Case)', () => {
        productsPage.addItemToCart(0);
        productsPage.goToCart();
        cartPage.clickCheckout();    // <--- Uso del POM

        checkoutPage.clickContinue();
        cy.get('[data-test="error"]').should('be.visible');
    });
});