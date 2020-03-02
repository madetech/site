import React from 'react'
import '../../all.scss'
import Meta from './Meta'
import Scripts from './Scripts'
import { Footer, Header, SiteMap, TopBar } from '@madetech/frontend'
import Example from '../Contentful/Menu'

export default function Layout({
  children,
  customClasses,
  data,
  description,
  featureFlags,
  titlePrefix,
  url,
  image,
}) {
  let pageContentClass = ''
  if (featureFlags === 'new-design') {
    pageContentClass += 'new-design'
  }
  if (customClasses) {
    customClasses.forEach(c => (pageContentClass += ` ${c}`))
  }

  return (
    <div>
      <Meta
        description={description}
        titlePrefix={titlePrefix}
        url={url}
        image={image}
      />
      <Scripts />

      <TopBar>
        <a href="https://learn.madetech.com">Learn</a>
        <a href="/resources/books">Books</a>
      </TopBar>

      <Example classes={'contentful-mobile-menu'}></Example>

      <Header constrainLinkWidth logoHref="/" scrollable>
        <a href="/our-services">Our Services</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
        <a href="/contact">Contact</a>
      </Header>

      <div className={pageContentClass}>{children}</div>

      <SiteMap />

      <Footer />
    </div>
  )
}
