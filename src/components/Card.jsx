import dat from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, deleteFav } from "../redux/actions";

export function Card(props) {
   const [isFav, setisFav] = useState(false)

   const handleFavorite=()=>{
      if (isFav === true) {
         setisFav(false);
         props.deleteFav(props.id)
      }
      else{
         setisFav(true);
         props.addFav(props);
      } 
   }

   useEffect(()=> {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setisFav(true);
         }
      });
   }, [props.id]);
   
   return (
         
      <div className={dat.carta}>
         <button className={dat.myButton} onClick={props.onClose}>X</button>
         <Link className={dat.linkStyles} to={`/detail/${props.id}`} >
            <h2 className={dat.letras2}>{props.name}</h2>
         </Link>
         <h2 className={dat.letras}>{props.species}</h2>
         <h2 className={dat.letras}>{props.gender}</h2>
         {
   isFav ? (
      <button className={dat.heartStyle} onClick={handleFavorite}>💙</button>
   ) : (
      <button className={dat.heartStyle} onClick={handleFavorite}>🤍</button>
   )
}
         <img className={dat.imgStyle} src={props.image} alt="" />
      </div>
   
   );
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   };
}


export function mapDispatchToProps(dispatch) {
   return {
      addFav: function(character) {dispatch(addFav(character))},
      deleteFav: function(id) {dispatch(deleteFav(id))},
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Card);