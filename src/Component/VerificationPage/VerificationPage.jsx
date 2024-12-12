import image from "../asset/img.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Box, Typography, Button, Grid, Input } from "@mui/material";
import "./verification.css";
import axios from "axios";
import { toast } from 'react-toastify';

function VerificationPage({ currentNumber }) {
    const [otpVal, setOtpVal] = useState(new Array(6).fill(""));
    const navigate = useNavigate();

    function nextPage() {
        navigate('/Home');
    }

    function handleChange(e, index) {
        if (isNaN(e.target.value)) return false;
        setOtpVal([...otpVal.map((data, indx) => (indx === index ? e.target.value : data))]);

        if (e.target.value === "") {
            e.target.previousSibling?.focus();
        }
        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const completeOtp = otpVal.join("");
    
        if (completeOtp.length !== 6) {
            toast("Please enter a valid OTP");
        } else {
            axios.post("https://girvi-backend-v1.onrender.com/verifyOTP", {
                otp: completeOtp,
                phoneNumber: currentNumber,
            }, {
                headers: {
                    'Content-Type': 'application/json',  // Ensure Content-Type is set
                    'Access-Control-Allow-Origin': '*', // Ensure proper CORS handling
                },
            })
            .then((resp) => {
                console.log("Full Response:", resp);
                if (resp.data.token) {
                    console.log("Token:", resp.data.token);
                    // Store token in local storage
                    localStorage.setItem("authToken", resp.data.token);
                    toast("OTP Verified Successfully");
                    nextPage();
                } else {
                    toast("Token not received");
                }
            })
            .catch((error) => console.log("Error:", error));
        }
    };

    return (
        <>
            <Box sx={{ height: '100%' }}>
                <Grid
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: '100%' }}
                >
                    <Grid item>
                        <Box
                            component="img"
                            src={image}
                            sx={{
                                width: { lg: 600, sm: 370, xs: '90%' },
                                height: { lg: 600, sm: 350, xs: 'auto' },
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>

                    <Typography
                        sx={{
                            width: '150px',
                            height: '30px',
                            paddingTop: '10px',
                            textAlign: 'left',
                            marginLeft: '30px',
                            fontFamily: 'Poppins',
                            fontSize: '22px',
                            fontWeight: '600',
                            color: ' #FFD500'
                        }}>
                        Enter OTP
                    </Typography>
                    
                    <Typography
                        sx={{
                            width: '370px',
                            height: '40px',
                            fontFamily: 'Poppins',
                            fontSize: '15px',
                            marginLeft: '30px',
                            fontWeight: '500',
                            paddingTop: '15px',
                            textAlign: 'left',
                            marginBottom: '15px',
                            color: ' #575757'
                        }}>
                        A 6 digit code has been sent to your +91{currentNumber}
                    </Typography>

                    <Box sx={{
                        ml: {xl: "40%", lg: "38%",md: "35%",  sm: "20%", xs: "10%"},
                        width: {sx: "20px", }
                    }} className="otp-area">
                        {otpVal.map((data, i) => {
                            return <input
                                key={i} // Add a unique key for each input element
                                type="text"
                                value={data}
                                maxLength={1}
                                onChange={(e) => handleChange(e, i)} // Adjusted to avoid redundancy
                            />
                        //     <Input
                        //     key={i}
                        //     id={`otp-input-${i}`}
                        //     type="text"
                        //     value={data}
                        //     maxLength={1}
                        //     onChange={(e) => handleChange(e, i)}
                        //     onFocus={(e) => e.target.select()} // Optional: Auto-select the current value when focused
                        //     sx={{ 
                        //         margin: "0 5px", 
                        //         textAlign: 'center',
                        //     }}
                        // />                        
                        })}
                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ mt: { lg: 3, md: 3, sm: 2, xs: 2 } }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: { lg: '15px', md: '14px', sm: '13px', xs: '12px' },
                                fontWeight: '400',
                                textAlign: 'center',
                            }}
                        >
                            You should receive the OTP in
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: { lg: '15px', md: '14px', sm: '13px', xs: '12px' },
                                fontWeight: '400',
                                textAlign: 'center',
                                color: '#FFD500',
                                ml: 1,
                            }}
                        >
                            30 seconds
                        </Typography>
                    </Box>

                    <Box display='flex' alignItems='center' justifyContent='center' sx={{ my: 1 }}>
                        <Button variant='contained'
                            onClick={handleSubmit}
                            sx={{ backgroundColor: "#FFD500", width: '235px', height: '50px', borderRadius: '20px', boxShadow: 'none' }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontWeight: '700',
                                }}
                            >
                                Verify
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </>
    );
}

export default VerificationPage;
