import React, { useState } from 'react'
import './home.css' 
import Header from '../../components/header/header'
import Exploremenu from '../../components/exploremenu/exploremenu'
import FoodDisplay from '../../components/fooddisplay/fooddisplay'
import AppDownload from '../../components/appdownload/appdownload'

const Home = () => {

  const [category,setCategory]=useState("All");



  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home