
import {Selector} from 'testcafe'
fixture `feedback form`
.page `http://zero.webappsecurity.com/index.html`

test("User can fill the form to give the feedback and send it", async t =>{
    //Selectors
    const FeedbackButton = Selector('#feedback')
    const InputName = Selector('#name')
    const InputEmail = Selector('#email')
    const InputSubject = Selector('#subject')
    const InputQuestion = Selector('#comment')
    const SendButton = Selector('.btn-primary')
    const ThanksMessage = Selector('.span6').innerText
    //Action
    await t.click(FeedbackButton)
    await t.typeText(InputName, "Kuba", {paste: true})
    await t.typeText(InputEmail, "test@ldn.com", {paste: true})
    await t.typeText(InputSubject, "Interest rates", {paste: true})
    await t.typeText(InputQuestion, "Can you tell me a bit more about interest rates?")
    await t.click(SendButton)

    //Assertions
    await t.expect(ThanksMessage).contains("Kuba")
    await t.expect(InputName.exists).notOk()

})

