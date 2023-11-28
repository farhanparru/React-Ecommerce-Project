import React from 'react';

const Footer = () => {
  return (
    <div>
  <footer className="text-center text-lg-start bg-dark text-white">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>World Food Animal functionalty</span>
          </div>
          <div>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Company name
                </h6>
                <p>
                On the geographical front, South India represents the leading market for animal feed, accounting for the largest market share. In recent years, the market has witnessed growth in Andhra Pradesh, Karnataka and Tamil Nadu,
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <p className="text-reset">SUGUNA FOODS</p>
                </p>
                <p>
                <p className="text-reset">AVANIT FEEDS</p>
                </p>
                <p>
                <p className="text-reset">CARGILL INDIA PVT.ltd</p>
                </p>
                <p>
                <p className="text-reset">GODREJ AGROVET</p>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"></h6>
                <p>
                  <a href="/" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="/" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="/" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="/" className="text-reset">Help</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i>
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i> info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> 
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i>
                </p>
              </div>
            </div>
          </div>
        </section>
 
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
          © 2023 
          <a className="text-reset fw-bold">
            
          </a>
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;
