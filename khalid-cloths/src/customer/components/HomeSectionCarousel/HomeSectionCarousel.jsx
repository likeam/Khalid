import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const HomeSectionCarousel = () => {
  return (
    <div>
        <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        controlsStrategy="alternate"
    />
    </div>
  )
}

export default HomeSectionCarousel