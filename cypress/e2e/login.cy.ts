import { loginPage } from '../pages/LoginPage';

describe('Pruebas de Autenticación - SauceDemo', () => {

  beforeEach(() => {
    // Esto se ejecuta antes de cada test
    loginPage.visitar();
  });

  it('Debería iniciar sesión correctamente con un usuario estándar', () => {
    loginPage.escribirUsuario('standard_user');
    loginPage.escribirPassword('secret_sauce');
    loginPage.clickLogin();
    loginPage.verificarLoginExitoso();
  });
});