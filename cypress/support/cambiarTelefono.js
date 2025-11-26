Cypress.Commands.add('cambioDeTelefono', () => {
    cy.viewport(1280, 800)
    cy.contains('a', 'Editar Perfil').click() 
    cy.get('input[aria-label="Teléfono"]').clear().type('3516220234')
    cy.get('[data-cy="btn-save-profile"]').click()

})

