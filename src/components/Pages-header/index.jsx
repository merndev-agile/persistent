/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PagesHeader = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
              <h3 className="color-font fw-700">
              Shaping a successful future takes strong leadership and specialist skills. Our team of independent, professional consultants are hand-picked for seamless collaboration and cultural fit within your organisation. And boasting an operating model with a proven track record, we’ll not only define your company’s needs, but help shape its success.
              </h3>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="img">
              <img src="\img\About.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;