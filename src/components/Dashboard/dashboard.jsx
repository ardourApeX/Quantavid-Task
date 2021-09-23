import "./dashboard.css";
import logo from "../../images/logo.png";
import { ToggleLogin } from "../ToggleLogin/ToggleLogin";
export default function Dashboard() {
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
