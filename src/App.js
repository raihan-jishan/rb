import './App.css';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import {Routes, Route, Navigate} from 'react-router-dom';
import Product from '../src/pages/Product';
import Contact from './pages/Contact';
import Parda from './pages/Parda';
import Smart from './pages/Smart';
import Smart2 from './pages/Smart2';
import Turkish from './pages/Turkish';
import Crush from './pages/Crush';
import Footer from './components/Footer';
import Foam from './pages/Foam';




function App() {
  return (
    <>
    {/* multiple img links */}
     

 <Navigation /> 

   



    {/*  this app module file for navigating react-router */}
    

    <Routes>
     
     <Route exact path='/home' element={<Home />}/>
     <Route  path='/about' element={<About />}/>
     <Route  path='/product' element={<Product />}/>
     <Route  path='/parda' element={<Parda />}/>
     <Route  path='/smart' element={<Smart />}/>
     <Route  path='/crush' element={<Crush />}/>
     <Route  path='/turkish' element={<Turkish />}/>
     <Route  path='/contact' element={<Contact />}/>
     <Route  path='/smart2' element={<Smart2 />}/>
     <Route  path='/foam' element={<Foam />}/>
     {/*  by default exact path */}
     <Route
       path="*"
       element={<Navigate to="/home" replace />}
   />
     
       </Routes>
<Footer />
 
 
 </>
  );
}

export default App; 

