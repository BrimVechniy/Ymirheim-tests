// const { it } = require("mocha")

describe('Ymirheim Test', () => {
    const username = 'brimtest'
    const password = 'BrimTest1!'

    it('Check URL', () => {
        cy.visit('https://forum.ymirheim.org')
        cy.contains('Log In').click()
        cy.url().should('include', '/login')
        cy.get('.form-control')
            .should('have.attr', 'placeholder', 'Логин или Email')
            .first()
            .type(username)
        cy.get('.form-control')
            .last()
            .type(password)
        cy.get('.form-check-input')
            .uncheck()
        cy.contains('Войти')
            .click()
    })
})


