import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import supabase from "./config/supabaseClient";



export default async function Home() {
  // console.log(supabase, "Supabase");

  const fetchData = await supabase
  .from("restaurants")
  .select("*")

  console.log(fetchData)
  return (
   
      <main>
        {/* HEADER */}
        <Header/>
        {/* HEADER */} 
        {/* CARDS */}
       
        <RestaurantCard/>
       
        
        {/* CARDS */}
      </main>
   
  
  )
}
