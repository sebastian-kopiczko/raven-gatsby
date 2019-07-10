import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const PageLink = props => {
  let pageLinkClassName = "pageLink"(
    props.color && (pageLinkClassName += `pageLink--${props.color}`)
  )
  return (
    <Link to={`#${props.linkTo}`} className={pageLinkClassName}>
      {props.text}
    </Link>
  )
}

PageLink.propTypes = {
  text: PropTypes.string.isRequired,
}

export default PageLink
