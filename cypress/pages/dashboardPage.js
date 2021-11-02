/// <reference types="cypress" />

const titleOfDashboardPage = "Testers Hotel"
const logoutButton = '.user > .btn'
const viewRooms = ':nth-child(1) > .btn'
const viewClients = '.blocks > :nth-child(2) > .btn'
const viewBills = ':nth-child(3) > .btn'
const viewReservations = ':nth-child(4) > .btn'


function checkTitleOfdDasgboardPage(){
    cy.title().should("eq", titleOfDashboardPage)
}
function openRooms (cy, contentToConfirm){
    cy.get(viewRooms).click()
    cy.contains(contentToConfirm)
}
function openClients (cy, contentToConfirm){
    cy.get(viewClients).click()
    cy.contains(contentToConfirm)
}
function openBills (cy, contentToConfirm){
    cy.get(viewBills).click()
    cy.contains(contentToConfirm)
}
function openReservations (cy, contentToConfirm){
    cy.get(viewReservations).click()
    cy.contains(contentToConfirm)
}
function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}
module.exports = {
    checkTitleOfdDasgboardPage,
    performLogout,
    openRooms,
    openClients,
    openBills,
    openReservations
}