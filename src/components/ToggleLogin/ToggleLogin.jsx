import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { logout } from "../../features/login/authSlice";

import "./toggleLogin.css";

export function ToggleLogin() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logoutStatus = useSelector((state) => state.auth.authStatus);
	const [isUserLogin] = useState(
		JSON.parse(localStorage.getItem("isUserLogin"))
	);

	function logoutHandler() {
		dispatch(logout());
		if (logoutStatus === "fulfilled") {
			navigate("/login");
		}
	}
	
	if (isUserLogin !== null) {
		return (
			<div onClick={logoutHandler} className="toggle-button">
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
