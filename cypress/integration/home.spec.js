describe('Smoke', function () {
  const urls = [
    'https://www.madetech.com/publicsector',
    'https://www.madetech.com/insights',
    'https://www.madetech.com/careers',
    'https://www.madetech.com/careers/academy',
  ]

  urls.forEach(url => {
    it(`${url} renders without errors`, function () {
      cy.visit(url)
      cy.contains('Render Content Error').should('not.exist')
      cy.contains('Unknown Content Type').should('not.exist')
    })
  })
})
