import Header from "./Components/Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/User/Profile";
import Home from "./Components/Home";
import ReportList from "./Components/Admin/Reports/ReportList";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/profile" element={<Profile />} exact="true" />


          {/* ADMIN */}
          <Route path="/report/list" element={<ReportList />} exact="true" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
