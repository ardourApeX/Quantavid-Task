import "./App.css";
import { Login, Signup, Dashboard } from "./components";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
function App() {
	return (
		<div className="App">
			<Routes>
				<PrivateRoute path="/">
					<Dashboard />
				</PrivateRoute>
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
