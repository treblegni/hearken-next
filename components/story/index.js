import { useForm } from 'react-hook-form'

import styles from '../../styles/Story.module.css'

const story = () => {
	const {register,handleSubmit,formState: {errors}} = useForm()
	const onSubmit = (data) => {
		console.log(data)
	}
	return (
		<div className={styles.story}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="textarea" {...register('message',{required: true})}/>
				{errors.message && <p className={styles.errorMessage}>Message is required to submit.</p>}
				<br></br>
				<input type="submit"/>
			</form>
		</div>
	)
}

export default story