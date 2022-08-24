import { Provider } from 'react-redux'
import HearkenStore from '../store.js'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
		<Provider store={HearkenStore}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
