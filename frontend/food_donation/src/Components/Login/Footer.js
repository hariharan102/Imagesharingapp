import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          
          <a href="https://twitter.com/Adaikkappa1738" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/xharx_/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
         
          <a href="https://github.com/hariharan102" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>COPR
              </h6>
              <p>
               
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
              <Link to="/about" style={{ textDecoration: 'none' }}>
  <a className="text-reset" style={{ textDecoration: 'none' }}>About Us</a>
</Link>

              </p>
              <p>
                <Link to="/contact"style={{ textDecoration: 'none' }}>

                <a href="#!" className="text-reset"style={{ textDecoration: 'none' }}>Contact Us</a>
                </Link>
              </p>
              <p>
                <Link to="/faq"style={{ textDecoration: 'none' }}>

                <a  className="text-reset"style={{ textDecoration: 'none' }}>FAQ</a>
                </Link>
              </p>
              <p>
                <Link to="/privacy"style={{ textDecoration: 'none' }}>

                <a href="#!" className="text-reset"style={{ textDecoration: 'none' }}>Privacy Policy</a>
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> RAJASTHAN POLICE,JAIPUR</p>
              <p>
                <i className="fas fa-envelope me-3"></i>rajpolicefeedback@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i>+91 1412744435 </p>
              <p><i className="fas fa-print me-3"></i>+91 1412602949 </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:COPR
        </div>
        
    </footer>
  );
}

export default Footer;