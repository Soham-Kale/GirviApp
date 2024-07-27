import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Ballot, OtherHouses, People, PermIdentity } from '@mui/icons-material';
import './home.css'


function Home() {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <Typography variant='h5' sx={{ mt: "10px", 
                ml: {lg: "30%",  xs: "10px", sm: "24%", md: "26%"}}} className='styleOfVarient'> Home</Typography>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Box flexDirection={"column"} sx={{ padding: 3, ml: "-12px" }}>
                    <Box1 />
                    <Box sx={{ marginTop: 3 }}>
                        <Box3 />
                    </Box>
                </Box>

                <Box sx={{ padding: 3, ml: "-5px" }} >
                    <Box2 />
                    <Box sx={{ marginTop: 3 }}>
                        <Box4 />
                    </Box>
                </Box>
            </Box>
            <CustomerInfo />
        </Box>
    )
}

function Box1() {
    return (
        <>
            <Box className='styleForBox1'>
                <Grid item>
                    <Typography className='styleForInt'>Total Interest</Typography>
                    <Typography className='styleForInt'>20,000</Typography> <br />
                </Grid>

                <Box>
                    <Typography display='inline' className='receivedAmount' variant='bold'>Received :
                        <Box variant='bold' sx={{
                            fontFamily: 'Inter',
                            display: 'inline',
                            width: '100px',
                            fontSize: '12px',
                            fontWeight: '550',
                            color: '#4CFA7E',
                            textAlign: 'center',
                        }}>12000</Box>
                    </Typography>
                </Box>

                <Typography display='inline' variant='bold' className='pendingAmt'>Pending :
                    <Box variant='bold' sx={{
                        fontFamily: 'Inter',
                        display: 'inline',
                        width: '100px',
                        fontSize: '12px',
                        fontWeight: '550',
                        color: '#FF0000',
                        textAlign: 'center',
                    }}>8000</Box>
                </Typography>
            </Box>
        </>
    )
}

function Box2() {
    return (
        <>
            <Box className='styleForBox1'>
                <Box>
                    <Typography className='styleForInt'>Total Principal </Typography>
                    <Typography className='styleForInt'>20,000</Typography> <br />
                </Box>

                <Box>
                    <Typography display='inline' className='receivedAmount' variant='bold'>Received :
                        <Box variant='bold' sx={{
                            fontFamily: 'Inter',
                            display: 'inline',
                            width: '100px',
                            fontSize: '12px',
                            fontWeight: '550',
                            color: '#4CFA7E',
                            textAlign: 'center',
                        }}>12000</Box>
                    </Typography>
                </Box>

                <Typography display='inline' variant='bold' className='pendingAmt'>Pending :
                    <Box variant='bold' sx={{
                        fontFamily: 'Inter',
                        display: 'inline',
                        width: '100px',
                        fontSize: '12px',
                        fontWeight: '550',
                        color: '#FF0000',
                        textAlign: 'center',
                    }}>8000</Box>
                </Typography>
            </Box>
        </>
    )
}

function Box3() {
    return (
        <>
            <Box className='styleForBox1'>
                <Box>
                    <Typography className='styleForInt'>Total</Typography>
                </Box>

                <Box>
                    <Typography sx={{
                        height: '21px',
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: '550',
                        marginTop: '15px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5px',
                        textAlign: 'center',
                    }}>Customers : 300</Typography>
                    <Typography display='inline' className='receivedAmount' variant='bold'>Loans :
                        <Box variant='bold' sx={{
                            fontFamily: 'Inter',
                            display: 'inline',
                            fontSize: '12px',
                            fontWeight: '550',
                            color: '#4CFA7E',
                            textAlign: 'center',
                        }}>576</Box>
                    </Typography>
                </Box>

                <Typography display='inline' variant='bold' className='pendingAmt'>Closed :
                    <Box variant='bold' sx={{
                        fontFamily: 'Inter',
                        display: 'inline',
                        width: '100px',
                        fontSize: '12px',
                        fontWeight: '550',
                        color: '#FF0000',
                        textAlign: 'center',
                    }}>243</Box>
                </Typography>
            </Box>
        </>
    )
}

