import { Routes ,Route} from 'react-router-dom';
import './App.css';


import Model from './Model';
import Arcomponent from './Arcomponent';

function App() {
  
  return (
<Routes>
<Route path="/" element={<Model />} />
<Route path="/xr" element={<Arcomponent/>} />

</Routes>
  )
}

export default App
