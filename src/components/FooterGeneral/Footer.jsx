import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__general">
          <div className="footer__icon">
            <div className="icon__background">
              <i style={{fontSize:"23px"}} className="fa-brands fa-twitter"></i>
            </div>
            <div className="icon__background">
              <i style={{fontSize:"23px"}} className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="icon__background">
              <i style={{fontSize:"23px"}} className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="footer__text">
            <p className="footer__text__bottom">Copyright © Your Website 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
