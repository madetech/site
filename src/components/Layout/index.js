import React, { useState, useEffect } from 'react'
import '../../all.scss'
import Meta from './Meta'
import Scripts from './Scripts'
import { Footer, Header, SiteMap, TopBar } from '@madetech/frontend'
import MobileMenu from '../Contentful/MobileMenu'

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

  const [isMobile, setIsMobile] = useState(false)

  function headerComponentMaker() {
    return (
      <div>
        <MobileMenu />
        <Header constrainLinkWidth logoHref="/" scrollable>
          <a href="/our-services">Our Services</a>
          <a href="/blog">Blog</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </Header>
      </div>
    )
  }

  let headerComponent = headerComponentMaker()

  return (
    <div>
      <Meta
        description={description}
        titlePrefix={titlePrefix}
        url={url}
        image={image}
      />
      <Scripts />

      {headerComponent}

      <div className={pageContentClass}>{children}</div>

      <SiteMap />

      <Footer />
    </div>
  )
}
