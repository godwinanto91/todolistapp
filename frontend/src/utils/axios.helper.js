import axios from "axios";

// Common headers for API requests
const headerData = {
  headers: {
    "X-CLRPT-TransactionID": parseInt(Date.now() + Math.random()), // Unique transaction ID
    "X-CLRPT-Application": "TO_DO_LIST" // Application identifier
  },
};

// Function to make a POST API request
const postApiRequest = async (url, body) => {
  const result = await axios.post(url, body, headerData).then((r) => {
    return r;
  });
  return result;
};

// Function to make a PUT API request
const putApiRequest = async (url, body) => {
  const result = await axios.put(url, body, headerData).then((r) => {
    return r;
  });
  return result;
};

// Function to make a GET API request
const getApiRequest = async (url) => {
  const result = await axios.get(url, headerData).then((r) => {
    return r;
  });
  return result;
};

// Function to make a DELETE API request
const deleteApiRequest = async (url) => {
  const result = await axios.delete(url, headerData).then((r) => {
    return r;
  });
  return result;
};

const manageToDoList = (path) => process.env.REACT_APP_TO_DO_API + path;

export { postApiRequest, putApiRequest, getApiRequest, deleteApiRequest, manageToDoList };
