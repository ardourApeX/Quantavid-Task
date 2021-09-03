import "./signup.css";
import { useState } from "react";
export default function Signup() {
	const [visibility, setVisibility] = useState(false);
	console.log(visibility);
	return (
		<div className="auth-page">
			<div className="auth-parent-card" id="signup-card">
				<h1>Signup</h1>
				<input className="auth-input" placeholder="Name" type="text" />
				<input className="auth-input" placeholder="Enail" type="text" />
				<input
					className="auth-input"
					placeholder="Password"
					type={visibility ? "text" : "password"}
				/>
				<input
					className="auth-input"
					placeholder="Confirm Password"
					type={visibility ? "text" : "password"}
				/>
				<div className="toggle-password">
					<input
						onChange={() => setVisibility(!visibility)}
						type="checkbox"
						name="Password Visibility"
						value="visibility"
					></input>
					<span>Show Password</span>
				</div>
				<button className="primary-auth">Signup</button>
				<hr />
				<div className="redirect-to-login">
					<p>Already have an account?</p>{" "}
					<a href="/login" className="login-redirect">
						Login here
					</a>
				</div>
			</div>
		</div>
	);
}
