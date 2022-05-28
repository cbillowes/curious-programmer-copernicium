import React from "react"
import PropTypes from "prop-types"
import Anchor from "./Anchor"

const SocialMediaIcon = ({ children, to, title }) => {
  return (
    <Anchor
      to={to}
      title={title}
      className="text-xl md:text-4xl mx-4 my-6 bg-gray-100 rounded-full p-2 md:p-3 shadow-sm hover:bg-yellow-300"
    >
      {children}
    </Anchor>
  )
}

SocialMediaIcon.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.string,
}

export default SocialMediaIcon
