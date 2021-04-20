import Layout from '../components/Layout'
import { useState } from 'react'
// import { user } from '../lib/user'
import Homepage from '../components/Homepage'

export default function Home() {

  const [user, useUser] = useState(null)
  return (
    <>
        {!user && (<Homepage></Homepage>)}
    </>
  )
}
