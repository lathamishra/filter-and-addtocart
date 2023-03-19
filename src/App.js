import "./App.css";
import Todo from "./pages/todo";
import Calculator from "./pages/calculator";
import Courses from "./pages/courses";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="header">
          <div></div>
          <ul>
            <li>
              <Link to="/crud">CRUD</Link>
            </li>

            <li>
              <Link to="/calculator">Calculator</Link>
            </li>

            <li>
              <Link to="/courses">Courses</Link>
            </li>

            <li>
              <Link to="/addnew">Add Course</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            <li>
              <Link to="/page">Page</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/crud" element={<Todo />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
