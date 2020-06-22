import React from 'react'
import './style.css'

const ImageCard = ({ click, image, name }) => {
  return (
    <div
      className='card'
      onClick={click}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${image}`}
        alt={name}
      />
    </div>
  )
}

export default ImageCard