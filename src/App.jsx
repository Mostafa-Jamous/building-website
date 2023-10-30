import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./layout/NavBar";
import IncomeProperty from "./pages/IncomeProperty";
import Plans from "./pages/Plans";
import Design from "./pages/Design";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="incomeProperty" element={<IncomeProperty />} />
          <Route path="plans" element={<Plans />} />
          <Route path="design" element={<Design />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
