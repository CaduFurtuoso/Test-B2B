// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import loc from './locators'

Cypress.Commands.add('login', (user, passwd) => {
    cy.visit('https://www.new.igreja24h.com.br/auth/login')
    cy.get(loc.LOGIN.USER).clear()
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(passwd)
    cy.get(loc.LOGIN.BTN_LOGIN).click()

})

Cypress.Commands.add('accessFinancialMenu', () => {
    cy.get(loc.FINANCIAL.TAB).click()
    cy.get(loc.FINANCIAL.BANK_ACCOUNTS).click()
})

Cypress.Commands.add('resetAccount', () => {
    cy.get(loc.FINANCIAL.SELECT_ACCOUNTS).clear()
    cy.get(loc.FINANCIAL.BTN_DELETE).click()
    cy.get(loc.FINANCIAL.BTN_MESSAGE).click()
})


/*Cypress.Commands.add('insertSuppier', () => {
    //cy.get(loc.FINANCIAL.TAB).click()
    cy.get(loc.SUPPLIER.SUPPLIERS).click()
    cy.get(loc.SUPPLIER.ADD_SUPPLIER).click()
    cy.get(loc.SUPPLIER.SUPPLIER_NAME).type('Hello world')
    cy.get(loc.SUPPLIER.CPFCNPJ).type('00.394 460 0058 87')
    cy.get(loc.SUPPLIER.PHONE).type('+55 (83) 2101-4455')
    cy.get(loc.SUPPLIER.MOBILE).type('+55 (83) 99999-8877')
    cy.get(loc.SUPPLIER.EMAIL).type('teste@testcypress.com.br')
    cy.get(loc.SUPPLIER.STREET).type('Rua da Moeda Grande')
    cy.get(loc.SUPPLIER.NUMBER).type('888')
    cy.get(loc.SUPPLIER.COMPLEMENT).type('Monte das Oliveiras 1º andar')
    cy.get(loc.SUPPLIER.NEIGHBORHOOD).type('Muro das Lamentações')
    cy.get(loc.SUPPLIER.ZIPCODE).type('78.500-999')
    cy.get(loc.SUPPLIER.CITY).type('Israel')
    cy.get(loc.SUPPLIER.STATE).type('Qualquer')
    cy.get(loc.SUPPLIER.COUNTRY).type('Egito')
    cy.get(loc.SUPPLIER.BTN_SAVE).click()
    cy.get(loc.SUPPLIER.NUMBER).type('888')
    cy.get(loc.SUPPLIER.COMPLEMENT).type('Monte das Oliveiras 1º andar')
    cy.get(loc.SUPPLIER.NEIGHBORHOOD).type('Muro das Lamentações')
    cy.get(loc.SUPPLIER.ZIPCODE).type('78.500-999')
    cy.get(loc.SUPPLIER.CITY).type('Israel')
    cy.get(loc.SUPPLIER.STATE).type('Qualquer')
    cy.get(loc.SUPPLIER.COUNTRY).type('Egito')
    cy.get(loc.SUPPLIER.BTN_SAVE).click()
})*/