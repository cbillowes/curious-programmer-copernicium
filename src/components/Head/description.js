import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Description = ({ keywords, description, author }) => (
  <Helmet>
    <meta content={author} name="author" />
    <meta content={keywords} name="keywords" />
    <meta content={description} name="description" />
    <meta content={description} property="og:description" />
    <meta content={description} name="twitter:description" />
  </Helmet>
)

Description.defaultProps = {
  author: "",
  description: "",
  keywords: "",
}

Description.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
}

export default Description
