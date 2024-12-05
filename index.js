const express = require("express");
const db = require("./src/database/database");
const allRoutes = require("./src/app");
const app = express();
const port = 3001;

db.connect((err) => {
  if (err) {
    console.log("Koneksi database gagal ", err);
  } else {
    console.log("Koneksi database berhasil ...");
  }
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", allRoutes);

const perpusRoutes  = require("src\routes\perpustakaan.js")
app.use('/perpustakaan', allRoutes)

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port} ...`);
});
