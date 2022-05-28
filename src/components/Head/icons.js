import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Icons = ({ themeColor }) => (
  <Helmet>
    <meta content={themeColor} name="theme-color" />
    <meta content={themeColor} name="msapplication-TileColor" />
  </Helmet>
)

Icons.defaultProps = {
  themeColor: "transparent",
}

Icons.propTypes = {
  themeColor: PropTypes.string,
}

export default Icons
