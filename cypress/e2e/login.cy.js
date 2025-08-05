describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Login com dados válidos deve permitir acessar o sistema com sucesso', () => {
    //Act
    cy.get('#login-form > :nth-child(1) > .input-field > label').click().type('grupo4')
    cy.get('#login-form > :nth-child(2) > .input-field > label').click().type('senha@1234')
    cy.get('#login-form > :nth-child(3) > .col > .btn').click()

    //Assert 
    cy.get('i.material-icons').should('exist');
  })
  it('Login com senha inválida não deve permitir acessar o sistema', () => {
    //Act
    cy.get('#login-form > :nth-child(1) > .input-field > label').click().type('grupo4')
    cy.get('#login-form > :nth-child(2) > .input-field > label').click().type('senha@123')
    cy.get('#login-form > :nth-child(3) > .col > .btn').click()

    //Assert 
    cy.get('i.material-icons').should('exist'); // Validar elemento com mensagem de erro
  })
})