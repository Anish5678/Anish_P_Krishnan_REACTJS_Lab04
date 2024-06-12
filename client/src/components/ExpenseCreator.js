import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ExpenseCreator = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function displayExpenseDialog() {
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="float-end">
          Add New Expense
        </Button>{" "}
        <br></br>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Expense</Modal.Title>
          </Modal.Header>

          <Modal.Body>{createExpenseForm()}</Modal.Body>

        </Modal>
      </>
    );
  }

  function createExpenseForm() {
    return (
      <Form >
        <Form.Group className="mb-3" controlId="payeeName">
          <Form.Label>
            Name<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select a Payee</option>
             <option value="1">One</option>
             <option value="2">Two</option>
             <option value="3">Three</option>
          </Form.Select>

         
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>
            Product Purchased/Description<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter expense description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>
            Price<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="number" placeholder="Enter price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>
            Date<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Form>
    );
  }

  return <div>{displayExpenseDialog()}</div>;
};

export { ExpenseCreator };
