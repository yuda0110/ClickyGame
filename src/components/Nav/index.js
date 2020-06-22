import React from 'react'
import './style.css'

const Nav = ({ correct, message, score, topScore }) => {
  let messageClasses
  if (correct === false) {
    messageClasses = 'message incorrect'
  } else if (correct === true) {
    messageClasses = 'message correct'
  } else {
    messageClasses = 'message'
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="site-name">Clicky Game</div>
        <p className={messageClasses}>{message}</p>
        <div className="score-container">
          <dl className="score">
            <dt>Score</dt>
            <dd>{score}</dd>
          </dl>
          <dl className="score">
            <dt>Top Score</dt>
            <dd>{topScore}</dd>
          </dl>
        </div>
      </div>
    </nav>
  )
}

export default Nav