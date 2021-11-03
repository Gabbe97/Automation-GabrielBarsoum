/// <reference types="cypress" />
import * as indexFuncs from "../pages/indexPage"
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomFuncs from '../pages/roomsPage'
import * as targets from '../targets/targets'



describe ("Create a new room", function(){

    beforeEach (() =>{
        cy.visit("http://localhost:3000/login")
        indexFuncs.checkTitleOfIndexPage(cy) 
        indexFuncs.performLogin(cy, targets.username, targets.password, targets.welcomeMessage)
        dashboardFuncs.openRooms(cy, "Rooms")
    })
   
    
    it (" creates a new Room", function(){
        roomFuncs.createRoom(cy, '50', '10','5000', "Floor 10")
        dashboardFuncs.performLogout(cy,'Login')
    })

})