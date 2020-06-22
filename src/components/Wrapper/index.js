import React from 'react'
import './style.css'

const Wrapper = props => {
  return <div
      className={!props.correct ? 'wrapper shake' : 'wrapper'}
    >
      {props.children}
    </div>
}

export default Wrapper