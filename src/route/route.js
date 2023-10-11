import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import RequestDemo from "../pages/request_demo";


export default function RoutesPath() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/request-demo"
          element={<RequestDemo />}
        ></Route>
      </Routes>
    </Router>
  );
}