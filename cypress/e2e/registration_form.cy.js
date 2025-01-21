import 'cypress-xpath'
describe('Verify the Registration process', () => {
  it('Should Show Error Message', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
    cy.xpath('//a[normalize-space()="Forgot login info?"]').click();
    cy.xpath('//input[@id="firstName"]').type('Vikash');

    cy.xpath('//input[@id="lastName"]').type('Thakur');
    cy.xpath('//input[@id="address.street"]').type('123 street rd');
    cy.xpath('//input[@id="address.city"]').type('Paris');
    cy.xpath('//input[@id="address.state"]').type('France');
    cy.xpath('//input[@id="address.zipCode"]').type('12345');
    cy.xpath('//input[@value="Find My Login Info"]').click();
    cy.xpath('//span[@id="ssn.errors"]') // Using the 'data-test' attribute selector for the error message
      .should('be.visible')
      .and('contain', 'Social Security Number is required.')
  })

  it('Should register Successfully', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
    cy.xpath('//a[normalize-space()="Register"]').click();
    cy.xpath('//input[@id="customer.firstName"]').type('Vikash');
    cy.xpath('//input[@id="customer.lastName"]').type('Thakur');
    cy.xpath('//input[@id="customer.address.street"]').type('123 street rd');
    cy.xpath('//input[@id="customer.address.city"]').type('Paris');
    cy.xpath('//input[@id="customer.address.state"]').type('France');
    cy.xpath('//input[@id="customer.address.zipCode"]').type('12345');
    cy.xpath('//input[@id="customer.phoneNumber"]').type('9828473947')
    cy.xpath('//input[@id="customer.ssn"]').type('1611981413');
    cy.xpath('//input[@id="customer.username"]').type('slaythefear01');
    cy.xpath('//input[@id="customer.password"]').type('Delhi@1611');
    cy.xpath('//input[@id="repeatedPassword"]').type('Delhi@1611');
    cy.xpath('//input[@value="Register"]').click();
    cy.xpath('//h1[normalize-space()="Welcome slaythefear"]').should('be.visible').and('contain', 'Welcome slaythefear');


  })
})

/*

*/