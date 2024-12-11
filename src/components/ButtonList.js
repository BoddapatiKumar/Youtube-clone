import Button from "./Button"
const list=["All","live","Gaming","Soccer","Bgmi","Music","podcasts","esports","vehicles","Gadgets","Wickets","IPL"];
const ButtonList = () => {
  
  return (
    <div className="flex p-2 m-2">
      {list.map((button,index) =>(
       
        <Button name={button} key={index}/>
        
      ))}
      </div>
     
  
  )
}

export default ButtonList
