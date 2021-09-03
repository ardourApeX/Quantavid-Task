import "./App.css";
import { Login, Signup, Dashboard } from "./components";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route end path="/">
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
