import { Link, Route, Routes } from 'react-router-dom';
import Home from './Component/main';
import Artists from './Component/Artist';
import Login from './Component/Login/login';
import Profile from './Component/Profile';

function App() {
  return (
    
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artists />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    
  );
}

export default App;
