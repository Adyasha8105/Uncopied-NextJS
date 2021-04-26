import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button} from 'react-bootstrap';
import styles from './Layout.module.css';
import useTranslation from "next-translate/useTranslation";
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Footer(){
  const {t} = useTranslation()
  const router = useRouter()

  return (
    <footer className={styles.footersection}>
    <div className={`${styles.navspacing} container-fluid`}>
      <div className={`${styles.footercontent} pt-5 pb-5`}>
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className={`${styles.footerwidget} pb-5`}>
              <div className={styles.footerlogo}>
                <a href="/"><Image src="/logo.png" height={40} width={160} className="img-fluid" alt="logo"/></a>
              </div>
              <div className={styles.footertext}>
              <p>{t('common:footer.heading1')}</p>
              </div>

              <div className={styles.Lang}>
                  {router.locales.map(locale => (
                   <li key={locale}>
                    <Link href= {router.asPath} locale={locale}><Button>{locale}</Button></Link>
                   </li>
                  ))}
              </div>

            </div>
          </div>         
          <div className="col-xl-5 col-lg-4 col-md-6 mb-30">
            <div className={styles.footerwidget}>
              <div className={styles.footerwidgetheading}>
                <h3>{t('common:footer.heading2')}</h3>
              </div>
              <ul>
                <li><a href="/">{t('common:footer.heading2-link1')}</a></li>
                <li><a href="https://uncopied.art/blog/">{t('common:footer.heading2-link2')}</a></li>
                <li><a href="https://uncopied.art/about/">{t('common:footer.heading2-link3')}</a></li>
                <li><a href="https://uncopied.art/about/">{t('common:footer.heading2-link4')}</a></li>
                <li><a href="https://opencollective.com/uncopied">{t('common:footer.heading2-link5')}</a></li>
                <li><a href="https://uncopied.art/contact/">{t('common:footer.heading2-link6')}</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
          <div className={styles.footerwidget}>
          <div className={styles.footersocialicon}>
            <span>{t('common:footer.heading3')}</span>
            <a href="https://twitter.com/uncopied_art"><i className={styles.twitterbg}><FontAwesomeIcon icon={faTwitter} /></i></a>
            <a href="https://www.facebook.com/uncopied"><i className={styles.facebookbg}><FontAwesomeIcon icon={faFacebook} /></i></a>
            <a href="https://www.instagram.com/uncopied_art"><i className={styles.instagrambg}><FontAwesomeIcon icon={faInstagram} /></i></a>
            <a className="last" href="http://github.com/uncopied"><i className={styles.githubbg}><FontAwesomeIcon icon={faGithub} /></i></a>
          </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    <div className={styles.copyrightarea}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 text-center">
            <div className={styles.copyrighttext}>
              <p>
                {t('common:footer.copyright')} <a href="/">Uncopied</a> <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}