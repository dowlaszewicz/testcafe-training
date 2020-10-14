import {Selector} from 'testcafe'

fixture `Add new payee`
  .page `http://zero.webappsecurity.com/index.html`

test.before(async t => {
      const signInButton = Selector('#signin_button')
      const userNameInput = Selector('#user_login')
      const passwordInput = Selector('#user_password')
      const submitButton = Selector('.btn-primary')
      await t.click(signInButton)
      await t.typeText(userNameInput, "username", {paste: true})
      await t.typeText (passwordInput, "password", {paste: true})
      await t.click(submitButton)
  })('User can add new payee to the list', async t => {
    //Selectors

    const payBillsTab = Selector('#pay_bills_tab')
    const addNewPayee = Selector('a').withText('Add New Payee')
    const newPayeeName = Selector('#np_new_payee_name')
    const newPayeeAddress = Selector('#np_new_payee_address')
    const newPayeeAccount = Selector('#np_new_payee_account')
    const newPayeeDetails = Selector('#np_new_payee_details')
    const addBtn = Selector('#add_new_payee')
    const alertContent = Selector('#alert_content').innerText
    //Actions

    await t.click(payBillsTab)
    await t.click(addNewPayee)
    await t.typeText(newPayeeName, 'Kuba')
    await t.typeText(newPayeeAddress, '53 Groove Street')
    await t.typeText(newPayeeAccount, '0000-1234')
    await t.typeText(newPayeeDetails, 'xxx')
    await t.click(addBtn)
    //Assertions
    await t.expect(alertContent).contains('The new payee Kuba was successfully created.')
}) 