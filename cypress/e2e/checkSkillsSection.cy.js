describe('Skills Section', () => {
    it('should display skills', () => {
      
      cy.visit('/');
      
      cy.get('#skills').should('be.visible');
      cy.get('#skills-column1').should('be.visible');
      cy.get('#skills-column2').should('be.visible');
      
      cy.contains('JavaScript');
      cy.contains('Cypress');
      cy.contains('Node.js');
    });
  });