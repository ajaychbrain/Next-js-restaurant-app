import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import RestaurnatNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import { Rating } from "./components/Rating";
import { Description } from "./components/Description";
import Images  from "./components/Images";
import { Reviews } from "./components/Reviews";
import { ReservationCard } from "./components/ReservationCard";
import supabase from "../../config/supabaseClient";


interface IDATA {
  name: string;
  id: number;
  main_image: string;
  images: string[];
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  price: string;
  items: string[];
  location_id: number;
  cuisine_id: number;
}







const RestaurantDetail = async (slug: any) => {
  const fetchData: any = await supabase
    .from("restaurants")
    .select(`* , cuisine(*), location(*)`)
    .eq("slug", `${slug.params.slug}`);
   
   
    const data: IDATA = fetchData?.data[0];
   
    return (
      <>

 
   
      <div className="bg-white w-[70%] rounded p-3 shadow">
        
       <RestaurnatNavBar slug={data.slug}/>
        
          <Title title={data?.name}/>
        
        <Rating/>
        
          <Description description={data?.description}/>

        
        <Images images={data.images}/>

       
        <Reviews/>
       
      </div>
      <div className="w-[27%] relative text-reg">
       <ReservationCard/>
      </div>
 

</>

    )
}

export default RestaurantDetail;