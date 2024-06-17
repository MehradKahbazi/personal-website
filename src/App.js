import "./App.css";

import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
  );
}

export default App;
