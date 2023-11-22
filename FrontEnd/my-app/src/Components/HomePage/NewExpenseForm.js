import { Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import axios from "axios";

const NewExpenseForm = (props) => {
  const [isNewAdded, setNewItem] = useState("");
  const [showExpense, setShowExpense] = useState(false);
  const expenseInput = useRef();
  const descInput = useRef();
  const categoryInput = useRef();

  const expenseFormSubmit = (event) => {
    event.preventDefault();

    const dataEntered = {
      expense: expenseInput.current.value,
      description: descInput.current.value,
      category: categoryInput.current.value,
    };

    if (expenseInput.current.value && descInput.current.value) {
      console.log(dataEntered);
      axios
        .post("http://localhost:4000/home/addExpense", dataEntered)
        .then((res) => {
          console.log(res);
          props.fetchExpenses();
        })
        .catch((err) => console.log(err));
    } else {
      setNewItem("Enter valid inputs");
    }

    setTimeout(() => {
      setNewItem("");
    }, 2000);
  };

  const openExpense = () => {
    setShowExpense(true);
  };

  const closeExpense = () => {
    setShowExpense(false);
  };

  return (
    <div
      style={{
        width: "60%",
        border: "2px solid black",
        borderRadius: "1.5rem",
        background: "white",
      }}
      className="p-5 mx-auto my-5"
    >
      {isNewAdded && (
        <div
          style={{ background: "darkred", color: "white" }}
          className="m-3"
          align="center"
        >
          <p>
            <b>{isNewAdded}</b>
          </p>
        </div>
      )}
      {showExpense && (
        <Form onSubmit={expenseFormSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Expense</Form.Label>
            <Form.Control type="number" ref={expenseInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" ref={descInput} />
          </Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select aria-label="Default select example" ref={categoryInput}>
            <option value="Petrol">Petrol</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Snacks">Snacks</option>
          </Form.Select>
          <div className="pt-5 mx-auto">
            <Button className="me-1 btn-light btn-outline-dark" type="submit">
              Add Expense
            </Button>
            <Button
              className="btn-dark btn-outline-light"
              type="button"
              onClick={closeExpense}
            >
              Close
            </Button>
          </div>
        </Form>
      )}
      {!showExpense && (
        <div align="center">
          <Button className="btn-dark" type="button" onClick={openExpense}>
            Add New Expense
          </Button>
        </div>
      )}
    </div>
  );
};

export default NewExpenseForm;
