import {Navbar, Button, Nav} from 'react-bootstrap';
import styles from './NavbarFooter.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar(){
  return (
    <Navbar collapseOnSelect bg="light" expand="md" className={styles.navspacing}>
			<Link href="/">
				<Navbar.Brand className="font-weight-bold text-muted">
        <Image src="/logo.svg" height={50} width={160} className="logo" alt="logo"/>
				</Navbar.Brand>
			</Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
            {/* <Button className="Nav-but" onClick={handleLogout}>{t('navbar.logout')}</Button> */}
      
                <Link href="/login">
                  <Button className={styles.navbut}>{('navbar.login')}</Button>
                </Link>
                <Link href="/signup">
                  <Button className={styles.navbut}>{('navbar.signup')}</Button>
                </Link>

        </Nav>
        </Navbar.Collapse>
			</Navbar>
  );
}