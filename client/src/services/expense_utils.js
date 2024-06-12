import axios from "axios";

// usage of axios -  a library to interact with server

const getAllExpenseItems = async () => {
 
    // server url
  const getItemsUrl = "http://localhost:4000/expenses";
 
  // perform Invocation
  console.log("Final Url is " + getItemsUrl);
 
  // response
  const response = await axios.get(getItemsUrl);
  return response.data;


}

export {getAllExpenseItems};
