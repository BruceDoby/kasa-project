import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Error from "./pages/error";
import Carrousel from "./pages/carrousel";
import Header from "./Header";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="/carrousel" element={<Carrousel />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;