import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export function PrivateRoute({ path, ...props }) {
	const userData = useSelector((state) => state.auth.authState);
	return userData.id && userData.accessToken ? (
		<Route {...props} path={path} />
	) : (
		<Navigate state={{ from: path }} replace to="/login"></Navigate>
	);
}
