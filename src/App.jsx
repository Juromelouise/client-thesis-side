import Header from "./Components/Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/User/Profile";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/profile" element={<Profile />} exact="true" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
