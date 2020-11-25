import React from 'react'
import '../../all.scss'
import Meta from './Meta'
import Scripts from './Scripts'
import HeaderLinks from '../Contentful/headerLinks'
import FooterLinks from '../Contentful/footerLinks'
import SiteMapLinks from '../Contentful/siteMapLinks'

export default function Layout({
  children,
  customClasses,
  description,
  featureFlags,
  titlePrefix,
  url,
  image,
  headerTitles,
  headerLinks,
  footerTitles,
  footerLinks,
  footerImages,
  siteMapContent,
}) {
  let pageContentClass = ''
  if (featureFlags === 'new-design') {
    pageContentClass += 'new-design'
  }
  if (customClasses) {
    customClasses.forEach(c => (pageContentClass += ` ${c}`))
  }

  function headerComponent() {
    return <HeaderLinks headerTitles={headerTitles} headerLinks={headerLinks} />
  }

  function siteMapComponent() {
    return (
      <SiteMapLinks navLinks={siteMapLinks} siteMapContent={siteMapContent} />
    )
  }

  function footerComponent() {
    return (
      <FooterLinks
        footerTitles={footerTitles}
        footerLinks={footerLinks}
        footerImages={footerImages}
      />
    )
  }

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
      sectionTitle: 'Sectors',
      links: [
        {
          text: 'Central Government',
          link: '/sectors/central-government',
        },
        {
          text: 'Local Government',
          link: '/sectors/local-government',
        },
        {
          text: 'Housing',
          link: '/sectors/housing',
        },
        {
          text: 'Healthcare',
          link: '/sectors/healthcare',
        },
        {
          text: 'Transport',
          link: '/sectors/transport',
        },
        {
          text: 'Education',
          link: '/sectors/education',
        },
        {
          text: 'Police, Justice & Emergency',
          link: '/sectors/police-justice-emergency',
        },
        {
          text: 'Space, Defence & Security',
          link: '/sectors/space-defence-security',
        },
      ],
    },
    {
      sectionTitle: 'Why Made Tech',
      links: [
        {
          text: 'Case Studies',
          link: '/case-studies',
        },
        {
          text: 'Purpose & Mission',
          link: '/purpose',
        },
        {
          text: 'Frameworks',
          link: '/frameworks',
        },
        {
          text: 'Partners',
          link: '/partners',
        },
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
      class: 'sitemap__why-made-tech',
    },
    {
      sectionTitle: 'Company',
      links: [
        {
          text: 'Careers',
          link: '/careers',
        },
        {
          text: 'Academy',
          link: '/careers/academy',
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

      {headerComponent()}

      <div className={pageContentClass}>{children}</div>

      {siteMapComponent()}

      {footerComponent()}
    </div>
  )
}
