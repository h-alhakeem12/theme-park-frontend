import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../global.js"
import Ticket from "./Ticket"

const Home = () => {
  const [parks, setParks] = useState([])
  const [selectedPark, setSelectedPark] = useState(null)

  useEffect(() => {
    const getParks = async () => {
      const response = await axios.get(`${BASE_URL}park`)
      setParks(response.data)
    }
    getParks()
  }, [])

  return (
    <div>
      {parks.map((park) => (
        <div key={park._id} className="park-card">
          <h1>{park.name}</h1>
          <img src={park.image} alt={park.name} style={{ width: "300px" }} />

          <p>{park.description}</p>
          <p>Location: {park.location}</p>
          <h3>Price: ${park.price}</h3>
          <button onClick={<Ticket />}>Buy Ticket</button>
        </div>
      ))}
import { useNavigate } from "react-router-dom"
import img from "../assets/park5.jpg"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to FunZone</h1>

        <button
          onClick={() => navigate("/parks")}
          style={styles.button}
        >
          View Parks
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage: `url(${img})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "50px"
  },

  overlay: {
    textAlign: "center",
    color: "#6b3862",
    fontFamily: "Patrick Hand, cursive",
  },

  title: {
    fontSize: "48px",
    letterSpacing: "3px",
    marginBottom: "30px"
  },

  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#6b3862",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontFamily: "Patrick Hand, cursive",
  },
}

export default Home
