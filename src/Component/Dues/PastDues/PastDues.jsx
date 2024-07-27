import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { Ballot, KeyboardBackspace, OtherHouses, People, PermIdentity } from '@mui/icons-material'
import image from "../asset/soham.png"

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
            <h6 className='tag'><Button onClick={HomePage}
                sx={{
                    color: "#FFD500",
                    marginRight: "-30px",
                    ml: {lg: "45%",  xs: "10px", sm: "24%", md: "26%"},
                    "&:hover": { backgroundColor: 'transparent' }
                }}><KeyboardBackspace /></Button> &nbsp; Past Dues</h6><br /> <br />

            <Box sx={{
                backgroundColor: "#FFFFFF",
                boxShadow: '2',
                width: { lg: '20%', sm: '60%', xs: '77%' },
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: "-60px",
                padding: "3px",
                borderRadius: 20
            }}>
                <Button variant='outlined' style={{ border: 'none', color: 'black' }} sx={{ backgroundColor: active ? '#FFD500' : '#00000 ', borderRadius: 20, }} onClick={onUpcomingDueClick}><Typography>Upcoming Dues</Typography></Button>
                <Button variant='outlined' style={{ border: 'none', color: 'black' }} sx={{ backgroundColor: selected ? '#FFD500' : '#00000 ', borderRadius: 20, }} onClick={onPastDueClick}><Typography>Past Dues</Typography></Button>
            </Box> 

            <DynamicSearch/>

            <Box sx={{ position: 'relative', mt: 'auto' }} className="bottom">
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

            <Typography sx={{ marginBottom: "20px", mt: "-20px" ,
                ml: {lg: "40%",  xs: "14%", sm: "32%", md: "35%"}, 
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
            <Box sx={{mb: 2}} className="names">
                <img className='sohamImg' src={image} alt="soham" />
                <h6 className='customerName'>Soham Kale</h6>
                <h6 className='amount'>10,000.00</h6>
            </Box>
        </>
    )
}


function People2() {
    return (
        <>
            <Box sx={{mb: 2}} className="names">
                <img className='sohamImg' src={image} alt="soham" />
                <h6 className='customerName'>Harsh Kale</h6>
                <h6 className='amount'>10,000.00</h6>
            </Box>
        </>
    )
}


function People3() {
    return (
        <>
            <div className="names">
                <img className='sohamImg' src={image} alt="soham" />
                <h6 className='customerName'>Om Dixit</h6>
                <h6 className='amount'>10,000.00</h6>
            </div>
        </>
    )
}

export default Dues;