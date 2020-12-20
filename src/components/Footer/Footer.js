import React from "react";
import { Container /* Row */ } from "reactstrap";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com/viniciusconsultorjuridicodigital">
              Desburocratiza Consultoria Digital
            </a>
          </li>{" "}
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.facebook.com/viniciusconsultorjuridicodigital">
              Facebbok
            </a>
          </li>{" "}
        </ul>
        <div className="copyright">
          © {new Date().getFullYear()} made by{"   "}
          <a href="https://www.facebook.com/Luciano.S.Gularte/">
            LUCIANO GULARTE
          </a>{"   "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
