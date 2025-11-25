// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginCorrecto', (email, password) => {
    cy.visit('https://ticketazo.com.ar/auth/login')
    cy.get('[data-cy="input-email"]').type('gutu3@hotmail.com')
    cy.get('[data-cy="input-password"]').type('Lavozsigueviva0712$')
    cy.get('[data-cy="btn-login"]').click()
})

Cypress.Commands.add('cambioDeNombre', () => {
    cy.viewport(1280, 800)
    cy.contains('a', 'Editar Perfil').click() 
   // cy.get('input[placeholder="Ej: Juan Pérez"]').clear().type('Nuevo Nombre')
    cy.get('input[placeholder="Ej: Juan Pérez"]').first().type('Mi nuevo nombre')
    cy.get('[data-cy="btn-save-profile"]').click()

})