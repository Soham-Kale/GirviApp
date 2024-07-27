import image from "../asset/img.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Correctly import useNavigate
import { Box, Typography, Button, Grid } from "@mui/material";
import "./verification.css";
import axios from "axios";

function VerificationPage({ currentNumber }) {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [otpValue, setOtpValue] = useState("");

    const navigate = useNavigate(); // Call useNavigate at the top level of the function component

    function nextPage() {
        navigate('/Home'); // Use navigate instead of Navigate
    }

    function handleChange(e, index) {
        if (isNaN(e.target.value)) return false;
        setOtp([...otp.map((data, indx) => (indx === index ? e.target.value : data))]);

        if (e.target.value === "") {
            e.target.previousSibling?.focus();
        }

        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
    }

    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOtpValue(otp.join(""));  // Join the otp array to form the full otp value
        if (otp.join("").length !== 4) { // Ensure the otpValue length is exactly 4
            alert("Please enter a valid otp");
        } else {
            axios.post("https://girvi-backend-v1.onrender.com/verifyOTP", {
                otpVal: otp.join(""),  // Join the otp array to form the full otp value
                number: currentNumber,
                header,
            })
                .then((resp) => {
                    console.log(resp.data);
                    nextPage(); // Navigate to the next page on successful response
                })
                .catch((error) => console.log(error));
        }
    }

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
                        A 4 digit code has been sent to your +91{currentNumber}
                    </Typography>

                    <Box className="otp-area">
                        {otp.map((data, i) => {
                            return <input
                                key={i} // Add a unique key for each input element
                                type="text"
                                value={data}
                                maxLength={1}
                                //onChange={(e) => { setOtpValue(e.target.value); handleChange(e, i) }} />
                                onChange={(e) => handleChange(e, i)} // Adjusted to avoid redundancy
                            />
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
