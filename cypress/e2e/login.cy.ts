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

  it('Deberia mostrar erroe con usuario bloqueado', () => {
    loginPage.escribirUsuario('locked_out_user');
    loginPage.escribirPassword('secret_sauce');
    loginPage.clickLogin();
    loginPage.verificarMensajeError('Epic sadface: Sorry, this user has been locked out.');
  });

  it('Deberia mostrar error con usuario invalido', () => {
    loginPage.escribirUsuario('usuario_falso');
    loginPage.escribirPassword('clave_falsa');
    loginPage.clickLogin();
    loginPage.verificarMensajeError('Epic sadface: Username and password do not match any user in the system');
  });

});