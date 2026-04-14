import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../global.js"
import Ticket from "./Ticket"

const Parks = () => {
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
      {selectedPark ? (
        <Ticket park={selectedPark} />
      ) : (
        <div className="parks-list" style={styles.page}>
          <h1>  All Parks</h1>
          {parks.map((park) => (
            <div key={park._id} className="park-card">
              <h2>{park.name}</h2>
              <img
                src={park.image}
                alt={park.name}
                style={{ width: "150px" }}
              />
              <p>{park.description}</p>
              <p>Location: {park.location}</p>
              <h3>Price: ${park.price}</h3>
              <button style={styles.button} onClick={() => setSelectedPark(park)}>Buy Tickets</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


const styles = {
  page: {
     fontFamily: "Patrick Hand, cursive",
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

export default Parks
