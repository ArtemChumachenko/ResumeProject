describe('Personal Information', () => {
    it('should display personal information', () => {
      cy.visit('/');
      cy.get('#personal-info').should('be.visible');
      cy.contains('Name: Artem Chumachenko');
      cy.contains('Title: QA Automation Engineer');
      cy.contains('Email: chenko.ar@gmail.com');
      cy.contains('Phone: 704-750-18-53');
      cy.contains('Address: 219 Murray Glen dr., Cary, NC');
    });
  });
  