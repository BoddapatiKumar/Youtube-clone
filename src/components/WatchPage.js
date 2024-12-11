import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const[searchParams]=useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div>
      <iframe 
      width="1045" 
      height="588" 
      src={"https://www.youtube.com/embed/"+searchParams.get("v")}
      title="Harsha Bhogle Previews India vs Australia Gabba Test" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
    </iframe>
    </div>
  )
}

export default WatchPage
