/// <reference types="cypress" />
import * as indexFuncs from "../pages/indexPage"
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomFuncs from '../pages/roomsPage'
import * as clientFuncs from '../pages/clientsPage'
import * as billFuncs from '../pages/billsPage'
import * as targets from '../targets/targets'



describe ("Create a new Bill", function(){

    beforeEach (() =>{
        cy.visit("http://localhost:3000/login")
        indexFuncs.checkTitleOfIndexPage(cy) 
        indexFuncs.performLogin(cy, targets.username, targets.password, targets.welcomeMessage)
        dashboardFuncs.openBills(cy, "Bills")
    })

    it (" creates a new Bill", function(){
        billFuncs.createBill(cy, '10000', '10000')
        dashboardFuncs.performLogout(cy,'Login')
    })

})