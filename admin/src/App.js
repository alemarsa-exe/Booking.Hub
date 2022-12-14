import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { labsInputs, productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import {
	labColumns,
	userColumns,
	reservationColumns,
	softwareColumns,
	devicesColumns,
} from "./datatablesource";
import NewLab from "./pages/newLab/NewLab";
import NewReservation from "./pages/newReservation/NewReservation";
import NewDevice from "./pages/newDevice/NewDevice";
import NewSoftware from "./pages/newSoftware/NewSoftware";

function App() {
	const { darkMode } = useContext(DarkModeContext);

	const ProtectedRoute = ({ children }) => {
		const { email } = useContext(AuthContext);

		if (!email) {
			return <Navigate to="/login" />;
		}

		return children;
	};

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route path="login" element={<Login />} />
						<Route
							index
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>
						<Route path="users">
							<Route
								index
								element={
									<ProtectedRoute>
										<List columns={userColumns} />
									</ProtectedRoute>
								}
							/>
							<Route
								path=":userId"
								element={
									<ProtectedRoute>
										<Single />
									</ProtectedRoute>
								}
							/>
							<Route
								path="edit"
								element={
									<ProtectedRoute>
										<Single />
									</ProtectedRoute>
								}
							/>
							<Route
								path="new"
								element={
									<ProtectedRoute>
										<New inputs={userInputs} title="Add New User" />{" "}
									</ProtectedRoute>
								}
							/>
						</Route>
						<Route path="labs">
							<Route index element={<List columns={labColumns} />} />
							<Route
								path=":productId"
								element={
									<ProtectedRoute>
										<Single />
									</ProtectedRoute>
								}
							/>
							<Route
								path="new"
								element={
									<ProtectedRoute>
										<NewLab />
									</ProtectedRoute>
								}
							/>
						</Route>
						<Route path="software">
							<Route index element={<List columns={softwareColumns} />} />
							<Route
								path=":productId"
								element={
									<ProtectedRoute>
										<Single />
									</ProtectedRoute>
								}
							/>
							<Route
								path="new"
								element={
									<ProtectedRoute>
										<NewSoftware />
									</ProtectedRoute>
								}
							/>
						</Route>
						<Route path="devices">
							<Route index element={<List columns={devicesColumns} />} />
							<Route
								path=":productId"
								element={
									<ProtectedRoute>
										<Single />
									</ProtectedRoute>
								}
							/>
							<Route
								path="new"
								element={
									<ProtectedRoute>
										<NewDevice />
									</ProtectedRoute>
								}
							/>
						</Route>
						<Route path="reservation">
							<Route index element={<List columns={reservationColumns} />} />
							<Route
								path=":productId"
								element={
									<ProtectedRoute>
										<Single />
									</ProtectedRoute>
								}
							/>
							<Route
								path="new"
								element={
									<ProtectedRoute>
										<NewReservation />
									</ProtectedRoute>
								}
							/>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
