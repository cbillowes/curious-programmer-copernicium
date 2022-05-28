import React from "react"
import PropTypes from "prop-types"
import Preview from "./Preview"

const List = ({ edges }) => {
  if (edges && edges.length > 0) {
    return edges.map(({ node }, index) => {
      return (
        <Preview
          {...node.fields}
          {...node.frontmatter}
          key={index}
          index={index}
          timeToRead={node.timeToRead}
          excerpt={node.excerpt}
        />
      )
    })
  }
}

Preview.propTypes = {
  edges: PropTypes.shape({
    timeToRead: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tags: PropTypes.array,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      component: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      credit: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
    }),
  }),
}

export default List
