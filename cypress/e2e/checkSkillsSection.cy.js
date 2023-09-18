describe('Skills Section', () => {
    it('should display skills', async() => {
      
      cy.visit('/');
      
      await cy.get('#skills #skills-column1').should('be.visible');
    await cy.get('#skills #skills-column2').should('be.visible');
    
    cy.contains('JavaScript').should('be.visible');
    cy.contains('Cypress').should('be.visible');
    cy.contains('Node.js').should('be.visible');
    });
  });