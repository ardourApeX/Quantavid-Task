import "./dashboard.css";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { logout } from "../../features/login/authSlice";
import { ToggleLogin } from "../ToggleLogin/ToggleLogin";
export default function Dashboard() {
	const dispatch = useDispatch();

	return (
		<div className="dashboard-parent">
			<div>
				<nav className="navbar">
					<img className="logo" src={logo} alt="Logo" />
					<ToggleLogin />
				</nav>
			</div>
		</div>
	);
}
