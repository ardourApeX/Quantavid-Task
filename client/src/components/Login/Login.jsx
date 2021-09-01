import "./login.css";
import { useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";
export default function Login() {
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	return (
		<div className="login-page">
			<div className="login-parent-card">
				<h1>Login</h1>
				<input
					className="login-input"
					placeholder="Enter your email"
					type="text"
				></input>
				<div className="password-div">
					{" "}
					<input
						className="login-input"
						placeholder="Enter your password"
						type={passwordVisibility ? "text" : "password"}
					></input>
					<span
						onClick={() => setPasswordVisibility(!passwordVisibility)}
						className="eye-placeholder"
					>
						{passwordVisibility ? (
							<FiEyeOff className="eye" />
						) : (
							<FiEye className="eye" />
						)}
					</span>
				</div>

				<button className="login-button">Login </button>
				<hr />
				<button className="login-signup">Create an account</button>
			</div>
		</div>
	);
}
