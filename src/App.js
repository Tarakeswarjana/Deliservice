// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Electronics from './component/Electronics';
import Fotwear from './component/Fotwear';
import Sport from './component/Sport';
import Grocery from './component/Grocery';
import Nopage from './Nopage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />}>
          
       
           <Route path="Electronics" element={<Electronics/>} />
           <Route path="fotwear" element={<Fotwear/>} />
           <Route path="Sport" element={<Sport />} />
           <Route path="Grocery" element={<Grocery />} />
           
          <Route path="*" element={<Nopage />} />
         </Route>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
