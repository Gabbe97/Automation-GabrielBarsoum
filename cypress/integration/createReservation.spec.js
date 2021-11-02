/// <reference types="cypress" />
import * as indexFuncs from "../pages/indexPage"
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomFuncs from '../pages/roomsPage'
import * as clientFuncs from '../pages/clientsPage'
import * as reservationsFuncs from '../pages/reservationsPage'



describe ("Create a new reservation", function(){

    beforeEach (() =>{
        cy.visit("http://localhost:3000/login")
        indexFuncs.checkTitleOfIndexPage(cy) 
        indexFuncs.performLogin(cy, "tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Welcome tester01!")
        dashboardFuncs.openReservations(cy, "Reservations")
    })

    it (" creates a new Reservation", function(){
        reservationsFuncs.createReservation(cy, "2021-11-30", "2021-12-29","Fake Name")
    })

    it ("perfroms logut", function(){
        dashboardFuncs.performLogout(cy,'Login')
        })

})