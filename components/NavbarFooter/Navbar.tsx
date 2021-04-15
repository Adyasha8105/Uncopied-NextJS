import {Navbar, Button, Nav} from 'react-bootstrap';
import styles from './NavbarFooter.module.css'
import useTranslation from "next-translate/useTranslation"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router"


export default function NavBar(){
  const {t} = useTranslation()
  const router = useRouter()
  return (
    <Navbar collapseOnSelect bg="light" expand="md" className={styles.navspacing}>
			<Link href="/">
				<Navbar.Brand className="font-weight-bold text-muted">
        <Image src="/logo.svg" height={40} width={130} className="logo" alt="logo"/>
				</Navbar.Brand>
			</Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
            {/* <Button className="Nav-but" onClick={handleLogout}>{t('navbar.logout')}</Button> */}
      
                <Link href="/login">
                  <Button className={styles.navbut}>{t('common:navbar.login')}</Button>
                </Link>
                <Link href="/signup">
                  <Button className={styles.navbut}>{t('common:navbar.signup')}</Button>
                </Link>
                <div className={styles.Lang}>
                  {router.locales.map(locale => (
                    <li key={locale}>
                      <Link href= {router.asPath} locale={locale}><a>{locale}</a></Link>
                    </li>
                  ))}
                </div>

        </Nav>
        </Navbar.Collapse>
			</Navbar>
  );
}