import React, { Fragment } from 'react'
import GridComponentRenderer from './GridRenderer'

export default class GridColumn extends React.Component {
  render() {
    let colClasses = ''

    if (this.props.style) colClasses += ` ${this.props.style}`

    if (this.props.customClasses) {
      this.props.customClasses.forEach(c => (colClasses += ` ${c}`))
    }

    if (this.props.extraLargeColumnWidth) {
      colClasses += ` col-xl-${this.props.extraLargeColumnWidth}`
    }

    if (this.props.extraLargeColumnOffset) {
      colClasses += ` offset-xl-${this.props.extraLargeColumnOffset}`
    }

    if (this.props.columnWidth) {
      colClasses += ` col-lg-${this.props.columnWidth}`
    }

    if (this.props.columnOffset) {
      colClasses += ` offset-lg-${this.props.columnOffset}`
    }

    if (this.props.mediumColumnWidth) {
      colClasses += ` col-md-${this.props.mediumColumnWidth}`
    }

    if (this.props.mediumColumnOffset) {
      colClasses += ` offset-md-${this.props.mediumColumnOffset}`
    }

    if (this.props.smallColumnWidth) {
      colClasses += ` col-sm-${this.props.smallColumnWidth}`
    }

    if (this.props.smallColumnOffset) {
      colClasses += ` offset-sm-${this.props.smallColumnOffset}`
    }

    if (this.props.extraSmallColumnWidth) {
      colClasses += ` col-${this.props.extraSmallColumnWidth}`
    }

    if (this.props.extraSmallColumnOffset) {
      colClasses += ` offset-${this.props.extraSmallColumnOffset}`
    }

    let pageBreadcrumbComponent
    if (this.props.pageBreadcrumb && this.props.pageBreadcrumb.links) {
      pageBreadcrumbComponent = this.renderBreadcrumb(
        this.props.pageBreadcrumb.links
      )
    }

    var columnContent = this.props.content.map(content => {
      return <GridComponentRenderer proseStyle={true} key={content.id} {...content} />
    })

    return (
      <div className={colClasses}>
        {pageBreadcrumbComponent}
        {columnContent}
      </div>
    )
  }

  renderBreadcrumb(links) {
    const finalLink = links.length - 1

    return (
      <div className="contentful-gridcolumn__breadcrumb">
        {links.map((link, index) => {
          return (
            <Fragment key={index}>
              <a href={link.url}>{link.title}</a>
              {index < finalLink && ' / '}
            </Fragment>
          )
        })}
      </div>
    )
  }
}
