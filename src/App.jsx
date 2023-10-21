import React, { useState } from "react";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import TeamPage from "./components/pages/TeamPage/TeamPage";
import CreateTeamPage from "./components/pages/CreateTeamPage/CreateTeamPage";
import CreateTournamentPage from "./components/pages/CreateTournamentPage/CreateTournamentPage";
import TournamentPage from "./components/pages/TournamentPage/TournamentPage";
import DetailTournament from "./components/pages/DetailTournament/DetailTournament";

const routerAuth = [
	{
		path: "/",
		element: <ProfilePage />,
		errorElement: <Navigate to="/" replace />,
	},
	{
		path: "/teams",
		element: <TeamPage />,
	},
	{
		path: "/teams/createTeam",
		element: <CreateTeamPage />,
	},
	{
		path: "/tournament",
		element: <TournamentPage />,
	},
	{
		path: "/tournament/:tournamentId",
		element: <DetailTournament />,
	},
	{
		path: "/tournaments/createTournament",
		element: <CreateTournamentPage />,
	},
];

const routerNotAuth = [
	{
		path: "/",
		element: <Navigate to="/register" replace />,
		errorElement: <Navigate to="/register" replace />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/auth",
		element: <AuthPage />,
	},
];

const App = () => {
	const [isAuth, setIsAuth] = useState(true);

	const router = createBrowserRouter(isAuth ? routerAuth : routerNotAuth);
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
};

export default App;
