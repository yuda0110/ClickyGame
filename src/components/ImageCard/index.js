import React from 'react'
import './style.css'

const ImageCard = props => {
  return (
    <div
      className='card'
      onClick={() => props.click(props.id)}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`}
        alt={props.name}
      />
    </div>
  )
}

export default ImageCard