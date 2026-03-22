Cypress.Commands.add('acceptCookieBannerIfVisible', () => {
  cy.get('body').then(($body) => {
    const labels = ['Aceitar', 'Aceito', 'Accept', 'Concordo', 'Continuar'];

    const found = labels.find((label) => $body.text().includes(label));

    if (found) {
      cy.contains('button, a', new RegExp(found, 'i'), { timeout: 3000 })
        .click({ force: true });
    }
  });
});

Cypress.Commands.add('searchArticle', (term) => {
  cy.visit(`/?s=${encodeURIComponent(term)}`);
  cy.acceptCookieBannerIfVisible();
});