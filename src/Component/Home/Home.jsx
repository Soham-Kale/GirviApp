import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Soham from "./asset/soham.png"
import Stack from '@mui/material/Stack';
import { Ballot, OtherHouses, People, PermIdentity } from '@mui/icons-material';
import './home.css'


function Home() {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <Typography variant='h5' sx={{
                mt: "10px",
                ml: { lg: "28%", xs: "10px", sm: "24%", md: "26%" }
            }} className='styleOfVarient'> Home</Typography>
            <Box sx={{mt: "25px"}} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Box flexDirection={"column"} sx={{ padding: 3, ml: {xs:"-100px", } }}>
                    <Box1 />
                    <Box sx={{ marginTop: 4 }}>
                        <Box3 />
                    </Box>
                </Box>

                <Box sx={{ padding: 3, ml: "25px" }}>
                    <Box2 />
                    <Box sx={{ marginTop: 4 }}>
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
            <Box sx={{
                width: { lg: '140px', xs: '110px', md: "120px", sm: "110px" },
                height: { lg: '130px', xs: "105px", md: "120px", sm: '105px' },
                marginTop: { lg: "-20px", md: "-20px", sm: "-20px", xs: "-30px" },
                marginLeft: { lg: '4%', xs: "60px", sm: "60px" },
                border: '0.3px solid #000000',
                borderRadius: "34px",
                backgroundColor: '#FFFCF0',
            }}>

                <Grid item>
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "13px", md: "14px", sm: "10px" },
                        marginLeft: { lg: "-10px", xs: "-20px", md: "-20px", sm: "-20px" }
                    }} className='styleForInt'>Total Interest</Typography>
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "13px", md: "14px", sm: "10px" },
                        marginLeft: { lg: "0px", xs: "-20px", md: "-20px", sm: "-20px" }
                    }}
                        className='styleForInt'> 20,000</Typography> <br />
                </Grid>

                <Box sx={{
                    marginTop: { lg: "0px", xs: "-20px", md: "-0px", sm: "-20px" },
                    marginLeft: { lg: "15px", xs: "20px", sm: "20px" },
                }}>
                    <Typography display='inline' sx={{
                        width: { lg: "150px", xs: "145px", md: "100px", sm: "150px" },
                        fontSize: { lg: "14px", xs: "10px", md: "13px", sm: "10px" },
                        fontFamily: 'Inter',
                        fontWeight: '550',
                        textAlign: "center",
                    }}
                        variant='bold'>Received :
                        <Box variant='bold' sx={{
                            width: { lg: "150px", xs: "145px", md: "100px", sm: "150px" },
                            fontSize: { lg: "14px", xs: "10px", md: "13px", sm: "10px" },
                            fontFamily: 'Inter',
                            display: 'inline',
                            fontWeight: '550',
                            color: '#4CFA7E',
                            textAlign: 'center',
                        }}> 12000</Box>
                    </Typography>
                </Box>

                <Box sx={{
                    marginLeft: { lg: "-15px", xs: "30px", md: "-30px", sm: "0px" },
                    marginTop: { lg: "0px", xs: "-1px", md: "0px", sm: "3px" },
                }}>
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "10px", md: "14px", sm: "10px" },
                        marginTop: { md: "-5px" , xs: "10px"},
                        marginLeft: { lg: "0px", xs: "-42px", md: "20px", sm: "-10px" },
                    }} display='inline' variant='bold' className='pendingAmt'>Pending :
                        <Box variant='bold' sx={{
                            fontSize: { lg: "14px", xs: "10px", md: "13px", sm: "10px" },
                            fontFamily: 'Inter',
                            display: 'inline',
                            width: '100px',
                            fontWeight: '550',
                            color: '#FF0000',
                            textAlign: 'center',
                        }}> 8000</Box>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

