describe('Work Experience Section', () => {
    it('should display work experience',() => {
      
        cy.visit('/');
        cy.get('#work-experience').then(() => {
          cy.contains('AAN Consulting Corporation, NY - Software QA Engineer').should('be.visible');
          cy.contains('FrikShun, Cary - QA Automation Engineer').should('be.visible');
          cy.contains('ECCO Shoes, Moscow - QA Tester').should('be.visible');
        });
  });
});