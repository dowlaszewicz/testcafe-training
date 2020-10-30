import {Selector, t} from 'testcafe'

class searchResultPage {
    constructor() {               
        this.resultTitle = Selector('h2')
        this.linkText = Selector('div')
    }
}
export default searchResultPage