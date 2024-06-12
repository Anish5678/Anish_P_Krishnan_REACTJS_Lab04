import {getAllPayeeNames, getTotalExpenseByPayee, getGrandTotalExpenses} from "../services/expense_utils";
  
  import { Table } from "react-bootstrap"
  
  const PendingExpenseByPayees = ({ expenseItems }) => {
  
    const payeeNames = getAllPayeeNames(expenseItems);
  
    const getPendingAmount = (payeeName) => {
  
      // 700
      const totalExpenses = getGrandTotalExpenses(expenseItems);
      
      //100
      const totalExpensesByPayee 
        = getTotalExpenseByPayee(expenseItems, payeeName);
  
      //350
      const halfAmount = totalExpenses / 2;
  
      // 100 >= 350 [FALSE]
      if (totalExpensesByPayee >= halfAmount) {
        return 0;
      } else {
        // 350 - 100 -> 250 
        return (halfAmount - totalExpensesByPayee);
      }
    }
  
  
    const displayTable = () => {
  
      return (
  
        <Table striped bordered hover>
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Payee</th>
              <th>Contributed Amount</th>
              <th>Pending Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              payeeNames.map((payeeName, index) => (
                <tr key={index + 1}>
                  <td class="bg-secondary bg-opacity-50">{index + 1}</td>
                  <td class="bg-info bg-opacity-75">{payeeName}</td>
                  <td class="bg-danger bg-opacity-50">{getTotalExpenseByPayee(expenseItems, payeeName)}</td>
                  <td class="bg-danger bg-opacity-75">{getPendingAmount(payeeName)}</td>
                </tr>
              ))
            }
  
  
            <tr>
              <td class="bg-secondary bg-opacity-50"></td>
              <td class="bg-info">Grand Total</td>
              <td class="bg-success bg-opacity-75">{getGrandTotalExpenses(expenseItems)}</td>
              <td></td>
            </tr>
  
  
          </tbody>
        </Table>
      )
  
    }
  
    return (<div>
   <h5>Pending Expenses By Payee</h5> 
      
      {
        displayTable()
      }
    </div>)
  }
  export { PendingExpenseByPayees }