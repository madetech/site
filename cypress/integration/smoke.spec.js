describe('Smoke test for Contentful pages', function () {
  // Fetch slugs once and share between all tests
  //
  // We set a local variable `slug` rather than use .as() because the value
  // would be reset after every test.
  let slugs
  before(function () {
    cy.wrap(contentful.getAllPageSlugs()).then(_slugs => slugs = _slugs)
  })

  it(`All published pages render with 200`, function () {
    slugs.forEach(slug => {
      cy.request(`https://www.madetech.com/${slug}`).its('status').should('eq', 200)
    })
  })

  it(`All published pages render without errors`, function () {
    slugs.forEach(slug => {
      cy.visit(`https://www.madetech.com/${slug}`)
      cy.contains('Render Content Error').should('not.exist')
      cy.contains('Unknown Content Type').should('not.exist')
    })
  })
})
