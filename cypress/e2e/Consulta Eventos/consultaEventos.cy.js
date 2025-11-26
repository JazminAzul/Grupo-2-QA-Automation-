describe('Consulta, Busqueda y Filtrado de Eventos', () => {
    beforeEach(() => {
        cy.visit('https://ticketazo.com.ar/')
        cy.viewport('macbook-16')
      })

    it('ID 68 - Consultar eventos publicados', () => {
        cy.get('[data-cy^="evento-card"]').its('length').should('be.lte', 12)
        cy.get('[data-cy^="evento-card"]').each(() => {
            cy.get('[data-cy^="evento-titulo"]').should('exist');
            cy.get('[data-cy^="evento-fecha"]').should('exist');
            cy.get('[data-cy^="evento-horario"]').should('exist');
            cy.get('[data-cy^="btn-ver-evento"]').should('exist');
          });
    })

    it('ID 69 - Buscar eventos publicados por nombre', () => {
        const busqueda = 'a';
      
        cy.get('input[placeholder="Busca tu próxima función!"]').as('search');
        cy.get('@search').type(busqueda);
      
        cy.get('[data-cy^="evento-card"]').each(($card) => {
          cy.wrap($card)
            .find('[data-cy^="evento-titulo"]')
            .invoke('text')
            .then((texto) => {
              expect(texto.toLowerCase()).to.contain(busqueda);
            });
        });
      });
    
    it.only('ID 77 - Limpiar filtros', () => {
        cy.get('input[placeholder="Busca tu próxima función!"]').clear().type('C')
        cy.get('button[aria-label="Categoría"]').click()
        cy.get('li[data-key="Recital"]').click()
        
        cy.get('[data-cy^="evento-card"]')
        .its('length')
        .then((cantidadFiltrada) => {
          cy.wrap(cantidadFiltrada).as('cantidadFiltrada')
        });      

        cy.contains('Limpiar filtros').click()

         cy.get('[data-cy^="evento-card"]')
         .its('length')
         .then((cantidadFinal) => {
            cy.get('@cantidadFiltrada').then((cantidadFiltrada) => {
                expect(cantidadFinal).to.be.greaterThan(cantidadFiltrada)
            })
        })

        
    })

    it('ID 78 - Consultar detalles del evento', () => {
        cy.get('[data-cy^="evento-card"]').its('length').should('be.lte', 12)
        cy.get('[data-cy^="evento-card"]').each(() => {
            cy.get('[data-cy^="evento-titulo"]').should('exist');
            cy.get('[data-cy^="evento-fecha"]').should('exist');
            cy.get('[data-cy^="evento-horario"]').should('exist');
            cy.get('[data-cy^="btn-ver-evento"]').should('exist');
          });
    })
    
    it('ID 79 - Búsqueda sin resultados', () => {
        
    })
})
