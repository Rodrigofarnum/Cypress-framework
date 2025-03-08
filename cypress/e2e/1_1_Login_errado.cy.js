describe('1.1 Fazer o login Errado', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', '**/login*',{
            statusCode:400,}).as('stubPost')
    })

    it('Deve conferir a mensagem informando que os dados são invalidos', () => {
        cy.login('rodrigonemnem@hotmail.com', 'Senha123456');
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais').should('be.visible')
    })

    it('Deve conferir a senha fora dos padões', () => {
        cy.login('rodrigonemnem@hotmail.com', 'senha123456');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })   

    it('Deve conferir  o e-mail fora dos padões', () => {
        cy.login('rodrigonemnem@', 'Senha123456');
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
    })   
  })