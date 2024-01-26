import styles from './spinner.module.css'

const Spinner = () => {
	return (
		<div className={`${styles['container']}`}>
			<div className={`${styles['loader']}`}>
				<div className={`${styles['line']} ${styles['one']}`} />
				<div className={`${styles['line']} ${styles['two']}`} />
				<div className={`${styles['line']} ${styles['three']}`} />
				<div className={`${styles['line']} ${styles['four']}`} />
			</div>
		</div>
	)
}

export default Spinner