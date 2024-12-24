import { useEffect } from "react"
import ChatMessage from "./ChatMessage"

const LiveChat = () => {
  useEffect(()=>{
    const i=setInterval(() => {
      //api polling
    }, 2000);

    return()=>{
      clearInterval(i);
    }
  },[])
  return (
    <div className="w-full h-[588px] ml-2 p-2 border border-black bg-gray-100 rounded-lg">
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
     <ChatMessage name="Kumar" message="Bulding a Live Chat using React!"/>
    </div>
  )
}

export default LiveChat
