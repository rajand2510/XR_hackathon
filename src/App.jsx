
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { useLocation } from 'react-router-dom';
import { XrHitModelContainer } from 'room-craft';


//import Arcomponent from './components/Arcomponent';
import Dashboard from './components/Dashboard';


function App() {
 
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const gltfPath = params.get('gltfPath') || './models/default.gltf';
  return (
    <>

     <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/xr" element={<XrHitModelContainer gltfPath={gltfPath} />} />
      </Routes>
      </>
  )
}

export default App
