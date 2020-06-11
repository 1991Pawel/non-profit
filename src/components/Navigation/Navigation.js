import React from "react"
import "../Navigation/Navigation.scss"
import { Link } from "gatsby"

const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li>
        <Link className="nav__link" to="/">
          About us
        </Link>
      </li>
      <li>
        <Link className="nav__link" to="/">
          Our stories
        </Link>
      </li>
      <li>
        <Link className="nav__link" to="/">
          News and events
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
