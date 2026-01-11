const db = require("../config/db");

// ✅ ADD INCOME
exports.addIncome = (req, res) => {
  const { title, amount, date } = req.body;

  // Basic validation
  if (!title || !amount || !date) {
    return res.status(400).json({
      message: "Title, amount and date are required",
    });
  }

  const sql =
    "INSERT INTO income (title, amount, date) VALUES (?, ?, ?)";

  db.query(sql, [title, amount, date], (err, result) => {
    if (err) {
      console.error("Add income error:", err);
      return res.status(500).json({
        message: "Failed to add income",
      });
    }

    res.status(201).json({
      message: "Income added successfully",
      incomeId: result.insertId,
    });
  });
};

// ✅ GET ALL INCOME
exports.getAllIncome = (req, res) => {
  const sql = "SELECT * FROM income ORDER BY date DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Get income error:", err);
      return res.status(500).json({
        message: "Failed to fetch income",
      });
    }

    res.status(200).json(results);
  });
};
