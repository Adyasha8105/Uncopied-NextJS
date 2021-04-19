import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faHandsHelping, faCertificate, faUserPlus, faImage, faFileCode, faGem, faFileSignature } from '@fortawesome/free-solid-svg-icons';

export default function Homepage() {
  const {t} = useTranslation()
  return (
    <div className="mainhomepage">
    <section className="spacing">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 col-md-12 px-5">
                    <div className="business-item-info">
                      <h3>{t('common:section1.heading')}</h3>
                      <p>{t('common:section1.heading-para')} <b>{t('common:section1.heading-para1')}</b> </p>    
                      <a className="btn btn-common btn1" href="https://uncopied.art/">{t('common:section1.heading-button')}</a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 pt-70">
                    <div className="business-item-img">
                      <Image src="/Intro.svg" width={1000} height={680} className="img-fluid home-img" alt="Intro"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>

<div className="spacing box1">
<div className="cards">
  <div className="card-item">
  <div className="icon">
    <i><FontAwesomeIcon icon={faPenSquare} /></i>
    </div>
    <div className="card-info">
      <h2 className="card-title">{t('common:services.card1')}</h2>
      <p className="card-intro">{t('common:services.card1-para')}</p>
    </div>
  </div>
</div>
<div className="cards">
  <div className="card-item">
  <div className="icon">
    <i><FontAwesomeIcon icon={faHandsHelping} /></i>
    </div>
    <div className="card-info">
      <h2 className="card-title">{t('common:services.card2')}</h2>
      <p className="card-intro">{t('common:services.card2-para')}</p>
    </div>
  </div>
</div>
<div className="cards">
  <div className="card-item">
  <div className="icon">
    <i><FontAwesomeIcon icon={faCertificate} /></i>    
    </div>
    <div className="card-info">
      <h2 className="card-title">{t('common:services.card3')}</h2>
      <p className="card-intro">{t('common:services.card3-para')}</p>
    </div>
  </div>
</div>
</div>

      <div className="section2 container-fluid spacing">
          <h1>{t('common:works.heading')}</h1>
      <div className="card-container">
        <div className="card">
        <div className="content text-center">
          <i className="icon mb-5"><FontAwesomeIcon icon={faUserPlus} /></i>
          <h6><b>{t('common:works.sec1')}</b></h6>
          <p>{t('common:works.sec1-para')}</p>
        </div>
        </div>
        <div className="card">
        <div className="content text-center">
        <i className="icon mb-5"><FontAwesomeIcon icon={faImage} /></i>
          <h6><b>{t('common:works.sec2')}</b></h6>
          <p>{t('common:works.sec2-para')}</p>
          </div>
        </div>
        <div className="card">
        <div className="content text-center">
        <i className="icon mb-5"><FontAwesomeIcon icon={faFileCode } /></i>
          <h6><b>{t('common:works.sec5')}</b></h6>
          <p>{t('common:works.sec5-para')}</p>
        </div>
        </div>
        <div className="card">
        <div className="content text-center">
        <i className="icon mb-5"><FontAwesomeIcon icon={faGem} /></i>
          <h6><b>{t('common:works.sec3')}</b></h6>
          <p>{t('common:works.sec3-para')}</p>
        </div>
        </div>
        <div className="card">
        <div className="content text-center">
        <i className="icon mb-5"><FontAwesomeIcon icon={faFileSignature} /></i>
          <h6><b>{t('common:works.sec4')}</b></h6>
          <p>{t('common:works.sec4-para')}</p>
        </div>
        </div>
        </div>
      </div>

  <section className="section3 spacing">
  <div className="container-fluid">

    <div className="row">
      <div className="col-lg-6 col-md-12 px-5">
        <div className="business-item-info">
          <h3>{t('common:certificate.heading')}</h3>
          <p>{t('common:certificate.heading-para')}</p>
          <a className="btn btn-common" href="https://uncopied.art/blog/chapter-1/">{t('common:certificate.Button')}</a>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 pt-70">
        <div className="business-item-img">
        <Image src="/certificate.svg" width={1000} height={680} className="img-fluid home-img" alt="Certificate"/>
        </div>
      </div>
    </div>
  </div>
  </section>
  <section className="section4 spacing">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 col-md-12 pt-70">
        <div className="business-item-img">
        <Image src="/about.svg" width={1000} height={680} className="img-fluid home-img" alt="About"/>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 px-5">
        <div className="business-item-info">
          <h3>{t('common:about.heading')}</h3>
          <p>{t('common:about.heading-para')}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}