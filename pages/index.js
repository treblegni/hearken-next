import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Story from '../components/story'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

//Previous props: { home,handleLogout,updateTheme,auth }
export const Home = () => {
	const homeState = useSelector(state => state.home)
	// useEffect(() => {
	// 	// theme()
	// 	console.log('change theme')
	// 	setInterval(() => {
	// 		updateTheme()
	// 	}, 300000)
	// },[])

	// if (isEmpty(auth)) return <Redirect to='/Login'/>

	//TODO: The reply,stories, and story should be here
	// Set by a condition in the state
	//<Reply/>

  const handleLogout = () => {
    console.log('logout')
  }
	return (
		<div className="home">
      {/* <Link href="/second">
        Second Page
      </Link> */}
			<button
        className={styles.exitButton}
        onClick={handleLogout}>
				Out
			</button>
      {/* <Story message={home.greeting}/> */}
			<div className="home-sun-container">
				<div className="home-sun">Sun</div>
			</div> 
			<div className="home-cloud-container">
				<div className="home-cloud-left">Cloud left</div>
				<div className="home-cloud-right">Cloud right</div>
			</div>
		</div>
	)
}

// const enhance = compose(
// 	connect(
// 		state => ({
// 			auth: state.firebase.auth,
// 			home: state.home,
// 		}),
// 		dispatch => ({
// 			handleLogout: () => dispatch(logout()),
// 			updateTheme: () => dispatch(updateTheme())
// 		})
// 	)
// )

// export default enhance(Home);
export default Home