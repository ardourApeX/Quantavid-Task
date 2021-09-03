import "./signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
	const [visibility, setVisibility] = useState(false);
	const [userInput, setUserInput] = useState({});
	return (
		<div className="auth-page">
			<div className="auth-parent-card" id="signup-card">
				<h1>Signup</h1>
				<input
					onChange={(event) =>
						setUserInput({ ...userInput, name: event.target.value })
					}
					className="auth-input"
					placeholder="Name"
					type="text"
				/>
				<input
					onChange={(event) =>
						setUserInput({ ...userInput, email: event.target.value })
					}
					className="auth-input"
					placeholder="Email"
					type="text"
				/>
				<input
					onChange={(event) =>
						setUserInput({ ...userInput, password: event.target.value })
					}
					className="auth-input"
					placeholder="Password"
					type={visibility ? "text" : "password"}
				/>
				<input
					onChange={(event) =>
						setUserInput({ ...userInput, confirmPassword: event.target.value })
					}
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
					<Link
						className="login-redirect"
						to={{
							pathname: "/login",
						}}
					>
						{" "}
						Login here
					</Link>
				</div>
			</div>
		</div>
	);
}
