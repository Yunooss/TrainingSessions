
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './Contact';
import Event from './Event';
import NewCounting from './NewCounting';
import Reducer from './Reducer';


function App() {
  return (
  

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
         <Route path='contact' element={<Contact/>} /> 
         <Route path='event' element={<Event/>} />
         <Route path='counting' element={<NewCounting/>} />
         <Route path='reducer' element={<Reducer/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
