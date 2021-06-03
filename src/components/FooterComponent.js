import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      <footer id="footer" className="site-footer dark">
        <div id="copyrights" className="bg-transparent pb-4">
          <div className="container clearfix">
            <div className="row justify-content-between col-mb-30">
              <div className="col col-md-auto text-center text-md-left">
                <h5>
                  &copy; Mimi B Vegan Sweets LLC 2021. All Rights Reserved.
                </h5>
              </div>

              <div className="col col-md-auto text-center text-md-right">
                <div>
                  <h5>Links</h5>
                  <ul>
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
              <div class="col-lg-3 col-md-6 bottommargin-sm center">
                <i class="i-plain i-xlarge mx-auto mb-0 icon-et-heart"></i>
                <h3 class="text-uppercase font-body">Social</h3>
                <div>
                  <a
                    href="https://facebook.com/mimibvegansweets"
                    className="btn btn-social-icon btn-facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>{' '}
                  <a
                    href="http://instagram.com/mimibvegansweets"
                    class="btn btn-social-icon btn-instagram"
                  >
                    <i class="fa fa-instagram"></i>
                    <i class="icon-instagram"></i>
                  </a>{' '}
                  <a
                    href="mailto:mimibvegansweets@gmail.com"
                    class="social-icon si-borderless si-email3"
                  >
                    <i class="icon-line2-envelope"></i>
                    <i class="icon-line2-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
