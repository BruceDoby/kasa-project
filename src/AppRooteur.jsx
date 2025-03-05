import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Error from "./pages/error";
import Carrousel from "./pages/carrousel";
import Logement from "./pages/fichelogement"
import Header from "./Header";
import Footer from "./Footer"

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/carrousel" element={<Carrousel />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;