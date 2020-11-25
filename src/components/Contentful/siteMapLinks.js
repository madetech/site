import React from 'react'
import { SiteMap } from '@madetech/frontend'

const SiteMapLinks = props => {
  const invalidProps = props => {
    return (
      props === undefined ||
      props === null ||
      props.siteMapContent === undefined ||
      props.siteMapContent === null
    )
  }

  const renderDefaultSiteMap = () => {
    let siteMapNavLinks
    let defaultNavLinks = [
      {
        sectionTitle: 'Services',
        links: [
          {
            text: 'Digital Service Delivery',
            link: '/services/digital',
          },
          {
            text: 'Data Infrastructure & Insights',
            link: '/services/data',
          },
          {
            text: 'Technology Skills Enablement',
            link: '/services/capability',
          },
          {
            text: 'Transforming Legacy Applications',
            link: '/services/legacy',
          },
        ],
        bootstrapSizes: 'col-lg-4 col-sm-4 col-6',
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
        bootstrapSizes: 'col-lg-2 offset-lg-1 col-sm-3 offset-sm-1 col-6',
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
            link: '/ext/handbook',
          },
        ],
        bootstrapSizes: 'col-lg-2 offset-lg-3 col-sm-3 offset-sm-1 col-6',
        class: 'sitemap__company',
      },
    ]

    if (props.navLinks) {
      siteMapNavLinks = props.navLinks
    } else {
      siteMapNavLinks = defaultNavLinks
    }

    let navLinksComponent = siteMapNavLinks.map(section => {
      return navLinksSectionMaker(section)
    })
    function navLinksSectionMaker(section) {
      let title = section.sectionTitle
      let links = section.links
      let classNames = 'col-lg-2 col-sm-3 col-6'

      if (section.bootstrapSizes) {
        classNames = section.bootstrapSizes
      }

      if (section.class) {
        classNames += ' ' + section.class
      }

      return (
        <div className={classNames}>
          <nav>
            <p>
              <strong>{title}</strong>
            </p>
            {links.map((link, index) => {
              return (
                <a href={link.link} key={index}>
                  {link.text}
                </a>
              )
            })}
          </nav>
          <br />
        </div>
      )
    }
    return (
      <div className="new-design">
        <SiteMap>{navLinksComponent}</SiteMap>
      </div>
    )
  }

  if (invalidProps(props)) {
    return renderDefaultSiteMap()
  }

  const titleAndLinkNamesDictionary = props.siteMapContent.map(i => ({
    sectionTitle: i.sectionTitle,
    links: i.siteMapLinks.map((link, index) => ({
      text: i.siteMapTitles[index],
      link: link,
    })),
  }))

  let renderSiteMapItems = () =>
    titleAndLinkNamesDictionary.map(section => {
      return siteMapSectionMaker(section)
    })
  function siteMapSectionMaker(section) {
    let title = section.sectionTitle
    let links = section.links
    let classNames = 'col-lg-2 col-sm-3 col-6'

    if (section.bootstrapSizes) {
      classNames = section.bootstrapSizes
    }

    if (section.class) {
      classNames += ' ' + section.class
    }

    return (
      <div className={classNames}>
        <nav>
          <p>
            <strong>{title}</strong>
          </p>
          {links.map((link, index) => {
            return (
              <a href={link.link} key={index}>
                {link.text}
              </a>
            )
          })}
        </nav>
        <br />
      </div>
    )
  }
  const renderContentfulSiteMap = () => {
    return (
      <div className="new-design">
        <SiteMap>{renderSiteMapItems()}</SiteMap>
      </div>
    )
  }

  return renderContentfulSiteMap()
}

export default SiteMapLinks
