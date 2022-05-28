const { DEMO_PAGE } = require("./const")
const _ = require("lodash")
const path = require("path")
const images = require("./images")

const getSlug = ({ slug, title }) => {
  return slug || path.join(`/blog`, _.kebabCase(title), `/`)
}

const getComponent = (photo) => {
  return images.getComponentName(photo) || images.getRandomDefaultComponent()
}

const toTimestamp = (date) => {
  return new Date(date).getTime()
}

exports.applyNumbers = (nodes, createNodeField) => {
  const numberable = nodes.filter((node) => node.fields.slug !== DEMO_PAGE)
  const sorted = numberable.sort(
    (a, b) => toTimestamp(a.fields.date) - toTimestamp(b.fields.date),
  )
  sorted.forEach((node, index) => {
    const number = index + 1

    createNodeField({
      node,
      name: `number`,
      value: number,
    })
  })
}

exports.createFields = (node, createNodeField, reporter) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { date, photo } = node.frontmatter
    const slug = getSlug(node.frontmatter)
    const component = getComponent(photo)

    createNodeField({
      node,
      name: `number`,
      value: 0,
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `date`,
      value: date,
    })

    createNodeField({
      node,
      name: `component`,
      value: component,
    })

    reporter.verbose(`node [field]: ${slug}`)
  }
}
