import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div className="contentful-mobile-menu">
        <Menu
          right
          width={'100vw'}
          customBurgerIcon={
            <img
              src={require('../../assets/images/mobile-nav/icon-burger/icon-burger@2x.png')}
            />
          }
          customCrossIcon={
            <img
              src={require('../../assets/images/mobile-nav/icon-close/icon-close@2x.png')}
            />
          }
        >
          <a id="services" className="menu-item" href="/services">
            Services
          </a>
          <a id="sectors" className="menu-item" href="/sectors">
            Sectors
          </a>
          <a id="whyMT" className="menu-item" href="">
            Why Made Tech
          </a>
          <a
            id="purpose"
            className="menu-item indented-item"
            href="/our-purpose"
          >
            Purpose &#38; Mission
          </a>
          <a
            id="frameworks"
            className="menu-item indented-item"
            href="/frameworks"
          >
            Frameworks
          </a>
          <a id="partners" className="menu-item" href="/partners">
            Partners
          </a>
          <a id="blog" className="menu-item indented-item" href="/blog">
            Blog
          </a>
          <a
            id="learn"
            className="menu-item indented-item"
            href="https://learn.madetech.com"
          >
            Learn
          </a>
          <a
            id="gds"
            className="menu-item indented-item"
            href="/case-studies/government-digital-service-govwifi"
          >
            Contact
          </a>
          <a
            id="laa"
            className="menu-item indented-item"
            href="/case-studies/legal-aid-agency"
          >
            Legal Aid Agency
          </a>
          <a
            id="hackney"
            className="menu-item indented-item"
            href="/case-studies/hackney-api-platform"
          >
            Hackney Council
          </a>
          <a
            id="moj"
            className="menu-item indented-item"
            href="/case-studies/ministry-of-justice-children-fund"
          >
            Minstry of Justice
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a id="careers" className="menu-item indented-item" href="/careers">
            Careers
          </a>
          <a
            id="academy"
            className="menu-item indented-item"
            href="/careers/academy"
          >
            Academy
          </a>
        </Menu>
      </div>
    )
  }
}
