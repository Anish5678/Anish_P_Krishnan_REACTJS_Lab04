import React from "react";
import { useEffect } from "react";
import { getAllExpenseItems } from "../services/expense_utils";

import { useState } from 'react';

import{ ExpenseItems } from './ExpenseItems';

import { Container } from 'react-bootstrap';
import { ExpenseCreator } from "./ExpenseCreator";
import { PendingExpenseByPayees } from "./PendingExpenseByPayee";
import "../index.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {

    const [expenseItems, setExpenseItems] = useState([]);


    useEffect( () => {
 
        const getAllItemsInvoker = async () => {
   
          const response = await getAllExpenseItems();
          console.log("Response is " + JSON.stringify(response));

          setExpenseItems(response)
        }
   
        getAllItemsInvoker();
   

      }, [])
  
        return (
            
        <Container>
            
             {<ExpenseCreator expenseItems={expenseItems}></ExpenseCreator>}
        <h5>Expense Items</h5>
        <div>
           {<ExpenseItems expenseItems={expenseItems}></ExpenseItems>}
          <br></br>
           {<PendingExpenseByPayees expenseItems={expenseItems}></PendingExpenseByPayees>}
        </div>
        </Container>
    )
}

export {Home}