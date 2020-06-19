import React from 'react'
import './style.css'

const Nav = props => {
  return (
    <nav>
      <div className="nav-container">
        <div className="site-name">Clicky Game</div>
        <div className="score-container">
          <dl className="score">
            <dt>Score</dt>
            <dd>{props.score}</dd>
          </dl>
          <dl className="score">
            <dt>Top Score</dt>
            <dd>{props.topScore}</dd>
          </dl>
        </div>
      </div>
    </nav>
  )
}

export default Nav