import React from "react"
import { Link } from "gatsby"
import Icon from "./Icon"

const Footer = props => {
  const footerNavItems = [
    { name: "facebook", link: "https://facebook.com/" },
    { name: "twitter", link: "https://twitter.com/" },
    { name: "google", link: "https://google.com/" },
    { name: "youtube", link: "https://youtube.com/" },
    { name: "arrow-up", link: "#home" },
  ]
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
