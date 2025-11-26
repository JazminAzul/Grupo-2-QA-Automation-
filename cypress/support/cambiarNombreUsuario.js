Cypress.Commands.add('cambiarNombreUsuario', () => {
    cy.viewport(1280, 800)  // esta resolucion es para que no se transforme en menu hamburguesa
    cy.contains('a', 'Editar Perfil').click() 
    cy.get('input[aria-label="Nombre de usuario"]').clear().type('Mi nuevo nombre')
    cy.get('[data-cy="btn-save-profile"]').click()

})