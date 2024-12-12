const express = require("express");
const bodyParser = require('body-parser')
const webRoutes = require('./src/routes/web')
// const db = require("./src/database/database");
// const allRoutes = require("./src/app");

const app = express();
const port = 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/web', webRoutes)
// db.connect((err) => {
//   if (err) {
//     console.log("Koneksi database gagal ", err);
//   } else {
//     console.log("Koneksi database berhasil ...");
//   }
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use("/api/v1", allRoutes);

// const perpusRoutes  = require("src\routes\perpustakaan.js")
// app.use('/perpustakaan', allRoutes)

app.get("/", (req,res) => {
  res.send("Hello world!")
})

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port} ...`);
});
