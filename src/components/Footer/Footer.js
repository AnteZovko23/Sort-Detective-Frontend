/*!

=========================================================
* Sort Detective
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim, Ante Zovko (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim, Ante Zovko

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink target="_blank" href="https://github.com/AnteZovko23">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://www.linkedin.com/in/antezovko/">LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://www.instagram.com/zovkoante23/?hl=en">Instagram</NavLink>
            </NavItem>
          </Nav>
          <div align="right" className="copyright">
          © 2020 Ante Zovko
            <br></br>Special Thanks: dr. David Levine and Christopher Previglian
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
