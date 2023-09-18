describe('Summary Section', () => {
    it('should display the summary', () => {

      cy.visit('/');

      cy.get('#summary').should('be.visible');
      cy.contains('Summary').should('be.visible');

      cy.contains('Highly skilled and motivated QA Engineer with 6+ years of experience in software testing and quality assurance.').should('be.visible');
    });
  });
  