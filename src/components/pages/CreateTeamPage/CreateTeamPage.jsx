import React from "react";
import styles from "./CreateTeamPage.module.scss";
import "../../../index.scss";
import { useForm } from "react-hook-form";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import teamIcon from "../../../assets/images/team2.jpg";

const CreateTeamPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<>
			<Header></Header>
			<main className={styles.createTeam}>
				<div className="container">
					<div className={styles.createTeam__inner}>
						<h2>Регистрация команды</h2>
						<form onSubmit={handleSubmit(onSubmit)} className={styles.createTeam__form}>
							<div className={styles.createTeam__main}>
								<h5>Основное</h5>
								<div className={styles.createTeam__mainContent}>
									<div className={styles.createTeam__photo}>
										<img src={teamIcon} alt="" />
										<div className={styles.createTeam__photoBtns}>
											<span>Загрузить фото</span>
											<span>Удалить фото</span>
										</div>
									</div>
									<div>
										<input type="text" placeholder="Название команды" {...register("teamName", { required: true, maxLength: 100 })} />
										{errors?.teamName?.type === "required" && <p className={styles.createTeam__warning}>Укажите название команды!</p>}
									</div>
								</div>
							</div>
							<div className={styles.createTeam__dop}>
								<h5>Дополнительные сведенья</h5>
								<div className={styles.createTeam__dopContent}>
									<div>
										<input type="text" placeholder="Стиль стрельбы" {...register("styleShoot", { required: true, maxLength: 100 })} />
										{errors?.styleShoot?.type === "required" && <p className={styles.createTeam__warning}>Укажите стиль стрельбы!</p>}
									</div>
									<div>
										<input type="text" placeholder="Домашний стол" {...register("homeTable", { required: true, maxLength: 100 })} />
										{errors?.homeTable?.type === "required" && <p className={styles.createTeam__warning}>Укажите домашний стол!</p>}
									</div>
								</div>
							</div>
							<div className={styles.createTeam__structure}>
								<h5>Состав команды</h5>
								<div className={styles.createTeam__structureContent}>
									<div>
										<input type="text" placeholder="Участник #1" {...register("player1", { required: true, maxLength: 100 })} />
										{errors?.player1?.type === "required" && <p className={styles.createTeam__warning}>Укажите первого участника!</p>}
									</div>
									<div>
										<input type="text" placeholder="Участник #2" {...register("player2", { required: true, maxLength: 100 })} />
										{errors?.player2?.type === "required" && <p className={styles.createTeam__warning}>Укажите второго участника!</p>}
									</div>
								</div>
							</div>
							<div className={styles.createTeam__bottom}>
								<button type="submit">Зарегистрировать команду</button>
							</div>
						</form>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</>
	);
};

export default CreateTeamPage;
