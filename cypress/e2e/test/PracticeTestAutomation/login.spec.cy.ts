import { LoginPage } from '../../page/PracticeTestAutomation/login.page';

const loginPage = new LoginPage();

describe('Verify Login Scenario', () => {
  it('Login - Enter Valid Username and Password', () => {
    loginPage.navigateTo()
    loginPage.enterUserName('student')
    loginPage.enterPassowrd('Password123')
    loginPage.clickSubmitButton()
    loginPage.verifyUserLoggedIn(true)
  })
  
  it('Login - Without Entering Password', () => {
    loginPage.navigateTo()
    loginPage.enterUserName('student')
    loginPage.clickSubmitButton()
    loginPage.verifyUserLoggedIn(false)
    loginPage.verifyInvalidBanner('password');

  })

  it('Login - Without Entering Username', () => {
    loginPage.navigateTo()
    loginPage.enterPassowrd('Password123')
    loginPage.clickSubmitButton()
    loginPage.verifyUserLoggedIn(false)
    loginPage.verifyInvalidBanner('username');
  })

  it('Login - Without Entering Input Fields', () => {
    loginPage.navigateTo()
    loginPage.clickSubmitButton()
    loginPage.verifyUserLoggedIn(false)
    loginPage.verifyInvalidBanner('username');
  })

  it('Login - with Invalid Password', () => {
    loginPage.navigateTo()
    loginPage.enterUserName('student')
    loginPage.enterPassowrd('password')
    loginPage.clickSubmitButton()
    loginPage.verifyUserLoggedIn(false)
    loginPage.verifyInvalidBanner('password');
  })

  it('Login - with Invalid Username', () => {
    loginPage.navigateTo()
    loginPage.enterUserName('test')
    loginPage.enterPassowrd('Password123')
    loginPage.clickSubmitButton()
    loginPage.verifyUserLoggedIn(false)
    loginPage.verifyInvalidBanner('username');
  })

  it('Login - with Entering Invliad data in Input Fields', () => {
    loginPage.navigateTo()
    loginPage.enterUserName('test')
    loginPage.enterPassowrd('test')
    loginPage.clickSubmitButton()
    loginPage.verifyUserLoggedIn(false)
    loginPage.verifyInvalidBanner('username');
  })
})