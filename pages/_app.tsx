import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
// import {AuthContext} from '../lib/context/authContext'
import {AuthProvider} from '../lib/hooks/authHook'

function MyApp({ Component, pageProps }) {
  // const [token, setToken] = useState(null)
  
  // const login = () => {
  //   setToken(token)
  // }

  // const logout = () => {
  //   setToken(null)
  // }

  return (
  <>
  <AuthProvider>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  <NotificationContainer />
  </AuthProvider>
  </>
  )
}

export default MyApp
