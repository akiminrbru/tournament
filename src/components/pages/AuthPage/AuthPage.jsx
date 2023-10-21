import React from "react";
import styles from "../RegisterPage/RegisterPage.module.scss";
import { useForm } from "react-hook-form";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../../redux";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../../redux/authSlice";
import { setUserData } from "../../../redux/authSlice";

const AuthPage = () => {
	const [loginUser, result] = useLoginUserMutation();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const user = {
			email: data.email,
			password: data.password,
		};

		loginUser(user);
		dispatch(setIsAuth(true));
	};

	return (
		<>
			<Header />
			<main className={styles.auth}>
				<div className={styles.auth__inner}>
					<h2>Вход в Наш Футбол!</h2>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.auth__form}>
						<div>
							<input type="text" placeholder="Введите email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
							{errors?.email?.type === "required" && <p className={styles.auth__warning}>Введите вашу почту!</p>}
						</div>
						<div>
							<input type="password" placeholder="Введите ваш пароль" {...register("password", { required: true, minLength: 2, maxLength: 20 })} />
							{errors?.password?.type === "required" && <p className={styles.auth__warning}>Введите ваш пароль!</p>}
						</div>
						<div className={`${styles.auth__bottom} ${styles.auth__bottomAuth}`}>
							<button type="submit">Войти</button>
							<Link to={"/register"}>У меня нет аккаунта</Link>
						</div>
					</form>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default AuthPage;
