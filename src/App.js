import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Root from "./Pages/Root";
import Error404 from "./Pages/Error404";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Root />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/error" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
