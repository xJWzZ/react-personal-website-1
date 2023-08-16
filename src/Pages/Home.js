import { Router, Routes } from 'react-router-dom'
import '../App.css'
import HeroSection from '../Components/HeroSection'
// import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Home() {
    return (
        <>
            <HeroSection></HeroSection>
            <Footer></Footer>
        </>
    )
}

export default Home