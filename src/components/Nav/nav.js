import React from "react"
import { Link } from "gatsby"
import navStyles from "./navStyles.module.css"

const Nav = () => (
    <div>
        <Link to="/" className={navStyles.link} activeClassName={navStyles.active__link}>Home</Link>
        <Link to="/page-2" className={navStyles.link} activeClassName={navStyles.active__link}>Page-2</Link>
        <Link to="/page-3" className={navStyles.link} activeClassName={navStyles.active__link}>Page With Cow!</Link>
        <Link to="/page-4" className={navStyles.link} activeClassName={navStyles.active__link}>Slider!</Link>
    </div>
)

export default Nav