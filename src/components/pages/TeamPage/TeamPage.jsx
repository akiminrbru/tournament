import React, { useState } from "react";
import "../../../index.scss";
import styles from "./TeamPage.module.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { TeamCard } from "./TeamCard";
import searchIcon from "../../../assets/images/search.svg";
import { Link } from "react-router-dom";

const TeamPage = () => {
	return (
		<>
			<Header />
			<main className={styles.team}>
				<div className="container">
					<div className={styles.team__inner}>
						<div className={styles.team__panel}>
							<h2>Мои команды</h2>
							<div className={styles.team__panelRight}>
								<button>
									<img src={searchIcon} alt="" />
								</button>
								<Link to={"/teams/createTeam"}>Зарегистрировать команду</Link>
							</div>
						</div>
						<div className={styles.team__list}>
							<TeamCard></TeamCard>
							<TeamCard></TeamCard>
						</div>
						<div className={styles.team__panel}>
							<h2>Все команды</h2>
						</div>
						<div className={styles.team__list}>
							<TeamCard></TeamCard>
							<TeamCard></TeamCard>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default TeamPage;
