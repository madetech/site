import toHtmlId from './toHtmlId'

describe('toHtmlId()', () => {
  it('should lowercase all words', () => {
    expect(toHtmlId('Careers')).toEqual('careers')
    expect(toHtmlId('Public Sector')).toEqual('public-sector')
  })

  it('should replace all non-alphabetical letters with hyphens', () => {
    expect(toHtmlId('Careers / Academy')).toEqual('careers-academy')
    expect(toHtmlId('Careers / Academy > Sign Up')).toEqual('careers-academy-sign-up')
    expect(toHtmlId('Public Sector')).toEqual('public-sector')
    expect(toHtmlId('Public Sector > Services')).toEqual('public-sector-services')
  })

  it('should start end with a hyphen', () => {
    expect(toHtmlId(' Public Sector > Services')).toEqual('public-sector-services')
    expect(toHtmlId('!Public Sector > Services')).toEqual('public-sector-services')
  })

  it('should not end with a hyphen', () => {
    expect(toHtmlId('Public Sector > Services ')).toEqual('public-sector-services')
    expect(toHtmlId('Public Sector > Services!')).toEqual('public-sector-services')
  })

  it('should not repeat hyphens', () => {
    expect(toHtmlId('Public Sector >> Services')).toEqual('public-sector-services')
  })
})
