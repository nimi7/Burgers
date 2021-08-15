import React from 'react'
import Navbar from './Navbar/navbar'
import Burgers from './Burgers'
import Carusela from './Carusela/carusela'
import Footer from './footer'

export default function Home() {
    return (
        <div className="bg-yellow-100">
            <Carusela />
            <Burgers />
            <Footer/>


        </div>

    )
}