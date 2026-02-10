class LoginPage {
    // 1. Definimos los Selectores (el "Mapa" de la página)
    private usernameInput = '#user-name';
    private passwordInput = '#password';
    private loginButton = '#login-button';
    private titleProduct = '.title';
    private errorMessage = '[data-test="error"]';

    // 2. Definimos las Acciones (lo que el usuario puede HACER)
    visitar() {
        cy.visit('/'); // Ahora usa la baseUrl automáticamente
    }

    escribirUsuario(username: string) {
        cy.get(this.usernameInput).type(username);
    }

    escribirPassword(password: string) {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    // 3. Definimos una validación para saber si entramos
    verificarLoginExitoso() {
        cy.get(this.titleProduct).should('contain.text', 'Products');
    }

    verificarMensajeError(mensaje: string) {
        cy.get(this.errorMessage).should('be.visible').and('contain.text', mensaje);
    }

    login(username: string, password: string) {
        this.escribirUsuario(username);
        this.escribirPassword(password);
        this.clickLogin();
    }
}

// Exportamos una instancia de la clase para usarla en los tests
export const loginPage = new LoginPage();