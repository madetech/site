import React from 'react'
import { Footer } from '@madetech/frontend'
import linkedinSrc from '@madetech/marketing-assets/icons/linkedin.svg'
import twitterSrc from '@madetech/marketing-assets/icons/twitter.svg'
import githubSrc from '@madetech/marketing-assets/icons/github.svg'

const FooterLinks = props => {
  const invalidProps = props => {
    return (
      props === undefined ||
      props === null ||
      props.footerTitles === undefined ||
      props.footerTitles === null ||
      props.footerLinks === undefined ||
      props.footerLinks === null ||
      props.footerImages === undefined ||
      props.footerImages === null ||
      props.footerLinks.length !== props.footerTitles.length
    )
  }

  const renderDefaultFooters = () => {
    const currentYear = new Date().getFullYear()
    return (
      <Footer>
        <a
          className="footer__social_link"
          href="https://www.linkedin.com/company/madetech"
        >
          <img src={linkedinSrc} alt="LinkedIn" height="25" />
        </a>

        <a className="footer__social_link" href="https://twitter.com/madetech">
          <img src={twitterSrc} alt="Twitter" height="25" />
        </a>

        <a className="footer__social_link" href="https://github.com/madetech">
          <img src={githubSrc} alt="GitHub" height="25" />
        </a>
      </Footer>
    )
  }

  if (invalidProps(props)) {
    return renderDefaultFooters()
  }
  const titleAndLinkNamesDictionary = props.footerLinks.reduce(function(
    result,
    field,
    index
  ) {
    result[props.footerTitles[index]] = {
      link: field,
      img: props.footerImages[index],
    }
    return result
  },
  {})
  const footerItem = (footerTitle, footerLink, footerImage) => {
    return (
      <a
        href={footerLink}
        data-test={footerTitle}
        key={footerTitle}
        className="footer__social_link"
      >
        <img src={footerImage} alt={footerTitle} height="25" />
      </a>
    )
  }
  const renderFooterItems = () => {
    return Object.entries(titleAndLinkNamesDictionary).map(formField =>
      footerItem(formField[0], formField[1].link, formField[1].img.file.url)
    )
  }

  const renderContentfulFooters = () => {
    return <Footer>{renderFooterItems()}</Footer>
  }

  return renderContentfulFooters()
}

export default FooterLinks
