const commentsData=[{
    name:"Kumar",
    text:"wdiniewbdikbewsjbfebuerjnheilkerds",
    replies:[],
},
{
    name:"Kumar",
    text:"wdiniewbdikbewsjbfebuerjnheilkerds",
    replies:[{
        name:"Kumar",
        text:"wdiniewbdikbewsjbfebuerjnheilkerds",
        replies:[{
            name:"Kumar",
            text:"wdiniewbdikbewsjbfebuerjnheilkerds",
            replies:[{
                name:"Kumar",
                text:"wdiniewbdikbewsjbfebuerjnheilkerds",
                replies:[],
            },
            {
                name:"Kumar",
                text:"wdiniewbdikbewsjbfebuerjnheilkerds",
                replies:[],
            }],
        }],
    }],
},
{
    name:"Kumar",
    text:"wdiniewbdikbewsjbfebuerjnheilkerds",
    replies:[],
},
{
    name:"Kumar",
    text:"wdiniewbdikbewsjbfebuerjnheilkerds",
    replies:[],
},
{
    name:"Kumar",
    text:"wdiniewbdikbewsjbfebuerjnheilkerds",
    replies:[],
},{
    name:"Kumar",
    text:"wdiniewbdikbewsjbfebuerjnheilkerds",
    replies:[],
},
{
    name:"Kumar",
    text:"wdiniewbdikbewsjbfebuerjnheilkerds",
    replies:[],
}
];
//mapping over commentData
const CommentList=({comments})=>{
    return comments.map((comment,index)=>(
        <div>
        <Comment key={index} data={comment}/>
        <div className="pl-5 ml-5 border border-l-black">
            <CommentList comments={comment.replies}/>
        </div>
        </div>
        ));
    
}
//comment component
const Comment=({data})=>{
    const {name,text,replies}=data;
    return(
        <div className="flex py-3 bg-gray-100 rounded-lg shadow-sm">
            <img 
            className="w-8 h-8"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
             alt=""/>
             <div className="px-2">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
             </div>
        </div>
    );
}

//comments Container
const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className=" text-2xl font-bold ">Comments:</h1>
      <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
