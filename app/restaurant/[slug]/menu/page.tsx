import Link from "next/link";
import NavBar from "../../../components/NavBar";
import Header from "../components/Header";
import RestaurnatNavBar from "../components/RestaurantNavBar";
import { Menus } from "../components/Menus";
import supabase from "../../../config/supabaseClient";

type Props = {
  params: { slug: string };
};

 const RestaurantMenu = async (props: Props ) => {
  console.log(props.params.slug, "sdjalkj")

  const fetchData:any = await supabase
  .from("restaurants")
  .select(`items`)
  .eq("slug", `${props.params.slug}`);

  const data = fetchData.data[0].items;
 console.log(fetchData.data, "CHeck");

    return (
   <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurnatNavBar slug={props.params.slug}/>
          <Menus items={data}/>
      </div>
    </>

    )
}
export default RestaurantMenu