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
            <dd>0</dd>
          </dl>
          <dl className="score">
            <dt>Top Score</dt>
            <dd>0</dd>
          </dl>
        </div>
      </div>
    </nav>
  )
}

export default Nav