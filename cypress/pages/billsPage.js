/// <reference types="cypress" />
const createCbuttom = 'h2 > .btn'
const valueTextfield = 'input'
const checkBox = '.checkbox'
const saveButton = '.blue'

function createBill (cy, value, contentToConfirm){
    cy.get(createCbuttom).click()
        .get(valueTextfield).type(value)
        .get(checkBox).click()
        .get(saveButton).click()
    cy.contains(contentToConfirm)      
}
module.exports ={
    createBill
}