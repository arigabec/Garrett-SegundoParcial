import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../app/routes/AppRoutes";
import { AuthRoute } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};
