const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  updateData,
  deleteData,
} = require("../controller/dataController");

router.get("/", getData);
router.post("/insert", postData);
router.put("/update/:id", updateData);
router.delete("/delete/:id", deleteData);

module.exports = router;
