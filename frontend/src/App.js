
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Admin from "./pages/Admin";
export default function App(){
 return(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Jobs/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/admin" element={<Admin/>}/>
   </Routes>
  </BrowserRouter>
 );
}
