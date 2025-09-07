import { OrangeLogin } from "../../page/OrangeHrm/login.page";

const orangeLogin = new OrangeLogin();

describe('Verify Cookies Injected', () => {
  it('Login - Enter Valid Username and Password', () => {
    orangeLogin.navigateTo()
    orangeLogin.enterUserName('Admin')
    orangeLogin.enterPassowrd('admin123')
    orangeLogin.clickSubmitButton()
    orangeLogin.storeCookie()
  })
})

describe("Reuse Cookies", async () => {
    before(() => {
        orangeLogin.useCookies();
    
    });
    
    it("Validate Cookies", async () => {
        orangeLogin.navigateTo()
        orangeLogin.verifyUserLoggedIn()
    })
})

describe("Login - Negative Scenario", () => {
    it('Login - Without Entering Password', () => {
    orangeLogin.navigateTo()
    orangeLogin.enterUserName('student')
    orangeLogin.clickSubmitButton()
    orangeLogin.verifyInvalidLogin(false)
  })

  it('Login - Without Entering Username', () => {
    orangeLogin.navigateTo()
    orangeLogin.enterPassowrd('admin123')
    orangeLogin.clickSubmitButton()
    orangeLogin.verifyInvalidLogin(false)
  })

  it('Login - Without Entering Input Fields', () => {
    orangeLogin.navigateTo()
    orangeLogin.clickSubmitButton()
    orangeLogin.verifyInvalidLogin(false)
  })

  it('Login - with Invalid Password', () => {
    orangeLogin.navigateTo()
    orangeLogin.enterUserName('Admin')
    orangeLogin.enterPassowrd('password')
    orangeLogin.clickSubmitButton()
    orangeLogin.verifyInvalidLogin(true)
  })

  it('Login - with Invalid Username', () => {
    orangeLogin.navigateTo()
    orangeLogin.enterUserName('test')
    orangeLogin.enterPassowrd('admin123')
    orangeLogin.clickSubmitButton()
    orangeLogin.verifyInvalidLogin(true)
  })

  it('Login - with Entering Invliad data in Input Fields', () => {
    orangeLogin.navigateTo()
    orangeLogin.enterUserName('test')
    orangeLogin.enterPassowrd('test')
    orangeLogin.clickSubmitButton()
    orangeLogin.verifyInvalidLogin(true)
  })
})