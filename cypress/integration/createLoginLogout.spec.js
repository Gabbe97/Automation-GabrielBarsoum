/// <reference types="cypress" />
import * as indexFuncs from "../pages/indexPage"
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'


describe (" Login and logout", function(){
    it("logs in and out", function(){

        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy) 
        indexFuncs.performLogin(cy, targets.username, targets.password, targets.welcomeMessage)
        dashboardFuncs.performLogout(cy, "Login")
        
    })
})


