describe('Personal Information', () => {
    it('should display personal information', async() => {

      cy.visit('/');
      
      cy.get('#personal-info').should('be.visible');
      
      await cy.contains('Name: Artem Chumachenko').should('be.visible');
    });
  });
  