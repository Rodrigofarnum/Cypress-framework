describe('2.1 Cadastro Errado', () => {
  it('Deve preencher o e-mail e a senha de forma inválida e verificar as três mensagens de alerta para o usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="submit-button"]').click();
    cy.contains('p', 'É necessário informar um endereço de email').should('be.visible')
    cy.contains('p', 'Crie uma senha').should('be.visible')
    cy.contains('p', 'Repita a senha criada acima').should('be.visible')
  })
})
