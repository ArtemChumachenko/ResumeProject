describe('Work Experience Section', () => {
    it('should display work experience',async() => {
      
        cy.visit('/');
        
        cy.get('#work-experience').then(() => {
          cy.contains('AAN Consulting Corporation, NY').should('be.visible');
          cy.contains('FrikShun, Cary').should('be.visible');
          cy.contains('ECCO Shoes, Moscow').should('be.visible');
        });
  });
});