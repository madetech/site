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
  image,
}) {
  let pageContentClass = ''
  if (featureFlags === 'new-design') {
    pageContentClass += 'new-design'
  }
  if (customClasses) {
    customClasses.forEach(c => (pageContentClass += ` ${c}`))
  }

  let navLinks = {
    Services: [
      {
        Digital: '/our-services/digital-service-delivery',
        Data: '/our-services/data-infrastructure',
        'Tech Capability': '/our-services/technology-skill-enablement',
        'Tech Legacy': '/our-services/transform-legacy-applications',
      },
    ],
    Sectors: [
      {
        'Central Government': '/sectors/central-government',
        'Central Government': '/sectors/local-government',
        Housing: '/sectors/housing',
        Healthcare: '/sectors/healthcare',
        Transport: '/sectors/transport',
        Education: '/sectors/education',
        'Police, Justice & Emergency': '/sectors/police-justice-emergency',
        'Space, Defence & Security': '/sectors/space-defence-security',
      },
    ],
    'Why Made Tech': [
      {
        'Purpose & Misson': '/our-purpose',
        Frameworks: '/frameworks',
        Partners: '/partners',
        Blog: '/blog',
        Books: '/resources/books',
        Learn: 'https://learn.madetech.com',
      },
      'sitemap__why-made-tech',
    ],
    'Case Studies': [
      {
        'Ministry of Justice': '/case-study',
      },
      'sitemap__case-studies',
    ],
    Contact: [
      {
        Careers: '/careers',
        Academy: '/made-academy',
      },
      'sitemap__get-in-touch',
    ],
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
