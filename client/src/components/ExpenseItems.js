import React from 'react';
import Table from 'react-bootstrap/Table';



const ExpenseItems = ({expenseItems}) => {
  
  function expenseItemsTable() {
    return (
      <Table striped bordered hover>
        <thead class="table-dark">
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
                  <td class="bg-secondary bg-opacity-50">{index + 1}</td>
                  <td class="bg-warning">{expenseItem.date}</td>
                  <td class="bg-info">{expenseItem.expenseDescription}</td>
                  <td class="bg-danger">{expenseItem.price}</td>
                  <td class="bg-success bg-opacity-75">{expenseItem.payeeName}</td>
                  
                  
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