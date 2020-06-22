import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Logo } from '@madetech/frontend'

export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    let links = (
      <Menu
        right
        width={'100vw'}
        customBurgerIcon={
          <img
            alt=""
            src={require('../../assets/images/mobile-nav/icon-burger/icon-burger.png')}
          />
        }
        customCrossIcon={
          <img
            alt=""
            src={require('../../assets/images/mobile-nav/icon-close/icon-close.png')}
          />
        }
      >
        <a id="services" className="menu-item" href="/services">
          Services
        </a>
        <a id="sectors" className="menu-item" href="/sectors">
          Sectors
        </a>
        <div id="whyMT" className="menu-item">
          Why Made Tech
        </div>
        <a
          id="case-studies"
          className="menu-item indented-item"
          href="/case-studies"
        >
          Case Studies
        </a>
        <a id="purpose" className="menu-item indented-item" href="/purpose">
          Purpose &#38; Mission
        </a>
        <a
          id="frameworks"
          className="menu-item indented-item"
          href="/frameworks"
        >
          Frameworks
        </a>
        <a id="partners" className="menu-item indented-item" href="/partners">
          Partners
        </a>
        <a id="blog" className="menu-item indented-item" href="/blog">
          Blog
        </a>
        <a
          id="books"
          className="menu-item indented-item"
          href="/resources/books"
        >
          Books
        </a>
        <a
          id="learn"
          className="menu-item indented-item"
          href="https://learn.madetech.com"
        >
          Learn
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
        <a className="home" href="/">
          <Logo />
        </a>
      </Menu>
    )

    return <div className="contentful-mobile-menu">{links}</div>
  }
}
