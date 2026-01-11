const express = require("express");
const router = express.Router();

const {
  addIncome,
  getAllIncome,
} = require("../controllers/income.controller");

// POST - Add income
router.post("/", addIncome);

// GET - Get all income
router.get("/", getAllIncome);

module.exports = router;
