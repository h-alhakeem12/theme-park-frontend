import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "rights",
    gap: "20px",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },

  link: {
    color: "#333",
    fontSize: "16px",
    fontFamily: "Patrick Hand, cursive",
  },
}

export default Header
