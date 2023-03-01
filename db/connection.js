const mysql = require("mysql2");

// Connect to database via mysql2
const db = mysql.createConnection(
    {
      host: "localhost",
      // Your MySQL username,
      user: "root",
      // Your MySQL password
      password: "0206192819891988!Baron",
      database: "election",
    },
    console.log("Connected to the election database.")
  );

  module.exports = db;