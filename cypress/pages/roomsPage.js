/// <reference types="cypress" />

const createRbuttom = 'h2 > .btn'
const selectRoom = ':nth-child(1) > select'
const numberTextfield = ':nth-child(2) > input'
const floorTextfield = ':nth-child(3) > input'
const checkBox = '.checkbox'
const priceTextfield = ':nth-child(5) > input'
const roomFeatures = ':nth-child(6) > select'
const saveButton = '.blue'

function createRoom (cy,number, floor, price, contentToConfirm){
    cy.get(createRbuttom).click()
        .get(selectRoom).select("Twin")
        .get(numberTextfield).type(number)
        .get(floorTextfield).type(floor)
        .get(checkBox).click()
        .get(priceTextfield).type(price)
        .get(roomFeatures).select(['Penthouse', 'Balcony', 'Sea View'])
        .get(saveButton).click()
    cy.contains(contentToConfirm)      
}
module.exports = {
    createRoom
}
