import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center flex-col gap-20 mt-20">
      <h1
      className="text-3xl font-bold underline w-3/4 text-center">
        Welcome to the Home Page</h1>
      <div className="flex gap-15">

        <button onClick={() => navigate('/create-post')} className="h-10 px-4 bg-amber-600 text-white font-bold text-xl rounded active:scale-110"> Create Post </button>

        <button onClick={() => navigate('/feeds')} className="h-10 px-4 bg-amber-600 text-white font-bold text-xl rounded active:scale-110"> Feeds </button>
      </div>

    </div>
  )
}

export default Home
