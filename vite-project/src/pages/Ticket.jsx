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
    <div className="ticket-form">
      <h2>Buy Tickets for {park.name}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Your Name"
          value={formData.customerName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="customerEmail"
          placeholder="Your Email"
          value={formData.customerEmail}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <h1>
          totalprice:${formData.quantity ? park.price * formData.quantity : 0}
        </h1>

        <button type="submit">Reserve</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Ticket
