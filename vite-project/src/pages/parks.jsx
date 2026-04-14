import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../global.js"

const Parks = () => {
  const [parks, setParks] = useState([])

  useEffect(() => {
    const getParks = async () => {
      const response = await axios.get(`${BASE_URL}park`)
      setParks(response.data)
    }
    getParks()
  }, [])

  return (
    <div>
      <h1>All Parks </h1>

      {parks.map((park) => (
        <div key={park._id} className="park-card">
          <h2>{park.name}</h2>
          <img src={park.image} alt={park.name} style={{ width: "150px" }} />
          <p>{park.description}</p>
          <p>Location: {park.location}</p>
          <h3>Price: ${park.price}</h3>
        </div>
      ))}
    </div>
  )
}

export default Parks
