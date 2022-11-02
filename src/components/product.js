import { useParams } from "react-router-dom";

import list from "../data";
import Teste from "./teste";

function Product({ item, handleClick }) {
  const itens = useParams();

  const teste = parseInt(itens.id);

  const user = list.find((user) => user.id === teste);
  //const { title, author, price, img } = user;
  //console.log(list.find((user) => user.id === teste));
  //console.log(itens.id);

  //item.filter()
  //console.log(user.img);
  return (
    <section>
      {<Teste key={user.id} item={user} handleClick={handleClick} />}
    </section>
  );
}

//console.log(Product);
export default Product;
