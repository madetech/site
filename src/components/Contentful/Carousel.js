import React, { Component } from 'react'
import { Prose } from '@madetech/frontend'
import Slider from 'react-slick'
import documentToHtmlString from '../../helpers/documentToHtmlString'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'

export default class ContentfulCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      changeNumOfItems: false,
    }
  }

  handleResize = () => {
    if (window && window.innerWidth <= 991) {
      this.setState({ changeNumOfItems: true })
    } else if (window && window.innerWidth > 991) {
      this.setState({ changeNumOfItems: false })
    }
  }

  componentDidMount() {
    window && window.addEventListener('resize', this.handleResize)
  }

  componentDidUnMount() {
    window && window.removeEventListener('resize', this.handleResize)
  }

  render() {
    let dots = true
    let slidesToShow = this.props.slidesToShow || 1
    let className = 'contentful-carousel'
    let imageComponents
    let proseComponents

    if (this.props.dots && this.props.dots === 'no dots') {
      dots = false
    }

    // Below desktop sizes, carousel with prose looks better with 1 item per slide
    if (
      (this.state.changeNumOfItems && this.props.content) ||
      (window && window.innerWidth <= 991)
    ) {
      slidesToShow = 1
    }

    if (this.props.style) {
      className += ` ${this.props.style}`
    }

    if (this.props.images) {
      imageComponents = this.props.images.map((image, i) => {
        return (
          <div>
            <img
              src={image.fixed.src}
              style={{ '--slides': `${slidesToShow}` }}
            />
          </div>
        )
      })
    }

    function CarouselProse({
      customClasses,
      image,
      imageUrl,
      imageStyle,
      html,
      screenReaderText,
      style,
      textAlign,
      overlay,
    }) {
      let className = 'contentful-prose'
      if (textAlign) className += ` text-${textAlign}`
      if (style) className += ` ${style}`
      if (overlay) className += ` ${overlay}`
      if (customClasses) {
        customClasses.forEach(c => (className += ` ${c}`))
      }

      if (screenReaderText) {
        className += ' screen-reader'
      }

      let imageComponent
      if (image && image.fixed) {
        let imageClassName = imageStyle || ''

        // gatsbys fixed image width is giving us image quality problems.
        // removing the specified width sorts this out
        // need to investigate further...
        let imageSrc = image.fixed.src.split('?')[0]

        imageComponent = (
          <img alt={image.title} className={imageClassName} src={imageSrc} />
        )
      }

      if (imageUrl) {
        imageComponent = (
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            {imageComponent}
          </a>
        )
      }

      let parsedHtml = threeSpaceToLineBreak(html, true)
      parsedHtml = threeHyphenToSoftHyphen(parsedHtml, true)

      let proseComponent
      if (html) {
        proseComponent = (
          <Prose>
            <div dangerouslySetInnerHTML={{ __html: parsedHtml }} />
          </Prose>
        )
      }

      let carouselProseComponent
      if (imageStyle === 'after') {
        carouselProseComponent = (
          <div className={className}>
            {proseComponent}
            {imageComponent}
          </div>
        )
      } else {
        carouselProseComponent = (
          <div className={className}>
            {imageComponent}
            {proseComponent}
          </div>
        )
      }

      return carouselProseComponent
    }

    function CarouselProseRenderer(content) {
      return (
        <CarouselProse
          columnGroup={content.columnGroup}
          customClasses={content.customClasses}
          image={content.image}
          imageUrl={content.imageUrl}
          imageStyle={content.imageStyle}
          html={documentToHtmlString(content.body && content.body.json)}
          screenReaderText={content.screenReaderText}
          style={content.style}
          textAlign={content.textAlign}
          overlay={content.overlay}
        />
      )
    }

    if (this.props.content) {
      proseComponents = this.props.content.map((proseComponent, i) => {
        let carouselProseComponent = CarouselProseRenderer(proseComponent)
        return <div>{carouselProseComponent}</div>
      })
    }

    var settings = {
      dots: dots,
      slidesToShow: slidesToShow,
    }

    return (
      <div className={className}>
        <div className="container">
          <Slider {...settings}>
            {imageComponents}
            {proseComponents}
          </Slider>
        </div>
      </div>
    )
  }
}
