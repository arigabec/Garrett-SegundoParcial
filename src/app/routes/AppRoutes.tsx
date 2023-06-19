import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NewItemPage } from "../pages/NewItemPage";
import { EditPage } from "../pages/EditPage";
import { GuardedRoute } from "../../guards/GuardedRoute";
import { useStore } from "../../context/ContextProvider";

export const AppRoutes = () => {
  const { auth } = useStore();
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GuardedRoute auth={auth}>
            <HomePage />
          </GuardedRoute>
        }
      />
      <Route
        path="/add-item"
        element={
          <GuardedRoute auth={auth}>
            <NewItemPage />
          </GuardedRoute>
        }
      />
      <Route
        path="/edit-item"
        element={
          <GuardedRoute auth={auth}>
            <EditPage />
          </GuardedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
