'use client'

import {useRouter} from "next/router";
import {redirect} from "next/navigation";
import {NextResponse} from "next/server";

const LoginButton = (props) => {
  return (
		<button
			onClick={() => {
					redirect('/azeazeaze')
			}}
			type={"submit"}
		>
			Continue with {props.provider}
		</button>
	)
}

export default LoginButton