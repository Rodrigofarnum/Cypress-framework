import {usuarios} from '../fixtures/usuarios.json'

describe('2 Cadastrar multiplos usuários', () => {
    beforeEach( () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="register-button"]').click();
    })
    
    usuarios.forEach(usuarios => {
        it('Deve cadastrar o usuario sem ocorrer erros', () => {
            cy.cadastro_em_massa(usuarios)
        })
    })

})

    