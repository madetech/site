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

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function isBrowser() {
    return typeof window !== 'undefined'
  }

  function handleResize() {
    if (isBrowser() && window.innerWidth <= 576) {
      setIsMobile(true)
    } else if (isBrowser() && window.innerWidth > 576) {
      setIsMobile(false)
    }
  }

  function headerComponentMaker() {
    if (isMobile || window.innerWidth <= 576) {
      return <MobileMenu />
    } else {
      return (
        <Header constrainLinkWidth logoHref="/" scrollable>
          <a href="/our-services">Our Services</a>
          <a href="/blog">Blog</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </Header>
      )
    }
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
