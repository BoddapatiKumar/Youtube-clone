import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../Utils/ChatSlice";
import { generateRandomName } from "../Utils/helper";

const LiveChat = () => {
  const [liveMessage,setLiveMessage]=useState("");
  const dispatch=useDispatch();

  const ChatMessages=useSelector((store)=>store.chat.messages);

  //api polling 
  useEffect(()=>{
    const i=setInterval(() => {
      //api polling
      dispatch(addMessage({
        name:generateRandomName(),
        message:"Working on liveChat !",
      }))
    }, 2000);

    return()=>{
      clearInterval(i);
    }
  },[])

  return (
    <>
      <div className="w-full h-[588px] ml-2 p-2 border border-black bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {ChatMessages.map((c,i)=>(
          <ChatMessage key={i} name={c.name} message={c.message}/>
          ))}
     
      </div>

      <div className="w-full p-2 ml-2 border border-black">
        <input 
          className="w-80 px-2" 
          value={liveMessage}
          onChange={(e)=>{
            setLiveMessage(e.target.value)
          }}
          type="text">
        </input>
        <button className="px-2 mx-2 bg-green-100 rounded-lg">send</button>
      </div>
    </>
  )
}

export default LiveChat