function Box2() {
    return (
        <>
            <Box sx={{
                width: { lg: '140px', xs: '110px', md: "120px", sm: "110px" },
                height: { lg: '130px', xs: "105px", md: "120px", sm: '105px' },
                marginTop: { lg: "-20px", md: "-20px", sm: "-20px", xs: "-20px" },
                marginLeft: { lg: '4%', xs: "-25px", sm: "60px" },
                border: '0.3px solid #000000',
                borderRadius: "34px",
                backgroundColor: '#FFFCF0',
            }}>

                <Grid item>
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "13px", md: "14px", sm: "10px" },
                        marginLeft: { lg: "-10px", xs: "-20px", md: "-20px", sm: "-20px" }
                    }} className='styleForInt'>Total Principal </Typography>
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "13px", md: "14px", sm: "10px" },
                        marginLeft: { lg: "0px", xs: "-20px", md: "-20px", sm: "-20px" }
                    }}
                        className='styleForInt'> 20,000</Typography> <br />
                </Grid>

                <Box sx={{
                    marginTop: { lg: "0px", xs: "-20px", md: "0px", sm: "-20px" },
                    marginLeft: { lg: "15px", xs: "20px", sm: "20px" },
                }}>
                    <Typography sx={{
                        width: { lg: "150px", xs: "145px", md: "100px", sm: "150px" },
                        fontSize: { lg: "14px", xs: "10px", md: "13px", sm: "10px" },
                        fontFamily: 'Inter',
                        fontWeight: '550',
                        textAlign: "center",
                    }} display='inline' variant='bold'>Received :

                        <Box variant='bold' sx={{
                            width: { lg: "150px", xs: "145px", md: "100px", sm: "150px" },
                            fontSize: { lg: "14px", xs: "10px", md: "13px", sm: "10px" },
                            fontFamily: 'Inter',
                            display: 'inline',
                            fontWeight: '550',
                            color: '#4CFA7E',
                            textAlign: 'center',
                        }}> 12000</Box>
                    </Typography>
                </Box>

                <Box sx={{
                    marginLeft: { lg: "-15px", xs: "-30px", md: "-30px", sm: "0px" },
                }}>
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "10px", md: "14px", sm: "10px" },
                        marginTop: { md: "-5px" },
                        marginLeft: { lg: "0px", xs: "20px", md: "20px", sm: "-10px" },
                    }} display='inline' variant='bold' className='pendingAmt'>Pending :
                        <Box variant='bold' sx={{
                            fontSize: { lg: "14px", xs: "10px", md: "13px", sm: "10px" },
                            fontFamily: 'Inter',
                            display: 'inline',
                            width: '100px',
                            fontWeight: '550',
                            color: '#FF0000',
                            textAlign: 'center',
                        }}> 8000</Box>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

function Box3() {
    return (
        <>
            <Box sx={{
                width: { lg: '140px', xs: '110px', md: "120px", sm: "110px" },
                height: { lg: '130px', xs: "105px", md: "120px", sm: '105px' },
                marginTop: { lg: "20px", md: "-20px", sm: "-20px", xs: "-10px" },
                marginLeft: { lg: '4%', xs: "60px", sm: "60px" },
                border: '0.3px solid #000000',
                borderRadius: "34px",
                backgroundColor: '#FFFCF0',
            }}>
                <Box>
                    <Typography  sx={{
                        fontSize: { lg: "14px", xs: "13px", md: "14px", sm: "10px" },
                        marginLeft: { lg: "0px", xs: "-20px", md: "-20px", sm: "-20px" }
                    }} className='styleForInt'>Total</Typography>
                </Box>

                <Box>
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "13px", md: "14px", sm: "10px" },
                        marginLeft: { lg: "0px", xs: "10px", md: "-20px", sm: "-20px" },
                        height: '21px',
                        fontFamily: 'Inter',
                        fontWeight: '550',
                        marginTop: '10px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5px',
                        textAlign: 'center',
                    }}>Customers : 300</Typography>

                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "10px", md: "14px", sm: "10px" },
                        marginLeft: { lg: "0px", xs: "2px", md: "20px", sm: "-10px" },

                    }} display='inline' className='receivedAmount' variant='bold'>Loans :
                        <Box variant='bold' sx={{
                            fontSize: { lg: "14px", xs: "10px", md: "13px", sm: "10px" },
                            fontFamily: 'Inter',
                            display: 'inline',
                            fontWeight: '550',
                            color: '#4CFA7E',
                            textAlign: 'center',
                        }}> 576</Box>
                    </Typography>
                </Box>

                <Typography sx={{
                    fontSize: { lg: "14px", xs: "10px", md: "14px", sm: "10px" },
                    marginLeft: { lg: "0px", xs: "1px", md: "20px", sm: "-10px" },
                }} display='inline' variant='bold' className='pendingAmt'>Closed :
                    <Box variant='bold' sx={{
                        fontSize: { lg: "14px", xs: "10px", md: "13px", sm: "10px" },
                        fontFamily: 'Inter',
                        display: 'inline',
                        width: '100px',
                        fontWeight: '550',
                        color: '#FF0000',
                        textAlign: 'center',
                    }}> 243</Box>
                </Typography>
            </Box>
        </>
    )
}

