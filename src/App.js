import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import MyProjects from './Component/MyProjects/MyProjects';
import Contact from './Component/Contact/Contact';
import Header from './Component/Shared/Header/Header';
import AboutMe from './Component/AboutMe/AboutMe';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/about' element={<AboutMe></AboutMe>} />
          <Route path='/myProjects' element={<MyProjects></MyProjects>} />
          <Route path='/contact' element={<Contact></Contact>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
