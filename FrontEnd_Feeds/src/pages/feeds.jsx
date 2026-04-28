import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Feeds = () => {
const navigate = useNavigate();

  const [posts, setPost] = useState([]);
  //   {
  //   _id: '1',
  //   image: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   caption: "This is the first image"
  // },
  // {
  //   _id: '2',
  //   image: "https://i.ytimg.com/vi/TI0PFr8NPvU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCN1RbRBpdO2aJnCFLBPPm6bpynPA",
  //   caption: "This is the second image"
  // },
  // {
  //   _id: '3',
  //   image: "https://m.media-amazon.com/images/I/51sG+agaZbS._AC_UF894,1000_QL80_.jpg",
  //   caption: "This is the third image"
  // }

  useEffect(() => {
    axios.get("http://localhost:3000/feed")
    .then((res) => {
      setPost(res.data.data)
    })
  }, [])

  return (
    <div className="flex items-center flex-col relative gap-5 w-100% h-100% bg-black text-white/80">

      <div className="top-0 z-10 sticky w-screen bg-black flex items-center justify-between px-10">
        
        <h1 className="py-3 text-xl font-bold  text-center">My Feed</h1>
        
        <button onClick={() => navigate('/create-post')} className="py-1  px-3 text-white font-bold text-m rounded hover:scale-105 hover:bg-white/10 flex justify-center items-center border-white border"> Create Post</button>
        
      </div> 

      {
        posts.map((post) => (
          <div key={post._id}>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Feeds
