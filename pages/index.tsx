import Layout from '../components/Layout'
import { useContext, useState } from 'react'

import Homepage from '../components/Homepage'
import { AuthContext } from '../lib/context/authContext'
import ProtectedHomepage from '../components/ProtectedHomepage'

export default function Home() {

  const [user, useUser] = useState(null)
  const authContext = useContext(AuthContext)

  console.log(authContext);
  return (
    <>
        {!authContext.isLoggedIn && (<Homepage>{authContext}</Homepage>)}
        {authContext.isLoggedIn && <ProtectedHomepage></ProtectedHomepage>}
    </>
  )
}
