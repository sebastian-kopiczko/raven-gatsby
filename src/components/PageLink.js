import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const PageLink = ({ customClassName, to, text, color }) => {
  let pageLinkClassName = "page-link"
  color && (pageLinkClassName += ` page-link--${color}`)
  customClassName && (pageLinkClassName += ` ${customClassName}`)
  return (
    <Link to={`${to}`} className={`${pageLinkClassName}`}>
      {text}
    </Link>
  )
}

PageLink.propTypes = {
  text: PropTypes.string.isRequired,
}

export default PageLink
