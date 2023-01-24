import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import Room from "./pages/Room";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </div>
  );
}
