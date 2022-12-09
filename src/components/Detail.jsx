import React from "react";
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styles from './Detail.module.css'

export default function Detail () {
    const { detailId } = useParams()
    const navigate = useNavigate()

    const [character, setCharacter] = useState()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

     const handleClick = () => {
      navigate('/home')
     }

    return (
    <div className={styles.graldivStyle}>
      <button className={styles.buttonStyle} onClick={handleClick}>Go Home</button>
      {character ? (
        <div className={styles.divStyle}>
         <div>
         <h1 className={styles.fontStyle} >{character.name}</h1>
         <h5 className={styles.fontStyle}>{character.status}</h5>
         <h5 className={styles.fontStyle}>{character.specie}</h5>
         <h5 className={styles.fontStyle}>{character.gender}</h5>
         <h5 className={styles.fontStyle}>{character.origin?.name}</h5>
         </div>
         <div>
            <img className={styles.imgStyle} src={character.image} alt={character.name}/>
         </div>
         </div>
      ) : (
         ""
      )}
    </div>
      )}