import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { currentTheme } from '../utils'
import { updateTheme } from '../reducers/homeSlice'
import Story from '../components/story'

import styles from '../styles/Home.module.css'

export const Home = () => {
	const
		homeState = useSelector(state => state.home),
		dispatch = useDispatch()
	
	useEffect(() => {
		let theme = currentTheme()
		dispatch(updateTheme(theme))
		setInterval(() => {
			theme = currentTheme()
			dispatch(updateTheme(theme))
		}, 300000)
	},[dispatch])

	//TODO: Stories you can reply will be rendered in the background. Create a coursel like behavior

	return (
		<div className={`${styles.main} ${styles[homeState.theme.time]}`}>
			<label className={styles.greeting}>
				{homeState.theme.greeting}
			</label>
      <Story message={homeState.theme.greeting}/>
		</div>
	)
}
export default Home