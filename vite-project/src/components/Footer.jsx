const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 FunZone. All rights reserved.</p>
    </footer>
  )
}

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    padding: "10px",
    fontSize: "14px",
    color: "#ffffff",
    backgroundColor: "#6b3862",
    borderTop: "1px solid #ddd",
    zIndex: 100,
    fontFamily: "Patrick Hand, cursive",
  }
}

export default Footer
