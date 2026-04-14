import "./App.css"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Parks from "./pages/parks"

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
