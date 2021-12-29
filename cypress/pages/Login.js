export class LoginPage {
    searchNameInput = () => cy.get('[name=username]');
    searchPasswordInput = () => cy.get('[name=password]');
    searchButton = () => cy.get('[type=submit]');
    searchPasswordSpan = () => cy.get('input[name=password] + span');
    searchNameSpan = () => cy.get('input[name=username] + span');
    searchForm = ()=> cy.get('form');

    navigate = () => {
        cy.visit(Cypress.env('src'));
    }
}