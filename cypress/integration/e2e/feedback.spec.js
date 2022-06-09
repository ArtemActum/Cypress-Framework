import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback Test using Fixtures', () => {
    before(function () {
        FeedbackPage.load()
        Navbar.clickSignIn()
    })
    it('should try to login with invalid credentials', () => {
        LoginPage.login("invalid username", "invalid password")
    })

    it('should display error message', () => {
        LoginPage.displayErrorMessage()
    })

})