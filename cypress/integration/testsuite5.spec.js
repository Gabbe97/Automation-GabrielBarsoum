/// <reference types="cypress" />
describe("Fith test suite", function(){
    it("Checks login and logout option", function(){

        cy.visit("http://localhost:3000/login")
        .get(':nth-child(1) > input').type("tester01")
        .get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        .get('.btn').click()
        cy.contains("Welcome tester01!")
        .get(".user > .btn").click()
        cy.contains("Login")

    })
})