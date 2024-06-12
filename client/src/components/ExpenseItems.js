import React from 'react';
import Table from 'react-bootstrap/Table';



const ExpenseItems = ({expenseItems}) => {
  
  function expenseItemsTable() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Description</th>
            <th>Price</th>
            <th>Payee</th>
          </tr>
        </thead>
        <tbody>
          {expenseItems.map( (expenseItem, index) => {

              return (

                <tr key ={index}>
                  <td>{index + 1}</td>
                  <td>{expenseItem.date}</td>
                  <td>{expenseItem.expenseDescription}</td>
                  <td>{expenseItem.price}</td>
                  <td>{expenseItem.payeeName}</td>
                  
                  
                </tr>
              );
            })
          }
         
        </tbody>
      </Table>
    );
  }
    return (

    <div>
      {expenseItemsTable()}
    </div>

  )
}

export {ExpenseItems}