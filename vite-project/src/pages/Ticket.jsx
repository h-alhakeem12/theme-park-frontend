import { useState } from "react"
import axios from "axios"

const TicketForm = ({ park }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    quantity: "",
  })

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:3000/tickets", {
        park: park._id,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        quantity: Number(formData.quantity),
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
      <h2>Buy Tickets</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="CustomerName"
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
          placeholder="Number of Tickets"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button type="submit">Reserve</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default TicketForm
