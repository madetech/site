import React, { Component } from 'react'
import Slider from 'react-slick'

export default class ContentfulCarousel extends Component {
  render() {
    const imageComponents = this.props.images.map((image, i) => {
      return (
        <div>
          <img src={image.fixed.src} />
        </div>
      )
    })

    var settings = {
      dots: true,
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
