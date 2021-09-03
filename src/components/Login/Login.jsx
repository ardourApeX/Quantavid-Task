import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { loggedInUser } from "../../features/login/authSlice";
export default function Login() {
	const navigate = useNavigate();
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [userInput, setUserInput] = useState({});
	const dispatch = useDispatch();
	const state = useSelector((state) => state.auth);
	if (state.autStatus === "fulfilled") {
		navigate("/");
	}
	return (
		<div className="auth-page">
			<div className="auth-parent-card">
				<h1>Login</h1>
				<input
					onChange={(event) => {
						setUserInput({ ...userInput, email: event.target.value });
					}}
					className="auth-input"
					placeholder="Enter your email"
					type="text"
				></input>
				<div className="password-div">
					{" "}
					<input
						onChange={(event) =>
							setUserInput({ ...userInput, password: event.target.value })
						}
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

				<button
					onClick={() => dispatch(loggedInUser(userInput))}
					className="primary-auth"
				>
					Login{" "}
				</button>
				<hr />

				<Link to={{ pathname: "/signup" }}>
					<button className="auth-signup">Create an account</button>
				</Link>
			</div>
		</div>
	);
}
