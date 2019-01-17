import React from 'react'
import withPrefix from '../../helpers/withPrefix'
import '../../all.scss'
import Meta from './Meta'
import Scripts from './Scripts'
import { Footer, Header, TopBar } from '@madetech/frontend'

export default function Layout ({ children, data, description, titlePrefix }) {
  return (
    <div>
      <Meta description={description} titlePrefix={titlePrefix} />
      <Scripts />

      <TopBar>
        <a href='https://learn.madetech.com'>Learn</a>
        <a href={withPrefix('/blog')}>Blog</a>
        <a href='/careers'>Careers</a>
        <a href='/contact'>Contact</a>
      </TopBar>

      <Header constrainLinkWidth logoHref='/' scrollable>
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
          DevOps
        </a>

        <a href='/support-and-maintainance' className='nav-link'>
          Reliability Engineering
        </a>
      </Header>

      {children}

      <Footer />
    </div>
  )
}
