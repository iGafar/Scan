import PrivateRoute from "../hoc/PrivateRoute";
import IssuePage from "pages/IssuePage";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import SearchPage from "pages/SearchPage";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/search" element={<PrivateRoute component={SearchPage} />} />
      <Route path="/issue" element={<PrivateRoute component={IssuePage} />} />
    </Routes>
  );
};

export default Router;
