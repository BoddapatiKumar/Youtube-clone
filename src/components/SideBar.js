import { useSelector } from "react-redux"

const SideBar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)

  if(!isMenuOpen) return null;
  
  return (
    <div className="p-5 shadow-lg ">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>videos</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold w-48 pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Games</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar
