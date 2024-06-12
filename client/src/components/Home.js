import React from "react";
import { useEffect } from "react";
import { getAllExpenseItems } from "../services/expense_utils";

import { useState } from 'react';

import{ ExpenseItems } from './ExpenseItems';

import { Container } from 'react-bootstrap';
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
        <h2>Expense Items</h2>
        <div>
           {
            <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
           }
              
           
        </div>
        </Container>
    )
}

export {Home}