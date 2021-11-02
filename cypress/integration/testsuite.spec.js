/// <reference types="cypress" />
import * as indexFuncs from "../pages/indexPage"
describe("first test suite", function(){
    it("Creates a new Clients", function(){

        cy.visit("http://localhost:3000/login")
        .get(':nth-child(1) > input').type("tester01")
        .get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        .get('.btn').click()
        cy.contains("Welcome tester01!")
        .get('.blocks > :nth-child(2) > .btn').click()
        cy.contains("Clients")
        .get('h2 > .btn').click()
        cy.contains("New Client")
        .get(':nth-child(1) > input').type("Fake Name")
        .get(':nth-child(2) > input').type("Fake@mail.com")
        .get(':nth-child(3) > input').type("0123456789")
        .get('.blue').click()
        cy.contains("Fake Name")
        .get(':nth-child(3) > .btn').click()
        cy.contains("Tester Hotel Overview")
    })
})