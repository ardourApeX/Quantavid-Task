import "./login.css";
import { useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";
export default function Login() {
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	return (
		<div className="auth-page">
			<div className="auth-parent-card">
				<h1>Login</h1>
				<input
					className="auth-input"
					placeholder="Enter your email"
					type="text"
				></input>
				<div className="password-div">
					{" "}
					<input
						className="auth-input"
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

				<button className="primary-auth">Login </button>
				<hr />
				<button className="auth-signup">Create an account</button>
			</div>
		</div>
	);
}
