/// <reference types="cypress" />
const createResbuttom = 'h2 > .btn'
const checkinTextfield = ':nth-child(1) > input'
const checkoutTextfield = ':nth-child(2) > input'
const clientSelect= ':nth-child(3) > select'
const roomSelect= ':nth-child(4) > select'
const billSelect= ':nth-child(5) > select'
const saveButton = '.blue'

function createReservation(cy, checkinDate, checkoutDate, contentToConfirm){
    cy.get(createResbuttom).click()
        .get(checkinTextfield).type(checkinDate)
        .get(checkoutTextfield).type(checkoutDate)
        .get(clientSelect).select('3')
        .get(roomSelect).select('3')
        .get(billSelect).select('2')
        .get(saveButton).click()
    cy.contains(contentToConfirm)      
}
module.exports = {
    createReservation
}

