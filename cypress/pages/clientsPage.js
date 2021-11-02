/// <reference types="cypress" />
const createCbuttom = 'h2 > .btn'
const nameTextfield = ':nth-child(1) > input'
const mailTextfield = ':nth-child(2) > input'
const phoneTextfield= ':nth-child(3) > input'
const saveButton = '.blue'

function createClient (cy, name, mail, phone, contentToConfirm){
    cy.get(createCbuttom).click()
        .get(nameTextfield).type(name)
        .get(mailTextfield).type(mail)
        .get(phoneTextfield).type(phone)
        .get(saveButton).click()
    cy.contains(contentToConfirm)      
}
module.exports= {
    createClient
}