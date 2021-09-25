import "./dashboard.css";
import { IoIosFolderOpen } from "react-icons/io";
export default function Dashboard() {
	return (
		<div className="dashboard-parent">
			<div className="upload-section">
				<h1>Upload your posts here</h1>
				<span>File should be .mp4, .wap, .jpg, .jpeg </span>
				<div className="upload">
					<label class="custom-file-upload">
						<input style={{ display: "none" }} type="file" />
						<div className="add-file-button">
							<IoIosFolderOpen className="upload-icon" />
						</div>
					</label>
					<div className="file-action">
						<h3>Uploaded File</h3>
						<button disabled={false} className="upload-button">
							Upload
						</button>
					</div>
					<h3 className="file-name"></h3>
				</div>
			</div>
		</div>
	);
}
