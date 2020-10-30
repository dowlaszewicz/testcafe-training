import { Selector, t } from 'testcafe'

class feedbackPage {
    constructor() { 
    this.InputName = Selector('#name')
    this.InputEmail = Selector('#email')
    this.InputSubject = Selector('#subject')
    this.InputQuestion = Selector('#comment')
    this.SendButton = Selector('.btn-primary')
    this.ThanksMessage = Selector('.span6')
}
}

export default feedbackPage