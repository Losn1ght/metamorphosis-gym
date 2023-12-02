import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Register from './Pages/Register'
import Gym from './Pages/Gym'
import MembershipPlans from './Pages/Membership'
import Sidebar from './Components/Sidebar'
import Consultation from './Pages/Consultation'
import Overview from './Pages/Overview'
import Training from './Pages/Training'
import Blog from './Pages/Blog'
import Login from './Pages/Login'

import OverviewM from './Pages/OverviewM'



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex h-full items-start justify-start bg-cover bg-center"
        style={{ backgroundImage: "url('./images/hero-image.jpg')" }}
      >
        <div className="m-10">
          <h1 className="text-9xl font-bold text-white">
            IT'S ALL ABOUT WHAT YOU CAN ACHIEVE
          </h1>
          <p className="mt-4 text-xl italic text-white">
            Take control, transform your soul
          </p>
          <button className="mt-4 w-36 rounded bg-orangish p-2 font-semibold italic text-white transition duration-300 hover:bg-red-900">
            GET STARTED
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Why choose Metamorphosis Gym?
          </h2>
          <p className="mb-4 text-center text-xl">
            Here's what you'll gain with our membership
          </p>
          <div className="grid grid-cols-1 gap-4 p-1 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center">
              <img src="./images/Support-pic.png" alt="" className="w-32" />
              <h1 className="font-bold">Support</h1>
              <p className="h-40 overflow-hidden">
                When you join, you will receive a free personalized fitness
                plan. Our Friendly and expert coaches will assist your on your
                fitness journey
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./images/Equipment-pic.png" alt="" className="w-32" />
              <h1 className="font-bold">Equipment</h1>
              <p className="h-40 overflow-hidden">
                We've got you covered with personalized support in the gym and
                handy tools to keep you on track while you're out and about.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./images/Convenience-pic.png" alt="" className="w-32" />
              <h1 className="font-bold">Convenience</h1>
              <p className="h-40 overflow-hidden">
                Our members have access to over 5,100 workout locations
                worldwide, available 24/7 for their convenience.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./images/Communit-pic.png" alt="" className="w-32" />
              <h1 className="font-bold">Community</h1>
              <p className="h-40 overflow-hidden">
                Enrolling in an MG gym membership means joining a supportive
                community committed to achieving success in fitness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])
  return (
    <Router>
      <div>
        {isLoggedIn && <Sidebar key={isLoggedIn} />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />}/>~
          <Route path="/OverviewPage" element={<OverviewM />}/>
          <Route path="/MembershipPage" element={<MembershipPlans />}/>
          <Route path="/ConsultationPage" element={<Consultation/>}/>

          <Route path="/about" element={<About />} />~
          <Route path="/OverviewPage" element={<Overview />} />
          <Route path="/MembershipPage" element={<MembershipPlans />} />
          <Route path="/ConsultationPage" element={<Consultation />} />

          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/gym" element={<Gym />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
