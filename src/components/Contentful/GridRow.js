import React from 'react'
import GridColumn from './GridColumn'

export default class GridRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasRenderContentError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasRenderContentError: true }
  }

  componentDidCatch(error, info) {
    console.error(error)
  }

  buildClasses(style, customClasses) {
    let className = 'contentful-gridrow'
    if (style) className += ` ${style}`

    if (customClasses) {
      customClasses.forEach(c => (className += ` ${c}`))
    }

    return className
  }

  render() {
    if (this.state.hasRenderContentError) {
      return <div>Grid row render content error</div>
    }

    if (!this.props.content || this.props.content.length === 0) {
      throw new Error('No grid row content provided')
    }

    let className = this.buildClasses(
      this.props.style,
      this.props.customClasses
    )

    let rowClassName = 'row'
    if (this.props.alignItems)
      rowClassName += ` align-items-${this.props.alignItems}`

    let containerClassName = 'container'
    if (this.props.layout === 'fluid') containerClassName += '-fluid'

    var columns = this.props.content.map((c, indexKey) => {
      return <GridColumn key={c.id} {...c} />
    })

    return (
      <div
        className={className}
        id={this.props.id}
        linkTitle={this.props.linkTitle}
      >
        <a
          id={this.props.entry_id}
          href={`#${this.props.entry_id}`}
          style={{ opacity: 0 }}
        >
          {' '}
        </a>
        <div className={containerClassName}>
          <div className={rowClassName}>{columns}</div>
        </div>
      </div>
    )
  }
}
