import React from 'react'
import '../../all.scss'
import CookieConsent from './CookieConsent'
import Meta from './Meta'
import Scripts from './Scripts'
import { Footer, Header, SiteMap, TopBar } from '@madetech/frontend'

export default function Layout({
  children,
  data,
  description,
  featureFlags,
  titlePrefix,
  url,
}) {
  let pageContentComponent
  if (featureFlags === 'new-design') {
    pageContentComponent = (
      <div className="new-design">
        <div className="new-design__inner">
          {children}
        </div>
      </div>
    )
  } else {
    pageContentComponent = (
      <div>
        {children}
      </div>
    )
  }

  return (
    <div>
      <Meta description={description} titlePrefix={titlePrefix} url={url} />
      <Scripts />

      <TopBar>
        <a href="https://learn.madetech.com">Learn</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
        <a href="/contact">Contact</a>
      </TopBar>

      <Header constrainLinkWidth logoHref="/" scrollable>
        <a href="/agile-transformation" className="nav-link">
          Agile Team<br />Transformation
        </a>

        <a href="/software-development" className="nav-link">
          Software<br />Development
        </a>

        <a href="/continuous-delivery" className="nav-link">
          Continuous<br />Delivery
        </a>

        <a href="/devops" className="nav-link">
          DevOps
        </a>

        <a href="/support-and-maintainance" className="nav-link">
          Reliability<br />Engineering
        </a>
      </Header>

      {pageContentComponent}

      <SiteMap />

      <Footer />

      <CookieConsent />
    </div>
  )
}
