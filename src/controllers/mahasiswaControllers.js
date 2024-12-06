const db = require("../database/database");

// Read
const getAll = (req, res) => {
  const query = `
    SELECT nim, nama, email, kelas, jenis_kelamin, nama_prodi AS 
    program_studi, semester, created_at, updated_at 
    FROM mahasiswa 
    INNER JOIN program_studi ON id_program_studi = program_studi.id
  `;
  db.query(query, [], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "get mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "get mahasiswa berhasil",
        mahasiswa: result,
      });
    }
  });
};

const getOne = (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT nim, nama, email, kelas, jenis_kelamin, nama_prodi AS 
    program_studi, semester, created_at, updated_at 
    FROM mahasiswa 
    INNER JOIN program_studi ON id_program_studi = program_studi.id 
    WHERE mahasiswa.id = ?
  `;
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "get mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "get mahasiswa berhasil",
        mahasiswa: result[0],
      });
    }
  });
};

// Create
const insert = (req, res) => {
  const mahasiswa = req.body;
  const query = "INSERT INTO mahasiswa SET ?";
  db.query(query, mahasiswa, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "insert mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(201).json({
        message: "insert mahasiswa berhasil",
      });
    }
  });
};

// Update
const update = (req, res) => {
  const id = req.params.id;
  const mahasiswa = req.body;
  const query = `UPDATE mahasiswa SET ? WHERE id = ?`;
  db.query(query, [mahasiswa, id], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "update mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "update mahasiswa berhasil",
        mahasiswa: mahasiswa,
      });
    }
  });
};

// Delete
const remove = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM mahasiswa WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "delete mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "delete mahasiswa berhasil",
      });
    }
  });
};

// export
module.exports = {
  getAll,
  insert,
  update,
  remove,
  getOne,
};
