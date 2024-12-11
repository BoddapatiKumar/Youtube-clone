import { useEffect, useState } from "react"
import { Youtube_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos= async()=>{
    const data=await fetch(Youtube_API);
    const json=await data.json();
    console.log(json.items);
    setVideos(json.items);
  }
  console.log(videos);
  return (
    <div className="flex flex-wrap">
      {videos.map((video)=>(
        <Link to={"/watch?v="+video.id}>
          <VideoCard key={video.id}info={video}/>
        </Link>
      ))}
      

    </div>
  )
}

export default VideoContainer
