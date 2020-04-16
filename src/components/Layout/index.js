import React from 'react'
import '../../all.scss'
import Meta from './Meta'
import Scripts from './Scripts'
import { Footer, Header, SiteMap } from '@madetech/frontend'
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

  function headerComponentMaker() {
    return (
      <div className="new-design">
        <MobileMenu />
        <Header constrainLinkWidth logoHref="/" scrollable>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </Header>
      </div>
    )
  }

  let headerComponent = headerComponentMaker()

  let siteMapLinks = [
    {
      sectionTitle: 'Services',
      links: [
        {
          text: 'Digital',
          link: '/services/digital',
        },
        {
          text: 'Data',
          link: '/services/data',
        },
        {
          text: 'Tech Capability',
          link: '/services/capability',
        },
        {
          text: 'Tech Legacy',
          link: '/services/legacy',
        },
      ],
    },
    {
      sectionTitle: 'Case Studies',
      links: [
        {
          text: 'Government Digital Service',
          link: '/case-studies/government-digital-service-govwifi',
        },
        {
          text: 'Legal Aid Agency',
          link: '/case-studies/legal-aid-agency',
        },
        {
          text: 'Hackney Council',
          link: '/case-studies/hackney-api-platform',
        },
        {
          text: 'Ministry of Justice',
          link: '/case-studies/ministry-of-justice-children-fund',
        },
      ],
    },
    {
      sectionTitle: 'Resources',
      links: [
        {
          text: 'Blog',
          link: '/blog',
        },
        {
          text: 'Books',
          link: '/resources/books',
        },
        {
          text: 'Learn',
          link: 'https://learn.madetech.com',
        },
      ],
    },
    {
      sectionTitle: 'Company',
      links: [
        {
          text: 'Academy',
          link: '/careers/academy',
        },
        {
          text: 'Careers',
          link: '/careers',
        },
        {
          text: 'Contact Us',
          link: '/contact',
        },
        {
          text: 'Handbook',
          link: 'https://github.com/madetech/handbook',
        },
      ],
      class: 'sitemap__company',
    },
  ]

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

      <SiteMap navLinks={siteMapLinks} />

      <Footer />
    </div>
  )
}
