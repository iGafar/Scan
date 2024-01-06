import IssuePage from "pages/IssuePage";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import SearchPage from "pages/SearchPage";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/issue" element={<IssuePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
