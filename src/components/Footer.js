import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Icon from "./Icon"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialItems { 
            name
            link
           }
        }
      }
    }
  `)
  const footerNavItems = data.site.siteMetadata.socialItems;
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__navigation">
          {footerNavItems.map((item, index) => (
            <li key={index} className="footer__navigation__item">
              {item === "arrow-up" ? (
                <Link to={item.link} />
              ) : (
                  <a href={item.link}>
                    <Icon name={item.name} />
                  </a>
                )}
            </li>
          ))}
        </ul>
        <p className="footer__copyright">Copyright &copy; {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
