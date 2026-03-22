describe('Busca de artigos no Blog do Agi', () => {
  it('deve retornar resultados para um termo válido', () => {
    const termo = 'cartão';

    cy.searchArticle(termo);

    cy.url().should('include', `?s=${encodeURIComponent(termo)}`);
    cy.contains(termo, { matchCase: false });
  });

  it('deve exibir comportamento esperado para termo inexistente', () => {
    const termo = 'termo-inexistente-xyz-qa';

    cy.searchArticle(termo);

    cy.url().should('include', `?s=${encodeURIComponent(termo)}`);
    cy.get('body').should('be.visible');
  });
});