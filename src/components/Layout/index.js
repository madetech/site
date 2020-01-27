import React from 'react'
import '../../all.scss'
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

      <TopBar />

      <Header constrainLinkWidth logoHref="/" scrollable>
        <a href="/">Why Made Tech</a>
        <a href="/our-services">Our Services</a>
        <a href="/sectors">Sectors</a>
        <a href="/">Case studies</a>
        <a href="/">About Us</a>
        <a href="/contact">Get in touch</a>
      </Header>

      <div className={pageContentClass}>{children}</div>

      <SiteMap />

      <Footer />
    </div>
  )
}
