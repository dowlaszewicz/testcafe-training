import Navbar from '../page-object/components/Navbar'
import searchResultPage from '../page-object/pages/searchResultPage'

const navbar = new Navbar()
const searchresultPage = new searchResultPage()

    fixture `Search box` 
    .page`http://zero.webappsecurity.com/index.html`

test("Search on the website", async t =>{

    navbar.search('online_bank')

    await t.expect(searchresultPage.resultTitle.exists).ok()
    await t.expect(navbar.searchBox.exists).ok()
    await t.expect(searchresultPage.linkText.innerText).contains('Zero - Free Access to Online Banking')

}
)
