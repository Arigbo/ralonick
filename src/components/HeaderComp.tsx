/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const navList = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Services", link: "/services" },
];

const HeaderComp = () => {
	const router = useRouter();

	const [navDisplay, setNavDisplay] = useState(false);

	const showNavHandler = () => {
		setNavDisplay(true);
	};
	const hideNavHandler = () => {
		setNavDisplay(false);
	};
	return (

		<header className="app-header">
			<nav className="desktop-nav container ">
				<div className="logo">
					<Link href="/">
						<a ><img src="./images/ralonik-ld.png" alt="" /></a>
					</Link>
				</div>

				<ul className="app-nav">
					{navList.map((nav, i) => (
						<li key={i}>
							<Link href={nav.link}>
								<a className={router.pathname == `${nav.link}` ? "active" : ""}>{nav.name}</a>
							</Link>
						</li>
					))}
					<li>
						<Link href="/contact"><button className="btn btn-danger">Contact Us</button></Link>
					</li>
				</ul>
				<div className="bars">
					{navDisplay ? (
						<img className="c-pointer" src="/assets/closeButton.svg" alt="" onClick={hideNavHandler} />
					) : (
						<img className="c-pointer" src="/assets/hamburger.svg" alt="" onClick={showNavHandler} />
					)}
				</div>
			</nav>
			<div className={`mobile-nav  ${navDisplay ? "show" : "hide"}`}>
				<div className="inner container">
					<ul>
						{navList.map((nav, i) => (
							<li key={i}>
								<Link href={nav.link}>
									<a className={router.pathname == `${nav.link}` ? "active" : ""}>{nav.name}</a>
								</Link>
							</li>
						))}
						<li>
							<Link href="/contact"><button className="btn btn-danger">Contact Us</button></Link>
						</li>
					</ul>
				</div>
			</div>
		</header>

	);
};

export default HeaderComp;
