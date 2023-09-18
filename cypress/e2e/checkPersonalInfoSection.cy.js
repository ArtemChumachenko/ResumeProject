describe('Personal Information', () => {
    it('should display personal information', async() => {

      cy.visit('/');
      
      cy.get('#personal-info').should('be.visible');
      
      await cy.contains('Name: Artem Chumachenko').should('be.visible');
      await cy.contains('Title: QA Automation Engineer').should('be.visible');
      await cy.contains('Email: chenko.ar@gmail.com').should('be.visible');
      await cy.contains('Phone: 704-750-18-53').should('be.visible');
      await cy.contains('Address: 219 Murray Glen dr., Cary, NC').should('be.visible');
    });
  });
  