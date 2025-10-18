import React from 'react'
import Navbar from '../Components/NavbarComponents'
import Coursel from '../Components/CourselComponents'
import Ecomerce from '../Components/BrandComponents'
import Product from '../Components/ProductComponents'
import Rating from '../Components/RatingComponents'
import Footer from '../Components/FooterComponents'
const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <Coursel/>
    <Ecomerce/>
    <Product/>
    <Rating/>
    <Footer/>
    </div>
  )
}

export default HomePage
