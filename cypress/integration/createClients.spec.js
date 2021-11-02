/// <reference types="cypress" />
import * as indexFuncs from "../pages/indexPage"
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomFuncs from '../pages/roomsPage'
import * as clientFuncs from '../pages/clientsPage'



describe ("Create a new client", function(){

    beforeEach (() =>{
        cy.visit("http://localhost:3000/login")
        indexFuncs.checkTitleOfIndexPage(cy) 
        indexFuncs.performLogin(cy, "tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Welcome tester01!")
        dashboardFuncs.openClients(cy, "Clients")
    })

    it (" creates a new Client", function(){
        clientFuncs.createClient(cy, "Fake Name", "Fake@mail.com", "0123456789", "Fake Name")
    })
    
    it ("perfroms logut", function(){
        dashboardFuncs.performLogout(cy,'Login')
        })


})