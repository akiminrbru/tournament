import React, { useState } from "react";
import styles from "./Header.module.scss";
import "../../index.scss";
import logo from "../../assets/images/logo.svg";
import profileIcon from "../../assets/images/profileIcon.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	const [isAuth, setIsAuth] = useState(true);

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__inner}>
					<div className={styles.header__left}>
						<div className={styles.header__logo}>
							<img src={logo}></img>
							<p>Наш Футбол!</p>
						</div>
						{isAuth && (
							<nav className={styles.header__nav}>
								<ul>
									<li>
										<NavLink to={"/tournament"} className={(navData) => (navData.isActive ? styles.header__navActive : "")}>
											Чемпионаты
										</NavLink>
									</li>
									{/* <li>
										<a href="#">События</a>
									</li> */}
									<li>
										<NavLink to={"/teams"} className={(navData) => (navData.isActive ? styles.header__navActive : "")}>
											Команды
										</NavLink>
									</li>
								</ul>
							</nav>
						)}
					</div>

					{isAuth ? (
						<div className={styles.header__right}>
							<NavLink to={"/tournaments/createTournament"} className={(navData) => (navData.isActive ? `${styles.header__createTour} + ${styles.header__navActive}` : styles.header__createTour)}>
								Создать турнир
							</NavLink>
							<NavLink to={"/"} className={(navData) => (navData.isActive ? `${styles.header__profileLink} + ${styles.header__navActive}` : styles.header__profileLink)}>
								<span>Антоха Лютый</span>
								<img src={profileIcon}></img>
							</NavLink>
						</div>
					) : (
						<div className={styles.header__right}>
							<Link to={"/register"} className={styles.header__reg}>
								Регистрация
							</Link>
							<Link to={"/auth"} className={styles.header__login}>
								Войти
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
