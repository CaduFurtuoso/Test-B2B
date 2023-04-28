///<reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commands'


describe('Financial session menu', () => {
    beforeEach(() => {
        cy.login('cadu@i24h.com.br', 'ig24h!')
    })

    it.only('Insert an account', () => {
        cy.accessFinancialMenu()

        //Creater account 01
        cy.get('.btn-outline-primary').click()
        cy.get('#bankName').click().type('Banco Teste')
        cy.get('#type').select('Conta Corrente')
        cy.get('#agency').click().type('0001')
        cy.get('#account').click().type('00098765-1')
        cy.get('#initialBalance').click().type('800.00')
        cy.get('.hstack > .btn-primary').click()

        //Aaccount 02
        cy.get('.btn-outline-primary').click()
        cy.get('#bankName').click().type('Banco Alterar')
        cy.get('#type').select('Poupança')
        cy.get('#agency').click().type('0002')
        cy.get('#account').click().type('00098765-2')
        cy.get('#initialBalance').click().type('1000.00')
        cy.get('.hstack > .btn-primary').click()

        //ccount 03
        cy.get('.btn-outline-primary').click()
        cy.get('#bankName').click().type('Banco Teste 2')
        cy.get('#type').select('Poupança')
        cy.get('#agency').click().type('0003')
        cy.get('#account').click().type('000357951-3')
        cy.get('#initialBalance').click().type('999.00')
        cy.get('.hstack > .btn-primary').click()
    })

    it('Edit account information', () => {
        cy.accessFinancialMenu()
        cy.get('tbody tr').contains('Banco Alterar').parent().within(() => {
            cy.get('#s_47539 > th > .form-check > .form-check-input').click()
            cy.get('#s_47539 > :nth-child(2) > .cursor-pointer').click()
            cy.get('#bankName').clear().type('Banco Atualizado')
            cy.get('#accountType').select('Poupança')
            cy.get('#agency').clear().type('1234')
            cy.get('#accountNumber').clear().type('567890-1')
            cy.get('#initialBalance').clear().type('500')
            cy.get('button[type="submit"]').click()
            cy.contains('Banco Atualizado')
        })
    })

    it('Delete an account', () => {
        cy.accessFinancialMenu()
        cy.deleteAnAccount()
    })
})