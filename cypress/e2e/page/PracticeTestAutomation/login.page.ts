import 'cypress-xpath';

export class LoginPage {

    element = {
        userNameInput: () => cy.xpath('//input[@id="username"]'),
        passwordInput: () => cy.xpath('//input[@id="password"]'),
        submitButton: () => cy.xpath('//button[@id="submit"]'),
        pageHeader: () => cy.xpath('//h1[normalize-space()="Logged In Successfully"]'),
        invalidLoginBanner: (text: string) => cy.xpath(`//div[normalize-space()="Your ${text} is invalid!"]`)
    }

    navigateTo() {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
    }

    enterUserName(name: string) {
        this.element.userNameInput().type(name)
    }

    enterPassowrd(password: string) {
        this.element.passwordInput().type(password, { log: false })
    }

    clickSubmitButton() {
        this.element.submitButton().click()
    }

    verifyUserLoggedIn(userLoginSuccess: boolean) {
        if (userLoginSuccess) {
            this.element.pageHeader().should('be.visible')
        } else {
            this.element.submitButton().should('be.visible')
            this.element.pageHeader().should('not.exist')
        }
    }

    verifyInvalidBanner(text: string) {
        switch (text) {
        case 'username':
            this.element.invalidLoginBanner('username').should('be.visible')
            break;
        case 'password':
            this.element.invalidLoginBanner('password').should('be.visible')
            break;
        default:
            throw new Error("Invalid Login Attempt: " + text)
        }   
    }
}