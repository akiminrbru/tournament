import React, { useState } from "react";
import team2 from "../../../assets/images/team2.jpg";
import styles from "./TeamPage.module.scss";

export const TeamCard = () => {
	const [isStructure, setiIsStructure] = useState(false);

	return (
		<div className={styles.team__card}>
			<h3>Сборная Не России</h3>
			<img src={team2} alt="" />
			<div className={isStructure ? styles.team__structureTeamsActive : styles.team__structureTeams}>
				<div>
					<h5>Состав</h5>
					<ul>
						<li>Иван Ломаев</li>
						<li>Иван Ломаев</li>
					</ul>
				</div>
				<div>
					<h5>Стиль стрельбы</h5>
					<ul>
						<li>Иван Ломаев</li>
						<li>Иван Ломаев</li>
					</ul>
				</div>
				<div>
					<h5>Домашний стол</h5>
					<ul>
						<li>Иван Ломаев</li>
						<li>Иван Ломаев</li>
					</ul>
				</div>
			</div>
			<div className={styles.team__btns}>
				<a href="#">Посмотреть события</a>
				<button onClick={() => setiIsStructure(!isStructure)} className={isStructure ? styles.team__showStructureActive : null}>
					{isStructure ? "Скрыть состав команды" : "Показать состав команды"}
				</button>
			</div>
		</div>
	);
};
