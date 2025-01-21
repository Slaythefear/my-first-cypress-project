import 'cypress-xpath'
describe('Verify login with valid and invalid credentials', () => {
  it('Should login successfully', () => {
    // Navigate to the login page
    cy.visit('https://www.saucedemo.com/v1/').wait(10000);


    // Enter valid credentials

    //cy.get('#user-name').type('standard_user') // Using the 'id' selector
    cy.xpath('//input[@id="user-name"]').type('standard_user');
    //cy.get('#password').type('secret_sauce') // Using the 'id' selector
    cy.xpath('//input[@id="password"]').type('secret_sauce');
    cy.xpath('//input[@id="login-button"]').click() // Using the 'id' selector for the login button

    // Add assertions to verify successful login
    // cy.url().should('include', 'inventory.html')
  });

  it('Should show an error message for invalid login', () => {
    // Navigate to the login page
    cy.visit('https://www.saucedemo.com/v1/')

    // Enter invalid credentials
    cy.get('#user-name').type('standard_user01') // Using the 'id' selector
    cy.get('#password').type('secret_sauce01') // Using the 'id' selector
    cy.get('#login-button').click() // Using the 'id' selector for the login button

    // Assert that the error message is displayed is verified.
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })
})
