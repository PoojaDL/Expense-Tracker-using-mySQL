const Expense = require("../models/expense");

exports.postExpense = (req, res, next) => {
  console.log(req.body);
  const expense = req.body.expense;
  const category = req.body.category;
  const description = req.body.description;
  Expense.create({
    expense: expense,
    category: category,
    description: description,
  })
    .then((result) => {
      console.log(result);
      return res.json(result);
    })
    .catch((err) => console.log(err));
};

exports.getExpenses = (req, res, next) => {
  console.log("Get All Expenses");
  Expense.findAll()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => console.log(err));
};

// exports.getUser = (req, res, next) => {
//   console.log("GetUser");
//   console.log(req.params.id);
//   User.findByPk(req.params.id)
//     .then((result) => {
//       console.log(result);
//       res.send(result);
//       return res.json(result);
//     })
//     .catch((err) => console.log(err));
// };

exports.deleteExpense = (req, res, next) => {
  console.log("DeleteRequest");
  console.log(req.params.id);
  Expense.findByPk(req.params.id)
    .then((product) => {
      const data = product.destroy();
      // console.log(data);
      return data;
    })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.updateExpense = (req, res, next) => {
  console.log("UpdateRequest");
  const updatedExpense = req.body.expense;
  const updatedCategory = req.body.category;
  const updatedDescription = req.body.description;
  Expense.findByPk(req.params.id)
    .then((product) => {
      product.expense = updatedExpense;
      product.category = updatedCategory;
      product.description = updatedDescription;
      return product.save();
    })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};
