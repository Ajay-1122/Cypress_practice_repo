

import {myData} from '../../fixtures/data'
import {fileUpload} from '../../support/utility/helpers'

import {fillForm} from '../../support/utility/helpers'



it("Creating custom commands", ()=>{

        cy.visit('https://testautomationpractice.blogspot.com')
        cy.url().should('include', 'testautomationpractice')

        cy.get('[class="titlewrapper"]').should('have.text', '\n\nAutomation Testing Practice\n\n')

        cy.fillDataEntryForm(myData)
})

it('reusable function', () => {
    cy.visit('https://testautomationpractice.blogspot.com')
    cy.url().should('include', 'testautomationpractice')

    // fillForm(myData)
    cy.contains('Upload Files').scrollIntoView()
    fileUpload('cypress/fixtures/Screenshot.png')

})

it('Login and Logout commads', ()=>{
    
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.Login('student', 'Password123')

    // verify the flow which we need here

    cy.Logout()

})

const testData1 = [
    {
        Name : "Gayathri",
        Email : "gayathri@test.com",
        Phone : "987654321",
        Address : "Dubai, UAE",
        Gender : "male",
        Day : "monday",
        Country : "India",
        Colors:"Blue",
        date1:"12/12/1995",
        startdate:"12/12/1996",
        enddate: "12/12/1997"
    },
     {
        Name : "Gayathri 1",
        Email : "gayathri@test1.com",
        Phone : "00000000",
        Address : "Kerala, India    ",
        Gender : "female",
        Day : "tuesday",
        Country : "India",
        Colors:"Blue",
        date1:"12/12/1995",
        startdate:"12/12/1996",
        enddate: "12/12/1997"
    }
  ]
 describe("Data driven testcases",()=>{
    it("Fill form test",()=>{
       cy.visit('https://testautomationpractice.blogspot.com/')
       
       testData1.forEach((userData)=> {
            cy.get('[id="name"]').clear().type(userData.Name).should('have.value',userData.Name);
            cy.get('[id="email"]').clear().type(userData.Email).should('have.value',userData.Email)
            cy.get('[id="phone"]').clear().type(userData.Phone);
            cy.get('[id="textarea"]').clear().type(userData.Address).should('have.value',userData.Address);
            cy.get(`#${userData.Gender}`).check()
            cy.get(`#${userData.Day}`).check()
            cy.get('#country').select(userData.Country);
            cy.get('#colors').select(userData.Colors)
            cy.get('[id="datepicker"]').type(userData.date1 , { force: true })
            cy.get('[id="txtDate"]').type(userData.startdate, { force: true })
            cy.get('[id="start-date"]').click();
            cy.contains('button', 'Submit').scrollIntoView().should('be.visible').click();
            cy.get('#result').should('be.visible');
       })
     })
 })
 


