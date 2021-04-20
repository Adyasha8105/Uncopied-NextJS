import Navbar from './Navbar'
import Footer from './Footer'

function Layout({user, children}) {
  return (
    <>
      <Navbar user={user} />
      <main>
          {children}
      </main>
      <Footer />

    </>
  )
}

export default Layout