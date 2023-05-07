import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import trips from "./data"

const App = () => {
  const cards = trips.map(trip => {
    return (
      <Card
      key={trip.id}
      trip={trip}
      />
    )
  })

  return (
    <>
      <Navbar />
      <section className="cards-list--container">
        {cards}
      </section>
      <Footer />
    </>
  )
}

export default App
