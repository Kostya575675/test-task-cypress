import { textBoxPage } from '../pages/text-box.page';
import { textBoxTestData } from '../data/text-box.data';

const listOfAllInputFields = textBoxTestData.listOfAllInteractiveElements
    .filter(item => item.isInputField)
    .map(item => item.locator);

/** Kind of workaround for solving CORS problem that I bumped into */
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Basic spec according to check list', () => {
  beforeEach(() => {
    cy.visit(textBoxPage.url)
  })
  
  it('Check that header displays correct title', () => {
     cy.get(textBoxPage.headerSelector)
     .should('have.text', textBoxTestData.pageTitle)
  })

  it('Check that all interactive elements are presents and available',  () => {
    textBoxTestData.listOfAllInteractiveElements.forEach(item =>
      cy.get(item.locator)
      .should('be.visible')
      .and('not.have.attr', 'disabled')
    );
  });

  it('Check that all labels of input fields are present and have correct text', () => {
    cy.get(textBoxPage.inputFormLabelSelector).each(($elem, index) =>
          cy.wrap($elem)
          .should('have.text', textBoxTestData.listOfLabels[index])
    );
  });

  it('Check that all placeholders of input fields are present', () => {
    listOfAllInputFields.forEach(locator =>
        cy.get(locator)
        .should('have.attr', 'placeholder')
    );
  });

  it('Check that all submitted data with titles are present and correct', () => {
    listOfAllInputFields.forEach((locator, index) =>
        cy.get(locator)
          .type(textBoxTestData.listOfInputData[index])
    )
    cy.get(textBoxPage.submitButtonSelector).click()
    
    cy.get(textBoxPage.outputParagraphSelector)
    .should('have.length', listOfAllInputFields.length)
    cy.get(textBoxPage.outputParagraphSelector).each(($elem, index) => 
        cy.wrap($elem)
        .should('contains.text', textBoxTestData.listOfInputData[index])
    )
    textBoxTestData.listOfLabels.forEach((label, index) => 
      cy.get(textBoxPage.outputParagraphSelector)
      .eq(index)
      .should('contains.text', label)
    )
  });

  it('Check validation of email field', () => {
    cy.get(textBoxPage.userEmailInputSelector)
      .type(textBoxTestData.incorrectEmail)
    cy.get(textBoxPage.submitButtonSelector).click()
    
    cy.get(textBoxPage.outputParagraphSelector)
    .should('not.exist')
    cy.get(textBoxPage.userEmailInputSelector)
    .should('have.class', 'field-error')
  });

  it('Check that only input data displays after submitting', () => {
    const randomIndex = Math.floor(Math.random() * listOfAllInputFields.length);
    cy.get(listOfAllInputFields[randomIndex])
      .type(textBoxTestData.listOfInputData[randomIndex])
    cy.get(textBoxPage.submitButtonSelector).click()

    cy.get(textBoxPage.outputParagraphSelector)
    .should('have.length', 1)
    .and('contains.text', textBoxTestData.listOfInputData[randomIndex])
    .and('contains.text', textBoxTestData.listOfLabels[randomIndex])
  });
})
