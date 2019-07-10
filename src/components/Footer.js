import React from "react"
import PropTypes from "prop-types"

const Footer = props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <p className="footer__copyright">{props.copyright}</p>
          {/* TODO MAP THROUGH SOCIAL ITEMS */}
          {/* <ul className="footer__navigation">
              {data.site.siteMetadata.socialNav.map((li, index) => {
                return (
                  <li
                    key={index}
                    className={`footer__navigation__item icon--${li.icon}`}
                  >
                    &nbsp;
                    <Link to={li.url} className="footer__navigation__link" />
                  </li>
                )
              })}
            </ul> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
