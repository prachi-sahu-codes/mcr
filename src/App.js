import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "#240046" : "#7b2cbf",
  textDecoration: isActive ? "underline" : "",
});

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <NavLink to="/" style={getActiveStyle} className="navLink">
          Home
        </NavLink>
        <NavLink to="/archive" style={getActiveStyle} className="navLink">
          Archive
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
