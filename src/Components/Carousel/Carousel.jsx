import React from 'react'
import Slider from 'react-slick'
import style from './Carousel.module.css'

export default function Autoplay () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <Slider {...settings} className={style.content}>
    <div className={style.content}>
      <h3>1</h3>
    </div>
    <div className={style.content}>
      <h3>2</h3>
    </div>
    <div className={style.content}>
      <h3>3</h3>
    </div>
    <div className={style.content}>
      <h3>4</h3>
    </div>
    <div className={style.content}>
      <h3>5</h3>
    </div>
    <div className={style.content}>
      <h3>6</h3>
    </div>
  </Slider>
  )
}
