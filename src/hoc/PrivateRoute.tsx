import { FC } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  component: FC;
}

const PrivateRoute: FC<IProps> = ({ component: Component }) => {
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
