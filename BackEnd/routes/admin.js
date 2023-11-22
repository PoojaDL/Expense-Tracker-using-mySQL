const express = require("express");

const expenseController = require("../controllers/expense");

const router = express.Router();

router.post("/addExpense", expenseController.postExpense);

router.get("/getExpenses", expenseController.getExpenses);

router.get("/deleteExpense/:id", expenseController.deleteExpense);

router.put("/updateExpense/:id", expenseController.updateExpense);

module.exports = router;
