import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Test from "./routes/Test";

function App() {
    return (
        <>
            <BrowserRouter basename={"/Portfolio/"}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
