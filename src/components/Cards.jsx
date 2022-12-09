import Card from './Card';
import estiloss from "./Cards.module.css";

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className={estiloss.cartas}>
      {
         characters.map(char => <Card
         key={char.id}
         id={char.id}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         onClose={()=> onClose(char.id)}
         />)
      }
   </div>;
}
