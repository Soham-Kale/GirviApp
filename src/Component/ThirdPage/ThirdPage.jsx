import { useNavigate } from "react-router-dom";
import image from "../asset/img.png"
import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function ThirdPage() {

    const [businessName, setBusinessName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const add = useNavigate();
    function next() {
        add('/Home');
    }

    return(
        <>
            <Box sx={{ height: '100vh', fontSize: "62.5%" }}>
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
                            width: { lg: 700, sm: '67%', xs: '66%' },
                            height: { lg: 630, sm: 'auto', xs: 'auto' },
                            objectFit: 'cover',
                        }}
                    />
                </Grid>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '30px',
                    fontWeight: '700',
                    textAlign: 'center',
                    height: '45px',
                    marginTop: '-90px', // Move the "Register" text 40px above its current position
                }}>
                    Regi
                    <Box component="span" sx={{ color: '#FFD500' }}>ster</Box>
                </Typography>

                <Typography variant="h6"
                    sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        height: '25px',
                        marginBottom: '16px'
                    }}
                >Create your new account</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                        <TextField 
                                sx={{ 
                                    width: { lg: "300px", sm: "250px", xs: "250px"},
                                    height: { lg: "46px", sm: "40px", xs: "30px"},
                                    mb: {lg: "15px", sm: "20px", xs: "30px"},
                                    mt: { sx: "3px", xs: "3px" }
                                }}
                        placeholder="Business Name *" />
                        <TextField sx={{ 
                            width: { lg: "300px", sm: "250px", xs: "250px"},
                            height: { lg: "46px", sm: "40px", xs: "30px"},
                            mb: {lg: "15px", sm: "20px", xs: "30px"},
                         }} placeholder="First Name *"/>
                        <TextField sx={{ 
                            width: { lg: "300px", sm: "250px", xs: "250px"},
                            height: { lg: "46px", sm: "40px", xs: "30px"},
                            mb: {lg: "15px", sm: "20px", xs: "30px"},
                         }} placeholder="Last Name *"/>
                        <TextField sx={{ 
                            width: { lg: "300px", sm: "250px", xs: "250px"},
                            height: { lg: "46px", sm: "40px", xs: "30px"},
                            mb: {lg: "15px", sm: "20px", xs: "30px"},
                         }} placeholder="Mobile Number  *"/>
                </Box>

                <Typography sx={{
                    height: '5px',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    marginTop: '5px',
                    paddingLeft: '10px',
                    color: '#000000',
                    fontWeight: '400',
                    textAlign: 'center',
                }}>By signing up you agree to our
                    <Box component="span" sx={{ color: '#FFD500' }}> Terms & Conditions</Box> <br />
                    and <Box component="span" sx={{ color: '#FFD500' }}> Privacy Policy</Box>
                </Typography>

                <Box display='flex' alignItems='center' justifyContent='center' sx={{ my: 6 }}>
                    <Button variant='contained' onClick={next} sx={{ backgroundColor: "#FFD500", width: '230px', height: '45px', borderRadius: '20px', boxShadow: 'none' }}>
                        <Typography sx={{
                            color: 'white',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontWeight: '700',
                        }}>Sign Up</Typography>
                    </Button>
                </Box>

                <Typography sx={{
                    height: '5px', fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '400',
                    textAlign: 'center',
                    mt: { lg: "-40px", sx: "-45px", xs: "-45px"}
                }}>Already have an Account?  <Button onClick={next} sx={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '400',
                    textAlign: 'center',
                    color: ' #FFD500',
                }}>Log In</Button></Typography>
            </Grid>
        </Box>
        </>
    )
}

export default ThirdPage;
