import { loginPage } from '../pages/LoginPage';

describe('Cross-user Comparison', () => {
    it('Debería validar que las imágenes cargan para standard_user pero fallan para problem_user', () => {
        // Parte 1: Standard User (Todo bien)
        loginPage.visitar();
        loginPage.login('standard_user', 'secret_sauce');
        cy.get('.inventory_item_img img').first()
            .should('have.attr', 'src').and('not.contain', 'sl-404');

        // Logout para limpiar sesión (Data cleanup)
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

        // Parte 2: Problem User (Imagen rota)
        loginPage.login('problem_user', 'secret_sauce');
        cy.get('.inventory_item_img img').first()
            .should('have.attr', 'src').and('contain', 'sl-404');
    });
});