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
    const invalidProps = props => {
      return (
        props === undefined ||
        props === null ||
        props.links === undefined ||
        props.links === null
      )
    }

    const renderDefaultItems = () => {
      return (
        <div className="contentful-mobile-menu">
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
            <a
              href="/services"
              data-test={'default-services'}
              className={'menu-item'}
            >
              Services
            </a>
            <a
              href="/sectors"
              data-test={'default-sectors'}
              className={'menu-item'}
            >
              Sectors
            </a>
            <a
              href="/case-studies"
              data-test={'default-case-studies'}
              className={'menu-item'}
            >
              Case Studies
            </a>
            <a
              href="/careers"
              data-test={'default-careers'}
              className={'menu-item'}
            >
              Careers
            </a>
            <a href="/blog" data-test={'default-blog'} className={'menu-item'}>
              Blog
            </a>
            <a
              href="/contact"
              data-test={'default-contact'}
              className={'menu-item'}
            >
              Contact
            </a>
            <a className="home" href="/">
              <Logo />
            </a>
          </Menu>
        </div>
      )
    }

    if (invalidProps(this.props)) {
      return renderDefaultItems()
    }

    const headerItem = (headerTitle, headerLink) => {
      return (
        <a
          href={headerLink}
          className={'menu-item'}
          data-test={headerTitle}
          key={headerTitle}
        >
          {headerTitle}
        </a>
      )
    }

    const renderHeaderItems = () => {
      return Object.entries(this.props.links).map(formField =>
        headerItem(formField[0], formField[1])
      )
    }

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
        {renderHeaderItems()}
        <a className="home" href="/">
          <Logo />
        </a>
      </Menu>
    )

    return <div className="contentful-mobile-menu">{links}</div>
  }
}
