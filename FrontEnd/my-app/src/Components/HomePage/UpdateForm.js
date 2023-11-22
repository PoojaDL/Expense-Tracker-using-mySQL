import { useRef } from "react";
import styles from "./UpdateForm.module.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const UpdateForm = (props) => {
  const expenseInput = useRef();
  const descInput = useRef();
  const categoryInput = useRef();

  const closeForm = () => {
    props.closeBtn();
  };

  const expenseFormUpdate = (event) => {
    event.preventDefault();

    const dataEntered = {
      expense: expenseInput.current.value,
      description: descInput.current.value,
      category: categoryInput.current.value,
    };

    axios
      .put(
        `http://localhost:4000/home/updateExpense/${props.data.id}`,
        dataEntered
      )
      .then(() => {
        props.callfunction();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.overlay}>
      <div className={`${styles.updateform} p-4 `}>
        <Form onSubmit={expenseFormUpdate}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Expense</Form.Label>
            <Form.Control
              type="number"
              defaultValue={props.data.expense}
              ref={expenseInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.data.description}
              ref={descInput}
            />
          </Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            defaultValue={props.data.category}
            ref={categoryInput}
          >
            <option value="Petrol">Petrol</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Snacks">Snacks</option>
          </Form.Select>
          <div className="p-2">
            <Button className="me-2 btn-dark" type="submit">
              Update Expense
            </Button>
            <Button className="btn-danger" type="button" onClick={closeForm}>
              Close
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateForm;
