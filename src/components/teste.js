import "../styles/recomend.css";
function Teste({ item, handleClick }) {
  // console.log(item.author);
  const { title, author, price, img } = item;
  return (
    <div className="div_prin">
      <div className="cards_i">
        <div className="image_box_i">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="cards_i">
        <hr />

        <div className="details_i">{title}</div>
        <hr />

        <div className="title_i">{author}</div>
        <div>
          <p>
            DE R$ <span>{price.toFixed(2) * 0.8}</span>
          </p>
        </div>
        <div className="author_i">POR -R$ {price.toFixed(2)}</div>
        <div>
          <p>
            em ate 2x de <span>{price.toFixed(2) * 0.5}</span>
          </p>
          <div>SEM JUROS</div>
        </div>
        <hr />
        <button className="button_i" onClick={() => handleClick(item)}>
          COMPRAR
        </button>
      </div>
    </div>
  );
}

export default Teste;
