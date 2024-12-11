import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Header = () => {
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
            <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"  type="text"/>
            <button className="border border-gray-400  px-5 py-2 rounded-r-full bg-gray-100">
                🔍
            </button>
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
