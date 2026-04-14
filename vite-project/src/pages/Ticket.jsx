import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../global.js"

const Ticket = ({ park }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    quantity: "",
  })

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const totalPriceCalculated = park.price * Number(formData.quantity)

    try {
      await axios.post(`${BASE_URL}tickets`, {
        park: park._id,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        quantity: Number(formData.quantity),
        totalprice: totalPriceCalculated,
      })

      setMessage("Ticket booked successfully!")

      setFormData({
        customerName: "",
        customerEmail: "",
        quantity: "",
      })
    } catch (error) {
      setMessage("Error booking ticket")
    }
  }

  return (
    <div style={styles.page}>
    <div style={styles.box}>
      <h2>Buy Tickets for {park.name}</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="customerName"
          placeholder="Your Name"
          value={formData.customerName}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="customerEmail"
          placeholder="Your Email"
          value={formData.customerEmail}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="number"
          name="quantity"
          placeholder="quantity"
          value={formData.quantity}
          onChange={handleChange}
          style={styles.input}
        />

        <h3>
          total price: $
          {formData.quantity ? park.price * formData.quantity : 0}
        </h3>

        <button type="submit" style={styles.button}>
          Reserve
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  </div>
  )
}
const styles = {
  page: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Patrick Hand, cursive",
  },

  box: {
    border: "1px solid #2c292b",
    padding: "20px",
    textAlign: "center",
    width: "400px",
    borderRadius: "5px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontFamily: "Patrick Hand, cursive",

  },

  input: {
    padding: "5px",
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
    fontFamily: "Patrick Hand, cursive"
  },
}

export default Ticket
