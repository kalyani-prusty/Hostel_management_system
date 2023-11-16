import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
export default function Home() {
  return (
    <>
    <Header/>
    <section className="facilities">
    <h1>The Best We Offer</h1>
    {/* <p>Our facilities will give you better foundation for grooming and learning.</p> */}
     <div className="row">
        <div className="facilities-col">
            <h3>Hostel Rooms</h3>
              <img src="./hostel1.jpeg" alt='' width="100%" />
              <p>The IITM has a canteen functioning in a separate one storey building where various food items, tea, snakes, cold drinks, ice-cream etc are available for the students and staff at reasonable rates. The canteen provides eatables in most clean and hygienic conditions as obligatory under the health laws. The canteen is run by a contractor and monitored by convener canteen committee.</p>
        </div>
        <div className="facilities-col">
            <h3>Our Canteen</h3>
            <img src="./canteen01.jpg" alt='' width="100%" />
            <p>This colourful and beautiful hostel offers air-conditioned accommodations with attached private bathrooms and seating areas. They have a garden, an outdoor fireplace, a shared kitchen and also provide continental and buffet-style breakfasts. They offer activities like pub crawls, cooking classes, themed dinner nights, bike tours and movie nights. Services like airport shuttles, free WiFi and parking are also provided</p>
        </div>
        <div className="facilities-col">
            <h3>Hostel Playground</h3>
            <img src="./playground1.jpeg" alt='' width="100%" />
            <p>A more recent trend in playground design is the “adventure” playground. Inspired by Scandinavian and British playground reformers, this design attempts to allow for a child-oriented perspective in play; children are, for instance, encouraged in these playgrounds to build their own appropriate play structures. This shift in philosophy can also be seen in the name change of the International Playground Association to the International Association for the Child’s Right to Play.</p>
        </div>
    </div>
      </section> 
<Footer/>
</>
  )
}
