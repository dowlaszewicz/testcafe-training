import { Selector } from 'testcafe'
// import {login} from './helper'
import loginPage from '../page-object/pages/loginPage'
import Navbar from '../page-object/components/Navbar'

fixture `Login Test`
.page`http://zero.webappsecurity.com/index.html`

const navbar = new Navbar()
const loginpage = new loginPage()

test("User cannot login with invalid credentails", async t => {
await t.click(navbar.signInButton)
loginpage.loginToApp('invalidusername','invalidpassword')

await t.expect(loginpage.errorMessage.innerText).contains("Login and/or password are wrong.")
}
)

test("User can login to application", async t => { 
    await t.click(navbar.signInButton)
    loginpage.loginToApp('username','password')

}
)