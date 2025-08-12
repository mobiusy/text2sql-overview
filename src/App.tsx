import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Principles from "@/pages/Principles";
import Evolution from "@/pages/Evolution";
import Applications from "@/pages/Applications";
import Challenges from "@/pages/Challenges";
import Summary from "@/pages/Summary";
import Presenter from "@/pages/Presenter";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/evolution" element={<Evolution />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/presenter" element={<Presenter />} />
        </Routes>
      </Layout>
    </Router>
  );
}
