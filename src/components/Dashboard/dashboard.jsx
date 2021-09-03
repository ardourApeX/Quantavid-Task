import "./dashboard.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { logout } from "../../features/login/authSlice";
export default function Dashboard() {
	const [userUpload, setUserUpload] = useState("");
	const [isUserLogin, setUserLogin] = useState(
		JSON.parse(localStorage.getItem("isUserLogin"))
	);
	const dispatch = useDispatch();
	function checkFileType(event) {
		const types = ["png", "jpg", "jpeg", "mp4", "webp", "mp3"];
		let type = event.target.value.split(".");
		type = type[type.length - 1];
		setUserUpload(type in types);
	}
	function uploadFileToServer() {
		if (userUpload) {
		} else {
			alert("File type didnt matched");
		}
	}
	function ToggleLogin() {
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
				/<div className="toggle-button">Login</div>
			</Link>
		);
	}

	return (
		<div className="dashboard-parent">
			<div>
				<nav className="navbar">
					<img className="logo" src={logo} alt="Logo" />
					<ToggleLogin />
				</nav>
			</div>
			<div className="dashboard-content">
				<div className="upload-area">
					<h1>Upload Files here</h1>
					<strong>File must be of type : Audio, Video and Images</strong>
					<div>
						<input
							className="file-place"
							onChange={(event) => checkFileType(event)}
							type="file"
							id="img"
							name="img"
							accept="audio/*,video/*,image/*"
						/>
						<button className="upload-button" onClick={uploadFileToServer}>
							Upload
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
