// describe custom Cypress commands in this file

// load the global Cypress types
/// <reference types="cypress" />
// load the 3rd party command definition for cy.waitUntil()

declare namespace Cypress {
    interface Chainable {

        createSessionAmazon(username:string, password:string)
    }
}
