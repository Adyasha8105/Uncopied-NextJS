import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  <NotificationContainer />
  </>
  )
}

export default MyApp
