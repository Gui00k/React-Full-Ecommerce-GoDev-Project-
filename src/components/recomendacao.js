import list from "../data";
import "../styles/recomendacao.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Recomendacao() {
  const item = useParams();

  const itemId = parseInt(item.id);
  //linka = "/product/" + itemId;
  console.log(itemId);
  return (
    <div className="teste">
      {list
        .filter((item) => {
          return item.category === itemId;
        })
        .map((item) => {
          return (
            <div key={item.id} className="row">
              <div className="image_boxing">
                <img src={item.img} alt="" />
              </div>
              <div>
                <div className="title">{item.title}</div>
                <div className="author">{item.author}</div>
                <div className="detalhe">Preço -R$ {item.price.toFixed(2)}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Recomendacao;
