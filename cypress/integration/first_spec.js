import { LoginPage } from '../pages/Login';

describe('First Pecode test', () => {

    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.navigate();
    });

    it('Visit Pecode login page', () => {
        loginPage.searchNameInput().type(Cypress.env('name')).should('have.value', 'BugiVugi');;
        loginPage.searchPasswordInput().type(Cypress.env('password')).should('have.value', '112263');
        loginPage.searchForm().submit();
        cy.url().should('not.include', '/registerlogin'); 
        /* Create a test-case that will fail because of unsuccessful login. */
    })

    it('Verify that all the error messages appear.', () => {
        loginPage.searchForm().submit();
        loginPage.searchPasswordSpan().contains('Please enter your password.');
        loginPage.searchNameSpan().contains('Please enter username.')
    })

    /* Use an assertion library and verify that all the elements are present on the page. */
    it('expect - all the elements are present on the page', () => {
        assert.exists(loginPage.searchNameInput(), 'Input is exist');
        assert.exists(loginPage.searchPasswordInput(), 'Input is exist');
        assert.exists(loginPage.searchButton(), 'Btn is exist');
    })

})