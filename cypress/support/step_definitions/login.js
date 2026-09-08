import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the user is on the login page', ()=> {
    cy.visit('https://practicetestautomation.com/practice-test-login/')

})

When('the user enters login details', (dataTable) => {

    const LoginCredentials = dataTable.rowsHash()

    cy.get('[id="username"]').type(LoginCredentials.username)
    cy.get('[id="password"]').type(LoginCredentials.password)


})

When('the user clicks the Login button', () => {

    cy.get('[id="submit"]').click()
})

Then('the user should navigate to the login page', () => {

    cy.url().should('include', '/logged-in-successfully')
})