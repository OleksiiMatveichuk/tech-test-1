import { Suspense, lazy } from "react";
import "./App.css";
import { Layout } from "./component/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";

const AllUsers = lazy(() => import("./pages/AllUsers"));
const Strangers = lazy(() => import("./pages/Strangers"));
const Friends = lazy(() => import("./pages/MyFriends"));

export const App = () => {
  return (
    <Suspense fallback={<p>Load...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllUsers />} />
          <Route path="/people" element={<Strangers />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
