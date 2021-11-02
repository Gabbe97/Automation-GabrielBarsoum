/// <reference types="cypress" />

const titleOfIndexPage = "Testers Hotel"
const usernameTextfield = ':nth-child(1) > input'
const passwordTextfield = ':nth-child(2) > input'
const loginButton = '.btn'

function checkTitleOfIndexPage(){

    cy.title().should("eq", titleOfIndexPage)
}

function performLogin(cy, username, password, contentToConfirm){
    cy.get(usernameTextfield).type(username)
        .get(passwordTextfield).type(password)
        .get(loginButton).click()
    cy.contains(contentToConfirm)    
}
module.exports = {

    checkTitleOfIndexPage,
    performLogin
}