import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Request interceptor to add the token to the headers
axios.interceptors.request.use((request) => {
    const token = localStorage.getItem("authToken");  // Retrieve token from local storage
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;  // Add token to Authorization header
    }
    console.log("Request:", request);
    return request;
  }, (error) => {
    return Promise.reject(error);
});

// Response interceptor
axios.interceptors.response.use((response) => {
  console.log("Response:", response);
  return response;
}, (error) => {
  return Promise.reject(error);
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
)