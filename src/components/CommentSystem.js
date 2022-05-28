import React from "react"
import PropTypes from "prop-types"
import { Disqus } from "gatsby-plugin-disqus"

const CommentSystem = ({ url, identifier, title }) => (
  <div className="max-w-3xl mt-16 mx-auto bg-comment p-8 rounded-xl shadow-xl">
    <Disqus
      config={{
        /* Article's canonical URL */
        url,
        /* Page's unique identifier variable */
        identifier,
        /* Title of the page */
        title,
      }}
    />
  </div>
)

CommentSystem.propTypes = {
  url: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default CommentSystem
