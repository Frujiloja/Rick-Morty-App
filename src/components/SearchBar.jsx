import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {

   const {onSearch} = props
   const[character, setCharacters]= useState([]);

   const handleChange = (evento) => {
      setCharacters(evento.target.value)
   }

   return (
      <div>
      <input className={styles.inputStyle} type='search' value={character} onChange={handleChange} />
      <button className={styles.buttonStyle} role="button" onClick={()=> onSearch(character)}>ADD</button>
      </div>
   );
}
