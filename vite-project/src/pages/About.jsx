const About = () => {
  return (
      <div style={styles.page}>
      <div style={styles.box}>
      <h1>About FunZone </h1>

      <p>
        FunZone is a simple web application that allows users to explore parks
        and book tickets.
      </p>

      <p>
        The goal of this project is to provide an easy way for users to choose
        their favorite park, book tickets, and manage their reservations.
      </p>
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
    padding: "30px",
    textAlign: "center",
    width: "600px",
     borderRadius: "5px",
  },
}

export default About
