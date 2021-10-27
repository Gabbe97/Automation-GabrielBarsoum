/// <reference types="cypress" />
describe("second test suite", function(){
    it("Creates a new Room", function(){

        cy.visit("http://localhost:3000/login")
        cy.get(':nth-child(1) > input').type("tester01")
        cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        cy.get('.btn').click()
        cy.contains("Welcome tester01!")
        cy.get(':nth-child(1) > .btn').click()
        cy.contains("Rooms")
        cy.get('h2 > .btn').click()
        cy.contains("New Room")
        cy
            .get(':nth-child(1) > select') // parent command must come first
            .select("Twin")       // then child command comes (':nth-child(1) > select').click("1")
            .get(':nth-child(2) > input').type("5")
            .get(':nth-child(3) > input').type("1")
            .get('.checkbox').click()
            .get(':nth-child(5) > input').type("500")
            .get(':nth-child(6) > select')
            .select(['Penthouse', 'Balcony', 'Sea View'])
            .get('.blue').click()
            cy.contains("Room 5")
            cy.get(':nth-child(3) > .btn').click()
            cy.contains("Tester Hotel Overview")

    })
})