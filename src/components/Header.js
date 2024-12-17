import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { useEffect, useState } from "react";
import { Yotube_Search_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
   
    const[searchQuery,setSearchQuery]=useState();
    const[suggestions,setSuggestions]=useState([]);
    const[showSuggestions,setShowSuggestions]=useState(false);

    const searchCache=useSelector((store)=>store.search);
    useEffect(()=>{
        //if the 
        const timer=setTimeout(()=>{
            if(searchCache[searchQuery])
            {
                setSuggestions(searchCache[searchQuery]);
            }else{
                getSearchSuggestions();
            }
        },200);

        return()=>{
           clearTimeout(timer); 
        }
       
    },[searchQuery])

    const getSearchSuggestions=async()=>{
        const data=await fetch(Yotube_Search_API+searchQuery);
        const json=await data.json();
        //console.log(json[1]);
        setSuggestions(json[1]);

        //update cache
        dispatch(cacheResults({
            [searchQuery]:json[1],
        }));
    }

    const dispatch=useDispatch()
    const toggleMenuHadler=()=>{
        dispatch(toggleMenu());
    };

  return (
        <div className="grid grid-flow-col m-2 p-5 shadow-lg">
        <div className="flex col-span-1">
            <img 
                onClick={()=>toggleMenuHadler()}
                className="h-8 cursor-pointer"
                src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" 
                alt="menu"
            />
            <img 
                className="h-8 mx-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" 
                alt="icon"
            />

        </div>
        <div className="col-span-10 px-20">
            <div>
            <input 
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
                className="w-1/2 border border-gray-400 p-2 rounded-l-full"  
                type="text"/>
            <button className="border border-gray-400  px-5 py-2 rounded-r-full bg-gray-100 ">
                🔍
            </button>
            </div>
            {showSuggestions && <div className="fixed py-2 px-5 bg-white w-[28rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                    {suggestions.map((s)=>(
                         <li key={s} className="py-2 shadow-sm hover:bg-gray-100">🔍 {s}</li>
                    ))}
                                                                     
                </ul>
            </div>}
        </div>
        <div className="col-span-1">
            <img 
                className="h-8"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
                alt="user-icon"
            />
        </div>
    </div>
  )
}
export default Header
