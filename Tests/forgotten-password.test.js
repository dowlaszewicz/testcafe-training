import {Selector} from 'testcafe'
import Navbar from '../page-object/components/Navbar'
import forgottenPasswordPage from '../page-object/pages/forgottenPasswordPage'
import loginPage from '../page-object/pages/loginPage'

//DOMINIK PROSZE WYJASNIJ MI SENS LINIJKI KODU PONIZEJ 
const navbar = new Navbar ()
const loginpage = new loginPage()
const forgottenpasswordpage = new forgottenPasswordPage ()

fixture `forgotten password test`
  .page `http://zero.webappsecurity.com/index.html`


test("User can request for new password to be send to his email", async t => {
    //Get Selectors
    //const signInButton = Selector('#signin_button')
    //const linkToPassword = Selector('a').withText('Forgot your password ?')
    //const emailInput = Selector('#user_email')
    //const message = Selector('div').innerText
    //Actions
    await t.click(navbar.signInButton)
    await t.click(forgottenpasswordpage.forgottenPassword)
    await t.typeText(forgottenpasswordpage.emailInput,'test@nesk.com', {paste: true})
    await t.pressKey('enter')
  
    //Assertions
    await t.expect(forgottenpasswordpage.message.innerText).contains("test@nesk.com")
    await t.expect(forgottenpasswordpage.emailInput.exists).notOk()
})