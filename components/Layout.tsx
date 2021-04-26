import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <Navbar />
      <main>
          {children}
      </main>
      <Footer />

    </>
  )
}

function Error({children})
{
  return (<span className="error">{children}</span>)
}


export default Layout
export {Error}