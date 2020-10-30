
import {Selector} from 'testcafe'
import feedbackPage from '../page-object/pages/feedbackPage'

const feedbackpage = new feedbackPage ()

fixture `feedback form`
.page `http://zero.webappsecurity.com/index.html`

test("User can fill the form to give the feedback and send it", async t =>{
    //Selectors
    const FeedbackButton = Selector('#feedback')
    // const InputName = Selector('#name')
    // const InputEmail = Selector('#email')
    // const InputSubject = Selector('#subject')
    // const InputQuestion = Selector('#comment')
    // const SendButton = Selector('.btn-primary')
    // const ThanksMessage = Selector('.span6').innerText
    //Action
    await t.click(FeedbackButton)
    await t.typeText(feedbackpage.InputName, 'Kuba', {paste: true})
    await t.typeText(feedbackpage.InputEmail, 'test@ldn.com', {paste: true})
    await t.typeText(feedbackpage.InputSubject, 'Interest rates', {paste: true})
    await t.typeText(feedbackpage.InputQuestion, 'Can you tell me a bit more about interest rates?')
    await t.click(feedbackpage.SendButton)

    //Assertions
    await t.expect(feedbackpage.ThanksMessage.innerText).contains('Kuba')
    await t.expect(feedbackpage.InputName.exists).notOk()

})

