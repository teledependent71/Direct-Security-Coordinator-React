import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Security Coordinator</title>
        <meta property="og:title" content="Direct Security Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home
