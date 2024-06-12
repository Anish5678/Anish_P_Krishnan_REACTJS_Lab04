import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { getAllPayeeNames, newExpenseItem } from "../services/expense_utils";
import { useRef } from "react";

const ExpenseCreator = ({ expenseItems }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const expenseDescriptionRef = useRef(null);
  const payeeNameRef = useRef(null);
  const priceRef = useRef(null);
  const expenseDateRef = useRef(null);

  const allPayeeNames = getAllPayeeNames(expenseItems);

  const handleAddExpense = async (event) => {
    event.preventDefault();

    const expenseDescription = expenseDescriptionRef.current.value;
    const payeeName = payeeNameRef.current.value;
    const price = parseFloat(priceRef.current.value);
    const expenseDate = new Date(expenseDateRef.current.value);

    console.log("Expense Description " + expenseDescription);
    console.log("Payee Name " + payeeName);
    console.log("Price " + price);
    console.log("Expense Date " + expenseDate);

    const createExpenseItem = {
      expenseDescription: expenseDescription,
      payeeName: payeeName,
      price: price,
      date: expenseDate,
    };

    console.log("Create Expense Item->" + JSON.stringify(createExpenseItem));
    // eslint-disable-next-line no-undef
    const response = await newExpenseItem(createExpenseItem);
    console.log("Response is " + JSON.stringify(response));

    handleClose();
  };

  function displayExpenseDialog() {
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="float-end">
          Add New Expense
        </Button>{" "}
        <br></br><br></br>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ background: "#dce995" }}>
            <Modal.Title style={{ textAlign:"center" }}>Add New Expense
            <h6 style={{textAlign:"left", color:"red"}}>Read the below instructions before proceeding:</h6>
           <h6>Make sure you fill all the fields where * is provided</h6>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>{createExpenseForm()}</Modal.Body>
        </Modal>
      </>
    );
  }

  function createExpenseForm() {
    return (
      <Form onSubmit={handleAddExpense}>
        <Form.Group className="mb-3" controlId="payeeName">
          <Form.Label>
            Name<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select aria-label="Default select example" ref={payeeNameRef}>
            <option>Select a Payee</option>

            {allPayeeNames.map((payeeName) => {
              return (
                <option key={payeeName} value={payeeName}>
                  {payeeName}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>
            Product Purchased/Description<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter expense description"
            ref={expenseDescriptionRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>
            Price<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            ref={priceRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>
            Date<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="date" ref={expenseDateRef} />
        </Form.Group>
        
        <Button variant="secondary" onClick={handleClose} className="float-end">
          Close
        </Button>
        <Button variant="primary" type="submit" className="float-end">
          Submit
        </Button>
        
      </Form>
    );
  }

  return <div>{displayExpenseDialog()}</div>;
};

export { ExpenseCreator };
