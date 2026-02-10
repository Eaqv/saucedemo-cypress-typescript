class CheckoutPage {
    private firstNameInput = '[data-test="firstName"]';
    private lastNameInput = '[data-test="lastName"]';
    private postalCodeInput = '[data-test="postalCode"]';
    private continueButton = '[data-test="continue"]';
    private finishButton = '[data-test="finish"]';
    private completeHeader = '.complete-header';

    fillInformation(firstName: string, lastName: string, zip: string) {
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.postalCodeInput).type(zip);
    }

    clickContinue() {
        cy.get(this.continueButton).click();
    }

    clickFinish() {
        cy.get(this.finishButton).click();
    }

    verifyOrderComplete() {
        cy.get(this.completeHeader).should('contain.text', 'Thank you for your order!');
    }
}

export const checkoutPage = new CheckoutPage();