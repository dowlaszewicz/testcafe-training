import {Selector} from 'testcafe'
fixture `forgotten password test`
  .page `http://zero.webappsecurity.com/index.html`


test("User can request for new password to be send to his email", async t => {
    //Get Selectors
    const signInButton = Selector('#signin_button')
    const linkToPassword = Selector('a').withText('Forgot your password ?')
    const emailInput = Selector('#user_email')
    const message = Selector('div').innerText
    //Actions
    await t.click(signInButton)
    await t.click(linkToPassword)
    await t.typeText(emailInput,'test@nesk.com', {paste: true})
    await t.pressKey('enter')
    //Assertions
    await t.expect(message).contains("test@nesk.com")
    await t.expect(emailInput.exists).notOk()
})