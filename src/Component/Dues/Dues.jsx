import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { Ballot, KeyboardBackspace, OtherHouses, People, PermIdentity } from '@mui/icons-material'
import image from "./asset/soham.png"

function Dues() {
    const dues = useNavigate();
    function duesPage() {
        dues('/Dues');
    }

    const past = useNavigate();
    function PastPage() {
        past('/PastDues');
    }

    const home = useNavigate();
    function HomePage() {
        home('/Home');
    }

    const [activeButton, setActiveButton] = useState('home');
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

    const [selected, isSelected] = useState(false);
    const [active, isActive] = useState(false);

    const onUpcomingDueClick = () => {
        isSelected(false);
        isActive(true);
        dues('/Dues');
    }

    const onPastDueClick = () => {
        isSelected(true);
        isActive(false);
        past('/PastDues');
    }

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

            <Typography level="h3" sx={{
                height: '20px',
                mt: { lg: '10px', sm: "20px", xs: "10%", md: "30px" },
                color: '#FFD500',
                fontFamily: 'Inter',
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 600,
                mr: { lg: "39%", sm: "20%", xs: "45%" },
            }}> <Button onClick={HomePage} sx={{
                color: "#FFD500",
                marginRight: "-20px",
                ml: { lg: "40%", xs: "10px", sm: "24%", md: "40%" },
                "&:hover": { backgroundColor: 'transparent' }
            }}><KeyboardBackspace /></Button> Pending Dues</Typography>

            <Box sx={{
                backgroundColor: "#FFFFFF",
                boxShadow: '2',
                width: { lg: '23%', sm: '60%', xs: '77%' },
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: "45px",
                padding: "3px",
                mb: "60px",
                borderRadius: 20
            }}>
                <Button variant='outlined' style={{ border: 'none', color: 'black' }} sx={{ backgroundColor: active ? '#FFD500' : '#00000 ', borderRadius: 20, }} onClick={onUpcomingDueClick}><Typography>Upcoming Dues</Typography></Button>
                <Button variant='outlined' style={{ border: 'none', color: 'black' }} sx={{ backgroundColor: selected ? '#FFD500' : '#00000 ', borderRadius: 20, }} onClick={onPastDueClick}><Typography>Past Dues</Typography></Button>
            </Box>

            <DynamicSearch />

            <Box sx={{
                position: 'relative',
                mt: 'auto',
                backgroundColor: '#FFD500',
                width: '100vw',
                height: '73px',
                borderRadius: '0px 0px 35px 35px',
                bottom: '0px',
            }} className="bottom">
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
        </Box>
    )
}

const customers = [
    { name: 'Soham Kale', component: People4 },
    { name: 'Harsh Kale', component: People2 },
    { name: 'Om Dixit', component: People3 },
];

const DynamicSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box>
            <TextField
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{
                    margin: 'auto',
                    display: 'block',
                    width: '340px',
                    mb: "40px",
                    mt: "-20px",
                }}
            />

            <Typography sx={{
                marginBottom: "20px", mt: "-20px",
                ml: { lg: "40%", xs: "14%", sm: "32%", md: "35%" },
            }} >16-03-2024</Typography>

            {filteredCustomers.map((customer, index) => (
                <customer.component key={index} />
            ))}
        </Box>
    );
};

function People4() {
    return (
        <>
            <Box sx={{
                mb: { lg: 2, sm: 2, xs: 2 },
                margin: 'auto',
                display: 'block',
                height: '55px',
                width: '343px',
                textAlign: 'left',
                boxShadow: '0px 1px 1px 1px rgb(111, 118, 125)',
                borderRadius: '12px',
                pl: '10px',
            }}
            // className="names"
            >
                <Avatar sx={{
                    width: '38px',
                    borderRadius: '20px',
                    ml: '10px',
                    float: 'left',
                    mt: { lg: "10px", sm: "5px", xs: "4px" },
                }} alt="Soham Kale" src={image} />
                <Typography sx={{
                    mb: "5px",
                    mt: { lg: "15px", },
                    fontSize: { lg: "18px", xs: "12px", sm: "12px", md: "11px" },
                    width: "400px",
                    height: '15px',
                    color: '#000000',
                    fontWeight: 400,
                    pl: "50px",
                    pt: "12px",
                    ml: { lg: "30px", xs: "12px" }
                }} >Soham Kale</Typography>
                {/* <h6 className='customerName'> Kale</h6> */}

                <Typography sx={{
                    textAlign: 'end',
                    mr: '20px',
                    mt: "-6px",
                }}
                //className='amount'
                >10,000.00</Typography>
            </Box>
        </>
    )
}

function People2() {
    return (
        <>
            <Box sx={{
                mb: { lg: 2, sm: 2, xs: 2 },
                margin: 'auto',
                display: 'block',
                height: '55px',
                width: '343px',
                textAlign: 'left',
                boxShadow: '0px 1px 1px 1px rgb(111, 118, 125)',
                borderRadius: '12px',
                pl: '10px',
            }}
            // className="names"
            >
                <Avatar sx={{
                    width: '38px',
                    borderRadius: '20px',
                    ml: '10px',
                    float: 'left',
                    mt: { lg: "10px", sm: "5px", xs: "4px" },
                }} alt="Soham Kale" src={image} />
                <Typography sx={{
                    mb: "5px",
                    mt: { lg: "15px", },
                    fontSize: { lg: "18px", xs: "12px", sm: "12px", md: "11px" },
                    width: "400px",
                    height: '15px',
                    color: '#000000',
                    fontWeight: 400,
                    pl: "50px",
                    pt: "12px",
                    ml: { lg: "30px", xs: "12px" }
                }} >Parth Kale</Typography>
                {/* <h6 className='customerName'> Kale</h6> */}

                <Typography sx={{
                    textAlign: 'end',
                    mr: '20px',
                    mt: "-6px",
                }}
                //className='amount'
                >10,000.00</Typography>
            </Box>
        </>
    )
}

function People3() {
    return (
        <>
            <Box sx={{
                mb: { lg: 2, sm: 2, xs: 2 },
                margin: 'auto',
                display: 'block',
                height: '55px',
                width: '343px',
                textAlign: 'left',
                boxShadow: '0px 1px 1px 1px rgb(111, 118, 125)',
                borderRadius: '12px',
                pl: '10px',
            }}
            // className="names"
            >
                <Avatar sx={{
                    width: '38px',
                    borderRadius: '20px',
                    ml: '10px',
                    float: 'left',
                    mt: { lg: "10px", sm: "5px", xs: "4px" },
                }} alt="Soham Kale" src={image} />
                <Typography sx={{
                    mb: "5px",
                    mt: { lg: "15px", },
                    fontSize: { lg: "18px", xs: "12px", sm: "12px", md: "11px" },
                    width: "400px",
                    height: '15px',
                    color: '#000000',
                    fontWeight: 400,
                    pl: "50px",
                    pt: "12px",
                    ml: { lg: "30px", xs: "12px" }
                }} >Harsh Kale</Typography>
                {/* <h6 className='customerName'> Kale</h6> */}

                <Typography sx={{
                    textAlign: 'end',
                    mr: '20px',
                    mt: "-6px",
                }}
                //className='amount'
                >10,000.00</Typography>
            </Box>
        </>
    )
}

export default Dues;