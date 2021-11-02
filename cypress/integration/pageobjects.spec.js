/// <reference types="cypress" />
import * as indexFuncs from "../pages/indexPage"
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomFuncs from '../pages/roomsPage'



describe ("Create a new room", function(){

    beforeEach (() =>{
        cy.visit("http://localhost:3000/login")
        indexFuncs.checkTitleOfIndexPage(cy) 
        indexFuncs.performLogin(cy, "tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Welcome tester01!")
        dashboardFuncs.openRooms(cy, "Rooms")
    })
   // it ("perfroms login", function(){
   // })
    
   // it (" views Rooms", function(){
   
    //})

    it (" creates a new Room", function(){
        roomFuncs.createRoom(cy, '50', '10','5000', "Floor 10")
    })

    it ("perfroms logut", function(){
        dashboardFuncs.performLogout(cy,'Login')
        })
    


})