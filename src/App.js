import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
