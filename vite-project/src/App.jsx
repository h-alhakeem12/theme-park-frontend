import "./App.css"
import { Routes, Route } from "react-router-dom"

import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Parks from "./components/parks"

function App() {
  return (
    <div className="App">
      <Header />

      <main style={{ paddingBottom: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="parks" element={<Parks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
