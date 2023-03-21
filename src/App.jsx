// Style
import "./styles/App.scss";

// React
import { Routes, Route } from "react-router-dom";

// Eigene Komponenten
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Intro from "./pages/Intro";
import Collection from "./pages/Collection";
import Projects from "./pages/Projects";
import Notes from "./pages/Notes";
import PageNotFound from "./pages/PageNotFound";

//
//
//

function App() {

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes className="notepad">
        <Route path="/" element={<Intro />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
