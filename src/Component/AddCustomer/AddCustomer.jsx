import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { KeyboardBackspace } from '@mui/icons-material'
import "./addCustomer.css"
import axios from 'axios';

export const AddCustomer = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");

  const style={color: 'red'};
  const loan = useNavigate();

  function loanPage() {
    loan('/AddLoan');
  }

  function customerPage(e) {
    e.preventDefault();
    if (!firstname) {
      alert("Please enter a valid firstname");
    } else if (!lastname) {
      alert("Please enter a valid lastname");
    } else if (!address) {
      alert("Please enter a valid address");
    } else if (!email) {
      alert("Please enter a valid email");
    } else if (!phoneNumber) {
      alert("Please enter a valid phone number");
    } else if (!aadhar) {
      alert("Please enter a valid Aadhaar number");
    } else if (!pan) {
      alert("Please enter a valid PAN number");
    } else {
      axios.post("https://girvi-backend-v1.onrender.com/addUser", {
        firstname: firstname,
        lastname: lastname,
        phoneNumber: phoneNumber,
        email: email,
        address: address,
        aadhar: aadhar,
        pan: pan,
      }, {
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
          },
      })
      .then((resp) => {
        console.log("Response:", resp.data);
        navigate('/CustomerPage');
      })
      .catch((error) => console.log("Error:", error));
    }
    loan('/CustomerPage');
  }

  return (
    <Box item component={Box} display='flex' flexDirection='column'>
        <h6 style={{mt: -3}} className='tag'><Button onClick={customerPage} sx={{
          color:"#FFD500",   
          marginRight: "-20px",
          ml: {lg: "50%",  xs: "80px", sm: "20%", md: "26%"},
          "&:hover": { backgroundColor: 'transparent' }
        }}><KeyboardBackspace/></Button> &nbsp; ADD Customers</h6><br />        
        <img className='custProfile'></img>

        <label className='label'>First Name<span style={style}>*</span></label> <br />
        <input className='input' type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

        <label className='label'>Last Name<span style={style}>*</span></label> <br />
        <input className='input' type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}/>

        <label className='label'>Contact Number<span style={style}>*</span></label> <br />
        <input className='input' type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>

        <label className='label'>Email<span style={style}>*</span></label> <br />
        <input className='input' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label className='label'>Address<span style={style}>*</span></label> <br />
        <input className='input' type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>

          <Box className="frow">   
            <Box sx={{
              ml: {lg: "-315px", sm: "-200px", xs: "-100px" , md: "-250px"}
            }}>   
              <label className='label1'>Upload Aadhaar Card :</label> <br />
              <input className='inputBo' type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)}/>
            </Box> 
            <Box >
              <label className='label1'>Upload PAN Card :</label> <br />
              <input className='inputBo' type="text" value={pan} onChange={(e) => setPan(e.target.value)}/>
            </Box> 
          </Box>  

        <Box class="flex-parent jc-center">
          <button onClick={loanPage} className='btn3'><span>Save & Create loan</span></button> &nbsp; &nbsp;  &nbsp; &nbsp;
          <button onClick={customerPage} className='btn4'><span>Save</span> </button> &nbsp; &nbsp;  &nbsp;&nbsp;
        </Box>
    </Box>
  )
}

export default AddCustomer;