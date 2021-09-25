import "./App.css";
import { Dashboard } from "./components";
import { Login, Signup } from "./pages";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import logo from "./images/logo.png";
import { ToggleLogin } from "./components/ToggleLogin/ToggleLogin";
function App() {
	return (
		<div className="App">
			<nav className="navbar">
				<img className="logo" src={logo} alt="Logo" />
				<ToggleLogin />
			</nav>
			<Routes>
				<Route path="/">
					<Dashboard />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
