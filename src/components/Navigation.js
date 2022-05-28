import React, { useState } from "react"
import PropTypes from "prop-types"
import Hamburger from "./Hamburger"
import Anchor from "./Anchor"

const Logo = () => {
  return (
    <Anchor to="/" title="Home page">
      <div className="text-2xl -mt-1 font-alt-sans">
        <span className="mr-2">{`{`}</span>
        <span className="mr-2 font-light">curious</span>
        <span className="font-bold">programmer</span>
        <span className="ml-2">{`}`}</span>
      </div>
    </Anchor>
  )
}

const Navigation = ({ layout }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <div className="bg-color-2 text-color-2-script py-2 px-4">
      <div
        className={`flex justify-between items-center ${
          layout === "fluid" ? "" : "max-w-screen-md mx-auto w-full"
        }`}
      >
        <Logo />
        {/* <Hamburger isOpen={isMenuOpen} toggle={toggleMenu} /> */}
      </div>
    </div>
  )
}

Navigation.propTypes = {
  layout: PropTypes.string,
}

export default Navigation
