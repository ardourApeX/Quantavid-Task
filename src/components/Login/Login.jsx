import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser } from "../../features/login/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
export default function Login() {
	const { state } = useLocation();
	const navigate = useNavigate();

	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [userInput, setUserInput] = useState({});

	const loginStatus = useSelector((state) => state.auth.authStatus);
	const dispatch = useDispatch();

	function loginButtonHandler(userInput) {
		//This function is to retrace the user to its previous private route,
		//if any other wise to /
		
		dispatch(loggedInUser(userInput));
		if (loginStatus === "fulfilled") {
			navigate(state === null ? "/" : state.from);
		}
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
					onClick={() => loginButtonHandler(userInput)}
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
