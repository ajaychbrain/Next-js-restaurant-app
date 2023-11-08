import Link from "next/link";
import NavBar from "../../../components/NavBar";
import Header from "../components/Header";
import RestaurnatNavBar from "../components/RestaurantNavBar";
import { Menus } from "../components/Menus";


export default function RestaurantMenu( ) {
    return (
   <>
   
  
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurnatNavBar/>
          <Menus/>
      </div>
   
    </>

    )
}