import React from "react"
import Navigation from "../Navigation/Navigation"
import "../Header/Header.scss"

const Header = () => (
  <header className="header">
    <div className="header__logo">The Green Belt Movement</div>
    <Navigation />
    <a className="button-link">Donate Today</a>
  </header>
)

export default Header
