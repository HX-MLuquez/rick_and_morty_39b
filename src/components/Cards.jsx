import Card from "./Card";
import style from "../styles/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { prev, next } from "../redux/actions";

export default function Cards({ onClose }) {
  const { characters, numPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(characters);
  const cantCharPerPage = 10;
  // numPage    -> 1        2       3
  let desde = (numPage - 1) * cantCharPerPage; // 0          4     8
  let hasta = numPage * cantCharPerPage; //  4          8     12

  let cantPage = Math.floor(characters.length / cantCharPerPage);

  const viewCharacters = characters?.slice(desde, hasta);
  return (
    <div className={style.cards}>
      {/* <h2>Estamos en el home y podemos mostrar y/o ver nuestras cards</h2> */}
      {viewCharacters?.map((char, index) => {
        return <Card key={char.id} char={char} onClose={onClose} />;
      })}
      <div className={style.paginate}>
        {numPage <= 1 ? null : (
          <button onClick={() => dispatch(prev())}>PREV</button>
        )}
        <h3>{numPage}</h3>
        {numPage >= cantPage ? null : (
          <button onClick={() => dispatch(next())}>NEXT</button>
        )}
      </div>
    </div>
  );
}
