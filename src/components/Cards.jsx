import Card from "./Card";
import './Cards.css'

export default function Cards({characters, onClose, seteandoTitle}) {
   console.log(characters)
  return (
    <div className="cards">
      <h2>Estamos en el home y podemos mostrar y/o ver nuestras cards</h2>
      {
         characters?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={onClose} seteandoTitle={seteandoTitle}/>
         })
      }

      {/* id={Rick.id}
      name={Rick.name}
      status={Rick.status}
      species={Rick.species}
      gender={Rick.gender}
      origin={Rick.origin.name}
      image={Rick.image}
      onClose={() => window.alert("Emulamos que se cierra la card")} */}
    </div>
  );
}
