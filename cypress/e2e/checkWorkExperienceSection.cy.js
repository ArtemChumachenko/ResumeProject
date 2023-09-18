describe('Work Experience Section', () => {
    it('should display work experience', () => {
      
      cy.visit('/');
      
      cy.get('#work-experience').should('be.visible');
      
      cy.contains('AAN Consulting Corporation, NY - Software QA Engineer');
      cy.contains('FrikShun, Cary - QA Automation Engineer');
      cy.contains('ECCO Shoes, Moscow - QA Tester');
    });
  });