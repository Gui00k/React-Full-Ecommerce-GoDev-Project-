const express = require("express");
const accountSid = "AC64dd1cf6d6bde99a44123418b4ed971c";
const authToken = "3ab2b56ea8c97c29597bd43d5ebfdf89";
const client = require("twilio")(accountSid, authToken);
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

// rotas

//create / insert

app.post("/todos", async (req, res) => {
  try {
    //aqui voce declara os argumentos que recebe pelo body em uma variavel
    const { id, title, price, total, qtd } = req.body;

    const newCrud = await pool.query(
      "INSERT INTO cart (id, titulo, price, total, qtd) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [id, title, price, total, qtd]
    );
    console.log(newCrud);
    sendTextMessage(id, price, title, total, qtd);
    res.json(newCrud.rows[0]);
    //ver o que tem no body do conteudo
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

//get all

app.get("/todos", async (req, res) => {
  try {
    const GetAll = await pool.query("SELECT * FROM crud");
    res.json(GetAll.rows);
  } catch (err) {
    console.error(err.mensage);
  }
});

//GET ONE
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM crud WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
    console.log(req.params);
  } catch (err) {
    console.error(err.message);
  }
});

//update table

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = await req.body;
    const updateCrud = await pool.query(
      "UPDATE crud SET description = $1 WHERE todo_id =$2",
      [description, id]
    );
    res.json("Crus has update");
  } catch (err) {
    console.log(err.mensage);
  }
});

//delet from table
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCrud = await pool.query("DELETE FROM crud WHERE todo_id = $1", [
      id,
    ]);
    console.log(req.params);
    res.json("Deleted has be sucess");
  } catch (err) {
    console.log(err.mensage);
  }
});

app.listen(8080, () => {
  console.log("Server started on port 5000");
});

function sendTextMessage(id, price, title, total, qtd) {
  let body = `Obrigado Guilherme Machado por comprar conosco:
  Seu pedido: ${title}
  Preco: ${price}
  Quantidade: ${qtd}
  total: ${total}`;
  client.messages
    .create({
      body: body,
      messagingServiceSid: "MG80885f4dfe9a97200d9aee971f3ad756",
      to: "+5562993775950",
    })
    .then((message) => console.log(message.sid))
    .done();
}
