import React from 'react'
import { withPrefix } from 'gatsby'
import '../../all.scss'
import Meta from '../Meta'
import { Footer, Header, TopBar } from '@madetech/frontend'

export default function Layout ({ children, data, titlePrefix }) {
  return (
    <div>
      <Meta titlePrefix={titlePrefix} />

      <TopBar>
        <a href='/'>Who are Made Tech?</a>
        <a href={withPrefix('')}>Blog</a>
        <a href='https://learn.madetech.com'>Learn</a>
        <a href='/careers'>Careers</a>
      </TopBar>

      <Header constrainLinkWidth logoHref='/'>
        <a href='/agile-transformation' className='nav-link'>
          Agile Team Transformation
        </a>

        <a href='/software-development' className='nav-link'>
          Software Development
        </a>

        <a href='/continuous-delivery' className='nav-link'>
          Continuous Delivery
        </a>

        <a href='/devops' className='nav-link'>
          DevOps&nbsp;&amp;&nbsp;<br />Live&nbsp;Services
        </a>
      </Header>

      {children}

      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  )
}
