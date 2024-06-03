/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">

        <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>About Us</h5>
              </div>
              <p className="text-white">
                Headquartered in New Jersey, United States. Prominence
                Consultant has been providing Enterprise and E-Business
                consulting and services leveraging a strong foundation and
                ongoing relationship with Fortune 500 clients. Prominence
                Consultant is a business and technology consulting firm
                specializing in design, development, and delivery of end-to-end
                ERP solutions for Enterprise Systems, Internet Applications,
                CLOUD and Infrastructure, Web Services and Data Warehousing/
                Business Intelligence, Bigdata– from concept to completion.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <h2 className="h4 text-white mb-4">What we do?</h2>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <i className="text-white material-icons mr-2">&#10004;</i>
                <span className="ms-2">Strategic and market planning</span>
              </li>
              <li className="d-flex align-items-center mb-2">
              <i className="text-white material-icons mr-2">&#10004;</i>
                <span className="ms-2">
                  Competitive intelligence and benchmarking
                </span>
              </li>
              <li className="d-flex align-items-center mb-2">
              <i className="text-white material-icons mr-2">&#10004;</i>
                <span className="ms-2">In-depth analysis of competitors</span>
              </li>
              <li className="d-flex align-items-center mb-2">
              <i className="text-white material-icons mr-2">&#10004;</i>
                <span className="ms-2">
                  Development of competitive strategies
                </span>
              </li>
              <li className="d-flex align-items-center mb-2">
              <i className="text-white material-icons mr-2">&#10004;</i>
                <span className="ms-1">
                  Continuous monitoring of competitors
                </span>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <h5>Have any questions?</h5>
              </div>
              <p className="text-white">
                You can connect with us on the social networks mentioned below:
              </p>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              {/* <div className="copy-right">
                <p>
                  © 2022, Vie Template. Made with passion by
                  <Link href="https://themeforest.net/user/themescamp/portfolio">
                    <a target="_blank">ThemesCamp</a>
                  </Link>
                  .
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
