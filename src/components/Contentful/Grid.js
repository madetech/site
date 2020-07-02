import React from 'react'
import GridComponentRenderer from './GridRenderer'

function GridContainer({
  alignItems,
  children,
  customClasses,
  id,
  entry_id,
  layout,
  style,
  linkTitle,
}) {
  let className = 'contentful-grid'
  if (style) className += ` ${style}`
  if (customClasses) {
    customClasses.forEach(c => (className += ` ${c}`))
  }

  let rowClassName = 'row'
  if (alignItems) rowClassName += ` align-items-${alignItems}`

  let containerClassName = 'container'
  if (layout === 'fluid') containerClassName += '-fluid'

  return (
    <div className={className} id={id} linkTitle={linkTitle}>
      <a id={entry_id} href={`#${entry_id}`} style={{ opacity: 0 }}>
        {' '}
      </a>
      <div className={containerClassName}>
        <div className={rowClassName}>{children}</div>
      </div>
    </div>
  )
}

function GridCol({
  children,
  extraLargeColumnWidth,
  extraLargeColumnOffset,
  largeColumnWidth,
  largeColumnOffset,
  mediumColumnWidth,
  mediumColumnOffset,
  smallColumnWidth,
  smallColumnOffset,
  extraSmallColumnWidth,
  extraSmallColumnOffset,
}) {
  let colClasses = 'my-2'

  if (extraLargeColumnWidth !== null && extraLargeColumnWidth !== undefined) {
    colClasses += ` col-xl-${extraLargeColumnWidth}`
  }

  if (extraLargeColumnOffset !== null && extraLargeColumnOffset !== undefined) {
    colClasses += ` offset-xl-${extraLargeColumnOffset}`
  }

  if (largeColumnWidth !== null && largeColumnWidth !== undefined) {
    colClasses += ` col-lg-${largeColumnWidth}`
  }

  if (largeColumnOffset !== null && largeColumnOffset !== undefined) {
    colClasses += ` offset-lg-${largeColumnOffset}`
  }

  if (mediumColumnWidth !== null && mediumColumnWidth !== undefined) {
    colClasses += ` col-md-${mediumColumnWidth}`
  }

  if (mediumColumnOffset !== null && mediumColumnOffset !== undefined) {
    colClasses += ` offset-md-${mediumColumnOffset}`
  }

  if (smallColumnWidth !== null && smallColumnWidth !== undefined) {
    colClasses += ` col-sm-${smallColumnWidth}`
  }

  if (smallColumnOffset !== null && smallColumnOffset !== undefined) {
    colClasses += ` offset-sm-${smallColumnOffset}`
  }

  if (extraSmallColumnWidth !== null && extraSmallColumnWidth !== undefined) {
    colClasses += ` col-${extraSmallColumnWidth}`
  }

  if (extraSmallColumnOffset !== null && extraSmallColumnOffset !== undefined) {
    colClasses += ` offset-${extraSmallColumnOffset}`
  }

  return <div className={colClasses}>{children}</div>
}

function GridComponentArrayRenderer({
  alignItems,
  customClasses,
  content,
  id,
  entry_id,
  name,
  layout,
  style,
  linkTitle,
}) {
  if (!content || content.length === 0) {
    throw new Error('No grid content provided')
  }
  const groupedContent = content.reduce((grouped, c, i) => {
    let key = `columnGroup-${i}`
    if (c.columnGroup) {
      key = c.columnGroup
    }
    if (!grouped[key]) {
      grouped[key] = []
    }
    grouped[key].push(c)
    return grouped
  }, {})
  return (
    <GridContainer
      alignItems={alignItems}
      customClasses={customClasses}
      id={id}
      entry_id={entry_id}
      name={name}
      layout={layout}
      style={style}
      linkTitle={linkTitle}
    >
      {Object.values(groupedContent).map((group, i) => {
        return (
          <GridCol
            extraLargeColumnWidth={group[0].extraLargeColumnWidth}
            extraLargeColumnOffset={group[0].extraLargeColumnOffset}
            extraSmallColumnWidth={group[0].extraSmallColumnWidth}
            extraSmallColumnOffset={group[0].extraSmallColumnOffset}
            largeColumnWidth={group[0].columnWidth}
            largeColumnOffset={group[0].columnOffset}
            mediumColumnWidth={group[0].mediumColumnWidth}
            mediumColumnOffset={group[0].mediumColumnOffset}
            smallColumnWidth={group[0].smallColumnWidth}
            smallColumnOffset={group[0].smallColumnOffset}
            key={i}
          >
            {group.map((content, indexKey) => (
              <GridComponentRenderer key={indexKey} {...content} />
            ))}
          </GridCol>
        )
      })}
    </GridContainer>
  )
}

export default class Grid extends React.Component {
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

  render() {
    if (this.state.hasRenderContentError) {
      return <div>Grid Render Content Error</div>
    }

    return <GridComponentArrayRenderer {...this.props} />
  }
}
