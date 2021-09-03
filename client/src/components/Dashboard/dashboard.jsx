import "./dashboard.css";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Dashboard() {
	const [userUpload, setUserUpload] = useState("");
	const [isUserLogin, setUserLogin] = useState(
		JSON.parse(localStorage.getItem("isUserLogin"))
	);
	function checkFileType(event) {
		const types = ["png", "jpg", "jpeg", "mp4", "webp", "mp3"];
		let type = event.target.value.split(".");
		console.log("#########", event.target.value);
		type = type[type.length - 1];
		console.log("@@@@@@@@@@@", type);
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
			return <div className="toggle-button">Logout</div>;
		}
		return <div className="toggle-button">Login</div>;
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
