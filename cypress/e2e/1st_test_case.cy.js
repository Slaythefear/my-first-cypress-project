describe('Verify Website Title', () => {
  it('Should verify the title of the website', () => {
    // Visit the website
    cy.visit('https://digimantralabs.com/');

    // Assert the title of the website
    cy.title().should('eq', 'Top Mobile App and Web Development Company');
  });
});
