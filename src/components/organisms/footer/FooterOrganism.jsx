export default function FooterOrganism() {
  return (
    <footer>
      <div id="footer__links">
        <div className="links__cards">
          <h3>Contact Info</h3>
          <div className="contact__cards">
            <i className="fa-solid fa-location-dot"></i>
            <p>22 Innovation Street, CA, US</p>
          </div>
          <div className="contact__cards">
            <a href="mailto:office@syncmobile.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <p>office@syncmobile.com</p>
          </div>
          <div className="contact__cards">
            <i className="fa-solid fa-phone"></i>
            <p>+44 376 945 23</p>
          </div>
        </div>
        <div className="links__cards">
          <h3>Value Links</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Article Details</li>
          </ul>
        </div>
        <div className="links__cards">
          <h3>Other Apps</h3>
          <ul>
            <li>Scientific Calculator</li>
            <li>Advanced Timer</li>
            <li>Music Store</li>
          </ul>
        </div>
        <div id="links__socialmedia">
          <a href="https://www.facebook.com">
            <i className="fa-brands fa-facebook-f" alt="Facebook"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fa-brands fa-twitter" alt="Twitter"></i>
          </a>
          <a href="https://www.pinterest.es/">
            <i className="fa-brands fa-pinterest-p" alt="Pinterest"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fa-brands fa-instagram" alt="Instagram"></i>
          </a>
        </div>
      </div>
      <div id="footer__copyright">
        <p>Copyright © 2020 Inovatik - All rights reserved</p>
      </div>
    </footer>
  );
}
