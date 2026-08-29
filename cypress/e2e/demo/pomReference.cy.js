
import {DataEntryForm} from '../../support/pages/dataentyrPage.page'
import dataEntryInputs from '../../fixtures/dataEntryInputs.json'

it('data entry form', () => {
  cy.visit('https://testautomationpractice.blogspot.com')

  cy.get('[class="titlewrapper"]').should('have.text', '\n\nAutomation Testing Practice\n\n')

  let dataEntryForm = new DataEntryForm()

  dataEntryForm.fillForm(dataEntryInputs)

  cy.get('[class="submit-btn"]').click()
  cy.get('[id="result"]').should('be.visible')
}) 