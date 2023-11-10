import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import supabase from "./config/supabaseClient";


export interface IRESTAURANTCARDTYPE {
  name?: string;
  id?: number;
  main_image?: string;
  description?: string;
  images?: string[];
  price?: string;
  slug?: string;
  cuisine: ICUISINEDATA;
  location: ILOCATIONTYPE;
}
export interface ILOCATIONTYPE {
  name?: string;
  id?: number;
  restaurant?: string[];
}

export interface ICUISINEDATA {
  name?: string;
  id?: number;
  restaurant?: string[];
}









export default async function Home() {
  // console.log(supabase, "Supabase");

  const fetchData = await supabase
  .from("restaurants")
  .select(`*, cuisine( * ), location(*)`);

  console.log(fetchData)
  const restaurants = fetchData?.data;
  return (
   
      <main>
        {/* HEADER */}
        <Header/>
        {/* HEADER */} 
        {/* CARDS */}
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {
          restaurants?.map((restaurant)=> {
            return  <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
          })
        }
        </div>
        
        {/* CARDS */}
      </main>
   
  
  )
}
