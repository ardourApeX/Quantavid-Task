import "./App.css";
import { Login, Signup } from "./components";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Routes>
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
