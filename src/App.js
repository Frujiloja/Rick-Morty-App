import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
//import SearchBar from './components/SearchBar.jsx'
//import characters from './data.js'
import Nav from "./components/Nav"
import Detail from './components/Detail'
import About from './components/About'
import Formu from './components/Form'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Favorites from "./components/Favorites"


function App () {

  const[characters, setCharacters]= useState([]);

  const location = useLocation();


  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }


  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '123456';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className='App'>
      <div>
      {(location.pathname !== '/') && <Nav  onSearch={onSearch}/>}
      </div>
      <Routes>
        <Route path="/home" element={<Cards  characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='/' element={<Formu login={login}/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
  )
}

export default App
