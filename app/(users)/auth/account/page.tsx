import {loginUserAction, registerUserAction} from "@/app/utils/actions"

const AccountPage = () => {
	return (
		<div>
			<h1>Account Page</h1>
			<hr/>
			<br/>

			<section>
				<h2>Create account form</h2>
				<form
					action={registerUserAction}
					noValidate={true}
				>
					<fieldset style={{display: 'flex', flexDirection: 'column'}}>
						<label htmlFor="username">
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
						/>
						<label htmlFor="email">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
						/>
						<label htmlFor="password">
							Password (as type text for now)
						</label>
						<input
							type="text"
							id="password"
							name="password"
						/>
						<button
							type="submit"
						>
							Submit
						</button>
					</fieldset>
				</form>
			</section>

			<hr/><br/>

			<section>
				<h2>Login form</h2>
				<form
					action={loginUserAction}
					noValidate={true}
				>
					<fieldset style={{display: 'flex', flexDirection: 'column'}}>
						<label htmlFor="email">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
						/>
						<label htmlFor="password">
							Password (as type text for now)
						</label>
						<input
							type="text"
							id="password"
							name="password"
						/>
						<button
							type="submit"
						>
							Submit
						</button>
					</fieldset>
				</form>
			</section>

		</div>
	)
}

export default AccountPage