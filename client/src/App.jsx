import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Header, Footer} from './components'

import {Awards, Bucks, Does, ForSale, Home, Kids, Sold, Contact, About}  from './pages'

export default function App() {
    return (
        <>
            {/* <main className={`pageLayout ${location.pathname === '/'
            ? 'mainBackground'
            : 'defaultBackground'}`
            }></main> */}
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Awards" element={<Awards />} />
                    <Route path="/Bucks" element={<Bucks />} />
                    <Route path="/Does" element={<Does />} />
                    <Route path="/ForSale" element={<ForSale />} />
                    <Route path="/Kids" element={<Kids />} />
                    <Route path="/Sold" element={<Sold />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}