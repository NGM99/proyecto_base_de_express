// Módulos
const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
// Acá falta uno... 😇

// Configuración
app.use(express.static("public"));
// Acá falta el template engine

app.set("view engine", "ejs");
app.set("views", "./src/views");

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.get("/", (req, res) => {
  res.render("index", {
    menu: [
      {
        nombre: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos U$S 65.50",
      },
      {
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra U$S 47.00",
      },
      {
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar U$S 27.50",
      },
      {
        nombre: "Espárragos blancos",
        descripcion:
          "Espárragos blancos con vinagreta de verduras y jamón ibérico U$S37.50",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log("Servidor arriba en el puerto 3000 🤓👌");
});
