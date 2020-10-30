import { Selector, t } from 'testcafe'

class forgottenPasswordPage {
    constructor () {
        this.forgottenPassword = Selector('a').withText('Forgot your password ?')
        this.emailInput = Selector('#user_email')
        this.message = Selector('div')
    }
}

export default forgottenPasswordPage