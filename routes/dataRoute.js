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
router.put("/update", updateData);
router.delete("/delete", deleteData);

module.exports = router;
