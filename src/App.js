import "./App.css";

import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import RegisterLayout from "./layout/RegisterLayout";
import Login from "./pages/Login";
import List from "./pages/List";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/list" element={<List />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="/courses" element={<RegisterLayout />}>
        <Route path="/courses/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