function Box4() {
    return (
        <>
            <Box sx={{
                width: { lg: '140px', xs: '110px', md: "120px", sm: "110px" },
                height: { lg: '130px', xs: "105px", md: "120px", sm: '105px' },
                marginTop: { lg: "20px", md: "-20px", sm: "-20px", xs: "-10px" },
                marginLeft: { lg: '4%', xs: "-25px", sm: "60px" },
                border: '0.3px solid #000000',
                borderRadius: "34px",
                backgroundColor: '#FFFCF0',
            }}>
                <Box>
                    <Typography  sx={{
                        fontSize: { lg: "14px", xs: "13px", md: "14px", sm: "10px" },
                        marginLeft: { lg: "0px", xs: "-20px", md: "-20px", sm: "-20px" }
                    }} className='styleForInt'>Total Weight </Typography>
                </Box>

                <Box>
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "13px", md: "14px", sm: "10px" },
                        marginLeft: { lg: "0px", xs: "10px", md: "-20px", sm: "-20px" },
                        height: '21px',
                        fontFamily: 'Inter',
                        fontWeight: '550',
                        marginTop: '15px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5px',
                        textAlign: 'center',
                    }}>Gross : 100 gm</Typography>
                </Box>

                <Typography sx={{
                    fontSize: { lg: "14px", xs: "13px", md: "14px", sm: "10px" },
                    marginLeft: { lg: "0px", xs: "10px", md: "-20px", sm: "-20px" },
                    height: '21px',
                    fontFamily: 'Inter',
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
            <Typography sx={{ ml: { lg: "38%", xs: "18%", sm: "32%", md: "35%"}, mt: "-10px" }} variant='p'>Recent Transactions</Typography>
            <Box sx={{
                mt: "10px",
                // margin: 'auto',
                display: 'block',
                width: { lg: "350px", xs: "250px", sm: "300px", md: "250px" },
                height: { lg: "58px", xs: "45px", sm: "50px", md: "45px" },
                boxShadow: '0px 1px 1px 1px rgb(111, 118, 125)',
                borderRadius: '12px',
                ml: {lg: "35%"}
            }} className="name4">
                <Box className='flex'>
                    <img src={Soham} className='darkCircle' />
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "10px", sm: "12px" , md: "11px" },
                        width: "400px",
                    }} className='customeName4'>Soham Kale</Typography>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: { lg: "15px", xs: "10px", sm: "12px", md: "11px" },
                        mt: { lg: "", xs: "-5px" },
                        marginRight: { lg: "58px", xs: "-25px" , sm: "24px"},
                        textindent: '-85px',  /*moving text to left side */
                        fontweight: '450',
                    }}className='paragra'>03-03-2024</Typography>
                    <Typography sx={{
                        fontSize: { lg: "15px", sm: "12px", xs: "10px", md: "12px" },
                    }} className='amount2'>10,000.00</Typography>
                </Box>
            </Box>

            <Box sx={{
                // margin: 'auto',
                display: 'block',
                width: { lg: "350px", xs: "250px", sm: "300px", md: "250px" },
                height: { lg: "58px", xs: "45px", sm: "50px", md: "45px" },
                boxShadow: '0px 1px 1px 1px rgb(111, 118, 125)',
                borderRadius: '12px',
                mt: {lg: "-20px", xs: "-40px", },
                ml: {lg: "35%"}
            }} className="name4">
                <Box className='flex'>
                    <img src={Soham} className='darkCircle' />
                    <Typography sx={{
                        fontSize: { lg: "14px", xs: "10px", sm: "12px" , md: "11px" },
                        width: "400px",
                    }} className='customeName4'>Harsh Kale</Typography>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: { lg: "15px", xs: "10px", sm: "12px", md: "11px" },
                        mt: { lg: "", xs: "-5px" },
                        marginRight: { lg: "58px", xs: "-25px" , sm: "24px"},
                        textindent: '-85px',  /*moving text to left side */
                        fontweight: '450',
                    }}className='paragra'>03-03-2024</Typography>
                    <Typography sx={{
                        fontSize: { lg: "15px", sm: "12px", xs: "10px", md: "12px" },
                    }} className='amount2'>10,000.00</Typography>
                </Box>
            </Box>

            <Box sx={{ position: 'relative', mt: 'auto' }} className='bottom'>
                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <IconButton
                        onClick={() => handleButtonClick('home')}
                        sx={{ color: activeButton === 'home' ? 'blue' : 'inherit' }}
                    >
                        <OtherHouses sx={{ mb: "35px", mr: "-10px", mt: "5px" }} />
                        <Button sx={{ mt: "15px", color: "black", ml: "-30px" }}>
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
                        <People sx={{ mb: "35px", mr: "-10px", mt: "5px" }} />
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