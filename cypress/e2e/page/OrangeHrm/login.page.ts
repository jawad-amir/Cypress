import 'cypress-xpath';

export class OrangeLogin {

    element = {
        userNameInput: () => cy.xpath('//input[@placeholder="Username"]'),
        passwordInput: () => cy.xpath('//input[@placeholder="Password"]'),
        submitButton: () => cy.xpath('//button[normalize-space()="Login"]'),
        userDashboard: () => cy.xpath('//h6[normalize-space()="Dashboard"]'),
        invalidCredentials: () => cy.xpath('//p[normalize-space()="Invalid credentials"]'),
        invalidInput: () => cy.xpath('//span[normalize-space()="Required"]'),
    }

    navigateTo() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
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

    storeCookie() {
        cy.getCookies().then((cookies) => {
            cy.writeFile('cypress/e2e/cookies/test.json', cookies)
        })
    }
    
    useCookies() {
        cy.readFile('cypress/e2e/cookies/test.json').then((cookies) => {
            cookies.forEach((cookie) => {
                cy.setCookie(cookie.name, cookie.value, {
                    domain: cookie.domain,
                    path: cookie.path,
                    secure: cookie.secure,
                    httpOnly: cookie.httpOnly,
                    expiry: cookie.expiry
                })
            })
        })
    }

    verifyInvalidLogin(invalidLogin: boolean) {
        if (invalidLogin === true) {
            this.element.invalidCredentials().should('exist')
        } else {
            this.element.invalidInput().should('exist')
        }
    }

    verifyUserLoggedIn() {
        cy.wait(3000)
        this.element.userDashboard().should('exist')   
    }
}