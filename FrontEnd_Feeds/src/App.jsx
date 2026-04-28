import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home.jsx';
import Feed from './pages/feeds.jsx';
import CreatePost from './pages/create-post.jsx';

const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feeds" element={<Feed/>} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
