"use client"

import React, {useEffect, useState} from "react"
import Link from "next/link";

import styles from './navbar.module.css'
import {useAuthContext} from "@/app/contexts/auth-context";

const Navbar: React.FC = () => {
	const [width, setWidth] = useState(0)
	const [isToggle, setIsToggle] = useState(false)

	const { auth, setAuth } = useAuthContext()


	const updateWidth = () => {
		let newWidth = window.innerWidth
		setWidth(newWidth)
	}

	const toggleNav = () => {
		setIsToggle(!isToggle)
	}

	useEffect(() => {
		window.addEventListener('resize', updateWidth)
		console.log(window.innerWidth)
	}, [width])

	return (
		<>
			<nav className={`${styles['nav']}`}>
				<div className={`${styles['logo']}`}>
					Logo
				</div>
				<ul className={`${styles['nav-list']}`}>
					<li>
						<Link href={'/'} className={`${styles['nav-list__link']}`}>
							Homepage
						</Link>
					</li>
					<li>
						<Link href={'/dashboard'}>
							Dashboard
						</Link>
					</li>
					<li>
						<Link href={'/api/auth/signin'}>
							Signin
						</Link>
					</li>
					<li>
						<Link href={'/api/auth/signout'}>
							Signout
						</Link>
					</li>
				</ul>
			</nav>
			<nav className={`${styles['mobile-nav']}`}>
				<div className={`${styles['logo']}`}>
					Logo
				</div>
				<button className={`${styles['mobile-nav__button']}`} onClick={toggleNav}>
					<div>button</div>
				</button>
				{isToggle &&
					<ul className={`${styles['mobile-nav-list']}`}>
						<li>
							<Link
								href={'/'}
								className={`${styles['mobile-nav-list__link']}`}
								onClick={toggleNav}
							>
								Homepage
							</Link>
						</li>
						<li>
							<Link
								href={'/dashboard'}
								className={`${styles['mobile-nav-list__link']}`}
								onClick={toggleNav}
							>
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								href={'/api/auth/signin'}
								className={`${styles['mobile-nav-list__link']}`}
								onClick={toggleNav}
							>
								Signin
							</Link>
						</li>
						<li>
							<Link
								href={'/api/auth/signout'}
								className={`${styles['mobile-nav-list__link']}`}
								onClick={toggleNav}
							>
								Signout
							</Link>
						</li>
					</ul>
				}
			</nav>
		</>
	)
}

export default Navbar