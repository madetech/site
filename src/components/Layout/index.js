import React from 'react'
import '../../all.scss'
import CookieConsent from './CookieConsent'
import Meta from './Meta'
import Scripts from './Scripts'
import { Footer, Header, SiteMap, TopBar } from '@madetech/frontend'

export default function Layout({
  children,
  customClasses,
  data,
  description,
  featureFlags,
  titlePrefix,
  url,
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
      <Meta description={description} titlePrefix={titlePrefix} url={url} />
      <Scripts />

      <TopBar>
        <a href="https://learn.madetech.com">Learn</a>
      </TopBar>

      <Header constrainLinkWidth logoHref="/" scrollable>
        <a href="/our-services">Our Services</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
        <a href="/contact">Contact</a>
      </Header>

      <div className={pageContentClass}>{children}</div>

      <SiteMap />

      <Footer />

      <CookieConsent />
    </div>
  )
}
