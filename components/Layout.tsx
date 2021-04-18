import Navbar from './Navbar'
import Footer from './Footer'
import Homepage from './Homepage'

function Layout() {
  return (
    <>
      <Navbar />
      <main>
          <Homepage />
      </main>
      <Footer />

    </>
  )
}

export default Layout