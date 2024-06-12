
import axios from "axios"



const getAllExpenseItems = async () => {
 
  
  const getItemsUrl = "http://localhost:4000/expenses";
 
 
  console.log("Final Url is " + getItemsUrl);
 
 
  const response = await axios.get(getItemsUrl);
  return response.data;


}

const newExpenseItem = async (newExpenseItem) => {

    const postItemUrl = "http://localhost:4000/expenses";

    const response = await axios.post(postItemUrl, newExpenseItem, {
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    return response.data;
}

const getAllPayeeNames = (expenseItems) => {
    const uniquePayeeNames = [];
  
    expenseItems.forEach((expenseItem) => {
      let payeeName = expenseItem.payeeName;
      if (!uniquePayeeNames.includes(payeeName)) {
        uniquePayeeNames.push(payeeName);
      }
    });
    return uniquePayeeNames;
  };


export {getAllExpenseItems, getAllPayeeNames, newExpenseItem};
