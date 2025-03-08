
describe('1 Fazer o login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    });

    it('Deve conferir os dados de acesso do usuario e fazer o login', () => {
        cy.login('GitHubRodrigo@hotmail.com', '@Senha12345');
    });
  })
  
  
  