import {Selector, Selectors} from 'testcafe'
    fixture `Search box` 
    .page`http://zero.webappsecurity.com/index.html`

test("Search on the website", async t =>{
    //Selectors
    const searchBox = Selector('.search-query')
    const results = Selector('h2')
    const linkText = Selector('div').innerText

    //Actions
    await t.typeText(searchBox, "online bank", {paste: true})
    await t.pressKey('enter')

    //Assertions
    await t.expect(results.exists).ok()
    await t.expect(searchBox.exists).ok()
    await t.expect(linkText).contains('Zero - Free Access to Online Banking')

}
)
