describe('Contentful Slug Validation Rules', () => {
  const regex = /^\/([a-z]*[a-z\/\-]*[a-z]+)?$/

  const validationExpectations = {
    '/': true,
    '/cool': true,
    '/bob/cool': true,
    '/bob-cool/bbb-b': true,
    '': false,
    '/bob/cool/': false,
    '/bob/cool-': false,
    '/bob-cool/bbb-': false,
    'bob': false,
    'bob-cool': false,
    'bob-cool/': false
  }

  Object.entries(validationExpectations).forEach(([slug, valid]) => {
    it(`should ${valid ? 'accept' : 'reject'} '${slug}'`, () => {
      expect(regex.test(slug)).toBe(valid)
    })
  })
})
