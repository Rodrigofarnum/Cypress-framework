describe('03 Apresentação', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })

    it('Deve verificar eslogan', () => {
        cy.contains('footer','Quem ama adota!').should('be.visible');
    })
    
    it('Deve verificar a explicação do site', () => {
        cy.contains('div','Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })

    it('Clicar no botão de ícone de mensagem no header, escrever nome e senha válidos no login e redirecionar para o catálogo.', () => {
        cy.get('.header__message').click();
        cy.login('GitHubRodrigo@hotmail.com', '@Senha12345');
        cy.get('[data-test="submit-button"]').click();
    })
 
  })
  