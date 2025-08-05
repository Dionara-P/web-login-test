describe('Esqueci Minha Senha', () => {
   beforeEach(() => {
     cy.visit('http://localhost:8080')    
   }) 

   it('Deve acessar tela de gerar Token para reset de senha', () => {
     //Act 
     cy.get('#forgot-password-link').click()

    //Assert com Contains
    cy.contains('#forgot-section > .m8 > .card > .card-content > .card-title', 'Esqueci Minha Senha')
        .should('be.visible')     
   })
})