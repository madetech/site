import React from 'react'
import { withPrefix } from 'gatsby'
import '../../all.scss'
import Meta from '../Meta'
import { Footer, Header, TopBar } from '@madetech/frontend'

export default function Layout ({ data, children }) {
  return (
    <div>
      <Meta />

      <TopBar>
        <a href='https://www.madetech.com'>Who are Made Tech?</a>
        <a href={withPrefix('/')}>Blog</a>
        <a href='https://learn.madetech.com'>Learn</a>
        <a href='https://www.madetech.com/careers'>Careers</a>
      </TopBar>

      <Header logoHref={withPrefix('/')}>
        <a href='https://www.madetech.com/agile-transformation' className='nav-link'>
          Agile Team Transformation
        </a>

        <a href='https://www.madetech.com/software-development' className='nav-link'>
          Software Development
        </a>

        <a href='https://www.madetech.com/continuous-delivery' className='nav-link'>
          Continuous Delivery
        </a>

        <a href='https://www.madetech.com/devops' className='nav-link'>
          DevOps &amp; <br className='d-none d-lg-block' />Live Services
        </a>
      </Header>

      {children}

      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  )
}
