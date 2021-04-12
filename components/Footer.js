import React from 'react';
import "./Footer.module.css"
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../public/logo.png';
export function Footer()
{
  const { t } = useTranslation();
  return (
    <footer className="footer-section">
    <div className="container-fluid nav-spacing" >
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="/"><img src={logo} className="img-fluid" alt="logo"/></a>
              </div>
              <div className="footer-text">
              <p>{t('footer.heading1')}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>{t('footer.heading2')}</h3>
              </div>
              <ul>
                <li><a href="/">{t('footer.heading2-link1')}</a></li>
                <li><a href="https://uncopied.art/blog/">{t('footer.heading2-link2')}</a></li>
                <li><a href="https://uncopied.art/about/">{t('footer.heading2-link3')}</a></li>
                <li><a href="https://uncopied.art/about/">{t('footer.heading2-link4')}</a></li>
                <li><a href="https://opencollective.com/uncopied">{t('footer.heading2-link5')}</a></li>
                <li><a href="https://uncopied.art/contact/">{t('footer.heading2-link6')}</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
          <div className="footer-social-icon">
            <span>{t('footer.heading3')}</span>
            <a href="https://twitter.com/uncopied_art"><i className="twitter-bg"><FontAwesomeIcon icon={faTwitter} /></i></a>
            <a href="https://www.facebook.com/uncopied"><i className="facebook-bg"><FontAwesomeIcon icon={faFacebook} /></i></a>
            <a href="https://www.instagram.com/uncopied_art"><i className="instagram-bg"><FontAwesomeIcon icon={faInstagram} /></i></a>
            <a className="last" href="http://github.com/uncopied"><i className="github-bg"><FontAwesomeIcon icon={faGithub} /></i></a>
          </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 text-center">
            <div className="copyright-text">
              <p>
                {t('footer.copyright')} <a href="/">Uncopied</a> <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}