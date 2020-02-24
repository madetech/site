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

  let newNavLinks = [
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
          text: 'Ministry of Justice',
          link: '/case-study',
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

      <SiteMap navLinks={newNavLinks} />

      <Footer />
    </div>
  )
}
