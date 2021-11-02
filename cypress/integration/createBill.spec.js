/// <reference types="cypress" />
import * as indexFuncs from "../pages/indexPage"
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomFuncs from '../pages/roomsPage'
import * as clientFuncs from '../pages/clientsPage'
import * as billFuncs from '../pages/billsPage'



describe ("Create a new Bill", function(){

    beforeEach (() =>{
        cy.visit("http://localhost:3000/login")
        indexFuncs.checkTitleOfIndexPage(cy) 
        indexFuncs.performLogin(cy, "tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Welcome tester01!")
        dashboardFuncs.openBills(cy, "Bills")
    })

    it (" creates a new Bill", function(){
        billFuncs.createBill(cy, '10000', '10000')
    })
    
    it ("perfroms logut", function(){
        dashboardFuncs.performLogout(cy,'Login')
        })

})