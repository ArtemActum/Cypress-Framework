import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
    static login(username, password) {
        //cy.login(username, password)
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        cy.get('#user_remember_me').click()
        cy.contains('Sign in').click()
    }

    static clickForgotPasswordLink() {
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage() {
        //cy.get('.alert-error').should('be.visible')
        cy.isVisible('.alert-error')
    }
}