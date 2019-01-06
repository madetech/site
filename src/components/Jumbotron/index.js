import React from 'react'

export default function Jumbotron ({ extraClassName, children }) {
  let className = 'jumbotron jumbotron-fluid'

  if (extraClassName) className += ` ${extraClassName}`

  return (
    <div className={className}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
