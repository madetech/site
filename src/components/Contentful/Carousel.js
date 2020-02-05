import React, { Component } from 'react'
import Slider from 'react-slick'

export default class ContentfulCarousel extends Component {
  render() {
    let dots = true
    let slidesToShow = this.props.slidesToShow || 1

    if (this.props.dots && this.props.dots === 'no dots') {
      dots = false
    }

    const imageComponents = this.props.images.map((image, i) => {
      return (
        <div>
          <img
            src={image.fixed.src}
            style={{ '--slides': `${slidesToShow}` }}
          />
        </div>
      )
    })

    var settings = {
      dots: dots,
      slidesToShow: slidesToShow,
    }

    return (
      <div className="contentful-carousel">
        <div className="container">
          <Slider {...settings}>{imageComponents}</Slider>
        </div>
      </div>
    )
  }
}
