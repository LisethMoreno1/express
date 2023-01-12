const express =require('express');
const router = require('./controlador');
const app = express();
const port =8088;
app.use(express.json())

app.get('/', (req, res) => {
  res.send("hola");
  res.end();
})


app.use("/controlador", router)



























app.listen(port ,() => {
  console.log("corriendo")
});


