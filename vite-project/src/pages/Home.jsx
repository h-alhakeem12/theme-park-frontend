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
    </div>
  )
}
export default Home
