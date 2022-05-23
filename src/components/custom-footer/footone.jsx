/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const CusFootOne = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://www.facebook.com/maniac1shot">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/maniac1shot">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/maniac1shot/">
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CusFootOne;
