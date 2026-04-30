import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";
import Projects from "./routes/Projects";

function App() {
    return (
        <div className="bg-gray-900 text-gray-300">
            <BrowserRouter basename={"/Portfolio/"}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>

                <Navbar />
            </BrowserRouter>
        </div>
    );
}

export default App;
