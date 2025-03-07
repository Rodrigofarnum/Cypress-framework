describe('07 Apresentação inválida', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })

    it('Deve verificar eslogan', () => {
        cy.contains('footer','Quem ama adota!').should('be.visible');
    })
    
    it('Deve verificar a explicação do site', () => {
        cy.contains('div','Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })

    it('Clicar no botão de ícone de mensagem no header, escrever nome e senha inválidos na página de login e verificar 2 mensagens de alert ao usuário.', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('GitHubdrigo@hotmail.com');
        cy.get('[data-test="input-loginPassword"]').type('senhanadaaver');
        cy.get('[data-test="submit-button"]').click();
    })

    
  })
  