function Box4() {
    return (
        <>
            <Box className='styleForBox1'>
                <Box>
                    <Typography className='styleForInt'>Total Weight </Typography>
                </Box>

                <Box>
                    <Typography sx={{
                        height: '21px',
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: '550',
                        marginTop: '15px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5px',
                        textAlign: 'center',
                    }}>Gross : 100 gm</Typography>
                </Box>

                <Typography sx={{
                    height: '21px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '550',
                    marginTop: '15px',
                    textAlign: 'center',
                }}>Net : 100 gm</Typography>
            </Box>
        </>
    )
}

function CustomerInfo() {

    const [activeButton, setActiveButton] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = (button) => {
        setActiveButton(button);
        switch (button) {
            case 'home':
                navigate('/Home');
                break;
            case 'customer':
                navigate('/CustomerPage');
                break;
            case 'dues':
                navigate('/Dues');
                break;
            case 'account':
                navigate('/Account');
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Typography sx={{ml: {lg: "40%",  xs: "14%", sm: "32%", md: "35%"}}} variant='p'>Recent Transactions</Typography>
            <Box className="name4">
                <Box className='flex'>
                    <img className='darkCircle' />
                    <Typography className='customeName4'>Soham Kale</Typography>
                    <Typography className='paragra'>03-03-2024</Typography>
                    <Typography className='amount2'>10,000.00</Typography>
                </Box>
            </Box>

            <Box sx={{ mt: "-10px" }} className="name4">
                <Box className='flex'>
                    <img className='darkCircle' />
                    <Typography className='customeName4'>Harsh Kale</Typography>
                    <p className='paragra'>03-03-2024</p>
                    <Typography className='amount2'>10,000.00</Typography>
                </Box>
            </Box>

            <Box  sx={{ position: 'relative', mt: 'auto' }} className='bottom'>
                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <IconButton
                        onClick={() => handleButtonClick('home')}
                        sx={{ color: activeButton === 'home' ? 'blue' : 'inherit'}}
                    >
                        <OtherHouses sx={{ mb: "35px", mr: "-10px" , mt: "5px"}}/>
                        <Button sx={{ mt: "15px", color: "black", ml: "-30px"}}>
                            <Typography sx={{
                                fontSize: "13px",
                                mt: "5px"
                            }}>Home</Typography>
                        </Button>
                    </IconButton>

                    <IconButton
                        onClick={() => handleButtonClick('customer')}
                        sx={{ color: activeButton === 'customer' ? 'blue' : 'inherit' }}
                    >
                        <People sx={{ mb: "35px", mr: "-10px" , mt: "5px"}} />
                        <Button sx={{ mt: "15px", color: "black", ml: "-50px" }}>
                            <Typography sx={{
                                fontSize: "13px",
                                mt: "5px"
                            }}>Customer</Typography>
                        </Button>
                    </IconButton>

                    <IconButton
                        onClick={() => handleButtonClick('dues')}
                        sx={{ color: activeButton === 'dues' ? 'blue' : 'inherit' }}
                    >
                        <Ballot sx={{ mb: "35px", mr: "-10px", mt: "5px" }} />
                        <Button sx={{ mt: "15px", color: "black", ml: "-32px" }}>
                            <Typography sx={{
                                fontSize: "13px",
                                mt: "5px"
                            }}>Dues</Typography>
                        </Button>
                    </IconButton>

                    <IconButton
                        onClick={() => handleButtonClick('account')}
                        sx={{ color: activeButton === 'account' ? 'blue' : 'inherit' }}
                    >
                        <PermIdentity sx={{ mb: "35px", mr: "-10px", mt: "5px" }} />
                        <Button sx={{ mt: "15px", color: "black", ml: "-40px" }}>
                            <Typography sx={{
                                fontSize: "13px",
                                mt: "5px"
                            }}>Account</Typography>
                        </Button>
                    </IconButton>
                </Stack>
            </Box>
        </>
    )
}

export default Home;