import { Selector } from 'testcafe'

fixture `Login Test`
.page`http://zero.webappsecurity.com/index.html`

test("User cannot login with invalid credentails", async t => {
    const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const userNameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(userNameInput, "invalid username", {paste: true})
    await t.typeText (passwordInput, "invalid password", {paste: true})

    const submitButton = Selector('.btn-primary')
    await t.click(submitButton)

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains("Login and/or password are wrong.")
}
)

test("User can login to application", async t => {
    const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const userNameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(userNameInput, "username", {paste: true})
    await t.typeText (passwordInput, "password", {paste: true})

    const submitButton = Selector('.btn-primary')
    await t.click(submitButton)

    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginForm.exist).notOk()

    const userIcon = Selector('.icon-user')
    await t.click(userIcon)

    const loggoutButton = Selector('.logout_link')
    await t.click(loggoutButton)
    await t.expect(signInButton.exists).ok()
    await t.expect(loggoutButton.exists).notOk()


}
)