import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";

import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            {/* <Route path="/path/:pathID" element={<PathDetail />} /> */}

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster position="top-center" gutter={12} containerStyle={{ margin: "1rem" }} />
    </>
  );
}

export default App;
