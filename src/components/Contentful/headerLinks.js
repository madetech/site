import React from 'react'
import MobileMenu from './MobileMenu'
import { Header } from '@madetech/frontend'

const HeaderLinks = props => {
  const invalidProps = props => {
    return (
      props === undefined ||
      props === null ||
      props.headerTitles === undefined ||
      props.headerTitles === null ||
      props.headerLinks === undefined ||
      props.headerLinks === null ||
      props.headerLinks.length !== props.headerTitles.length
    )
  }

  const renderDefaultHeaders = () => {
    return (
      <div className="new-design">
        <MobileMenu />
        <Header constrainLinkWidth logoHref="/" scrollable>
          <a href="/services" data-test={'default-services'}>
            Services
          </a>
          <a href="/sectors" data-test={'default-sectors'}>
            Sectors
          </a>
          <a href="/case-studies" data-test={'default-case-studies'}>
            Case Studies
          </a>
          <a href="/careers" data-test={'default-careers'}>
            Careers
          </a>
          <a href="/blog" data-test={'default-blog'}>
            Blog
          </a>
          <a href="/contact" data-test={'default-contact'}>
            Contact
          </a>
        </Header>
      </div>
    )
  }

  if (invalidProps(props)) {
    return renderDefaultHeaders()
  }

  const titleAndLinkNamesDictionary = props.headerLinks.reduce(function(
    result,
    field,
    index
  ) {
    result[props.headerTitles[index]] = field
    return result
  },
  {})

  const headerItem = (headerTitle, headerLink) => {
    return (
      <a href={headerLink} data-test={headerTitle} key={headerTitle}>
        {headerTitle}
      </a>
    )
  }

  const renderHeaderItems = () => {
    return Object.entries(titleAndLinkNamesDictionary).map(formField =>
      headerItem(formField[0], formField[1])
    )
  }

  const renderContentfulHeaders = () => {
    return (
      <div className="new-design">
        <MobileMenu links={titleAndLinkNamesDictionary} />
        <Header constrainLinkWidth logoHref="/" scrollable>
          {renderHeaderItems()}
        </Header>
      </div>
    )
  }

  return renderContentfulHeaders()
}

export default HeaderLinks
