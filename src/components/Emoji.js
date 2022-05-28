import React from "react"
import PropTypes from "prop-types"
import emoji from "react-easy-emoji"

const Emoji = ({ label, className, children }) => {
  return (
    <span role="img" aria-label={label} className={className}>
      {emoji(children)}
    </span>
  )
}

Emoji.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Emoji
