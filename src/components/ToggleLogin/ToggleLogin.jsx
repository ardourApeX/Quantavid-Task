import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/login/authSlice";
import { Link } from "react-router-dom";
import "./toggleLogin.css";

export function ToggleLogin() {
	const dispatch = useDispatch();
	const [isUserLogin, setUserLogin] = useState(
		JSON.parse(localStorage.getItem("isUserLogin"))
	);
	if (isUserLogin !== null) {
		return (
			<div
				onClick={() => {
					dispatch(logout());
				}}
				className="toggle-button"
			>
				Logout
			</div>
		);
	}
	return (
		<Link to={{ pathname: "/login" }}>
			<div className="toggle-button">Login</div>
		</Link>
	);
}
