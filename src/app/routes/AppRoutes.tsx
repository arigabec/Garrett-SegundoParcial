import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NewItemPage } from "../pages/NewItemPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage />
        }
      />
      <Route
        path="/add-item"
        element={
          <NewItemPage />
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
