import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import RestaurnatNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import { Rating } from "./components/Rating";
import { Description } from "./components/Description";
import { Images } from "./components/Images";
import { Reviews } from "./components/Reviews";
import { ReservationCard } from "./components/ReservationCard";

export default function RestaurantDetail() {
    return (
      <>

    {/* NAVBAR */} {/* HEADER */}
  
    {/* HEADER */} {/* DESCRIPTION PORTION */}
   
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
       <RestaurnatNavBar/>
        {/* RESAURANT NAVBAR */} {/* TITLE */}
          <Title/>
        {/* TITLE */} {/* RATING */}
        <Rating/>
        {/* RATING */}
         {/* DESCRIPTION */}
          <Description/>

        {/* DESCRIPTION */}
        <Images/>

        {/* IMAGES */} {/* REVIEWS */}
        <Reviews/>
        {/* REVIEWS */}
      </div>
      <div className="w-[27%] relative text-reg">
       <ReservationCard/>
      </div>
 

</>

    )
}