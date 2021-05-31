import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer
      id="footer"
      className="site-footer dark"
    >
      <div id="copyrights" className="bg-transparent pb-4">
        <div className="container clearfix">
          <div className="row justify-content-between col-mb-30">
            <div className="col-12 col-md-auto text-center text-md-left">
              <span className="font-primary">
                &copy; Mimi B Vegan Sweets LLC 2021. All Rights Reserved.
              </span>
            </div>

            <div className="col-12 col-md-auto text-center text-md-right">
              <div className="copyrights-menu copyright-links clearfix">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/menu">Menu</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About</Link>
                  </li>
                  <li>
                    <Link to="/contactus">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
