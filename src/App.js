import "./App.css";
import Navbar from "./Components/navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import Carrerpage from "./pages/carrerpage";
import Contactpage from "./pages/contactpage";
import { Sidenavbar } from "./Components/sidenavbar";
import Counterpage from "./pages/counterpage";
import Counter3Page from "./pages/counter3page";

function App() {
  return (
    <div className="App bg-slate-300 h-[100vh]">
      <Navbar />
      <Sidenavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/carrer" element={<Carrerpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/counter" element={<Counterpage />} />
        {/* <Route path="/counter3" element={<Counter3Page />} /> */}
      </Routes>
    </div>
  );
}

export default App;
