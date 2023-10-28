import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import PostPage from "./components/post/post";
import UserPage from "./components/profile/userPage";
import TopBar from "./components/top-bar/TopBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path="/profile" element={<UserPage/>}/>
          <Route path="*"  element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
