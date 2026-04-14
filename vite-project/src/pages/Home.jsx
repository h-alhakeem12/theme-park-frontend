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
