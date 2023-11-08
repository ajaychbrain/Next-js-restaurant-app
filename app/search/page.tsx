import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import RestaurnatCard from "./components/RestaurnatCard";
import SearchSideBar from "./components/SearchSideBar";

export default function Search() {
    return ( 
      <>
      <Header/>
    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
      {/* SEARCH SIDE BAR */}
        <SearchSideBar/>
      {/* SEARCH SIDE BAR */}
      <RestaurnatCard/>
    </div>

    </>

    )
}