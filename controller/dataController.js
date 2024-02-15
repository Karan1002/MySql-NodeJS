const connection = require("../config/connectMysqlDB");

const getData = (req, res) => {
  try {
    connection.query("SELECT * FROM users", (error, results, fields) => {
      res.send(results);
    });
  } catch (error) {
    console.log(error);
  }
};

const postData = (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    // const data = { name: "karan", password: "1234", user_type: "visitor" };
    connection.query(
      "INSERT INTO users SET ?",
      data,
      (error, results, fields) => {
        if (error) throw error;
        res.send("sucess");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const updateData = (req, res) => {
  const data = [
    req.body.name,
    req.body.password,
    req.body.user_type,
    req.params.id,
  ];
  //   const data = ["tony", "12345678", "hr", 6];
  connection.query(
    "UPDATE users SET name=?,password=?,user_type=? WHERE id=?",
    data,
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
};

const deleteData = (req, res) => {
  //   console.log(req.params.id);
  connection.query(
    `DELETE FROM users WHERE id= ${req.params.id}`,
    (error, results, fields) => {
      if (error) throw error;
      res.send(results.affectedRows);
    }
  );
  res.send("delete");
};

module.exports = { getData, postData, updateData, deleteData };
