
const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center flex-wrap">
        <img 
            className="h-8"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
            alt="user-icon"
        />
        <span className="px-2 font-bold">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
