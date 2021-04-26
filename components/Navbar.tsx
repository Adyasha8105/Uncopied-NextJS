import {useContext} from 'react'
import {Navbar, Button, Nav} from 'react-bootstrap'
import useTranslation from "next-translate/useTranslation"
import Image from 'next/image'
import Link from 'next/link'

import styles from './Layout.module.css'
import { AuthContext } from '../lib/context/authContext'

export default function NavBar(){
  const {t} = useTranslation()
  const authContext = useContext(AuthContext)

  const handleLogout = () => {
    authContext.logout()
  }

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
          {authContext.isLoggedIn ? (
            <>
            <Button className={styles.navbut} onClick={handleLogout}>{t('common:navbar.logout')}</Button>
            </>
          ) : (
              <>
                <Link href="/auth/sign-in">
                  <Button className={styles.navbut}>{t('common:navbar.login')}</Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button className={styles.navbut}>{t('common:navbar.signup')}</Button>
                </Link>
              </>
            )}
        </Nav>
        </Navbar.Collapse>
			</Navbar>
  );
}