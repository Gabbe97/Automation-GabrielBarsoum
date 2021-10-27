/// <reference types="cypress" />
describe("third test suite", function(){
    it("Creates a new Bill", function(){

        cy.visit("http://localhost:3000/login")
        .get(':nth-child(1) > input').type("tester01")
        .get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        .get('.btn').click()
        cy.contains("Welcome tester01!")

        cy
        .get(':nth-child(3) > .btn').click()
        cy.contains("Bills")
        .get(':nth-child(1) > .btn').click()
        cy.contains("New Bill")
        .get('input').type("2999.99")
        .get('.checkbox').click()
        .get('.checkbox').click()
        .get('.blue').click()
        .get('input').clear()
        .get('input').type("3000")
        .get('.blue').click()
        cy.contains("3000")
        .get(':nth-child(3) > .btn').click()
        cy.contains("Tester Hotel Overview")
        
    })
})
