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
          <a href="/sectors">Sectors</a>
          <a href="/careers">Careers</a>
          <a href="/blog">Blog</a>
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
          link: '/our-services/digital-service-delivery',
        },
        {
          text: 'Data',
          link: '/our-services/data-infrastructure',
        },
        {
          text: 'Tech Capability',
          link: '/our-services/technology-skill-enablement',
        },
        {
          text: 'Tech Legacy',
          link: '/our-services/transform-legacy-applications',
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
          text: 'Purpose & Misson',
          link: '/our-purpose',
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
          link: 'https://learn.madetech.coms',
        },
      ],
      class: 'sitemap__why-made-tech',
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
      class: 'sitemap__case-studies',
    },
    {
      sectionTitle: 'Contact',
      links: [
        {
          text: 'Careers',
          link: '/careers',
        },
        {
          text: 'Academy',
          link: '/made-academy',
        },
      ],
      class: 'sitemap__get-in-touch',
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
