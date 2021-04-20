import {Navbar, Button, Nav} from 'react-bootstrap';
import styles from './Layout.module.css'
import useTranslation from "next-translate/useTranslation"
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar({user}){
  const {t} = useTranslation()

  return (
    <Navbar collapseOnSelect bg="light" expand="md" className={styles.navspacing}>
				<Navbar.Brand className="font-weight-bold text-muted">
        <Link href="/">
          <a><Image src="/logo.svg" height={40} width={130} className="logo" alt="logo"/></a>
        </Link>
				</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>  
          <Link href="/login">
            <Button className={styles.navbut}>{t('common:navbar.login')}</Button>
          </Link>
          <Link href="/signup">
            <Button className={styles.navbut}>{t('common:navbar.signup')}</Button>
          </Link>
        </Nav>
        </Navbar.Collapse>
			</Navbar>
  );
}