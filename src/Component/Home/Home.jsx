import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Soham from "./asset/soham.png"
import Stack from '@mui/material/Stack';
import { Ballot, OtherHouses, People, PermIdentity } from '@mui/icons-material';

const cards = [
    {
        title: "Total Interest",
        data: [
            { label: "Received", value: "12,000", color: "green" },
            { label: "Pending", value: "8,000", color: "red" },
        ],
    },
    {
        title: "Total Principal",
        data: [
            { label: "Received", value: "12,000", color: "green" },
            { label: "Pending", value: "8,000", color: "red" },
        ],
    },
    {
        title: "Total",
        data: [
            { label: "Customers", value: "300", color: "black" },
            { label: "Loans", value: "576", color: "green" },
            { label: "Closed", value: "243", color: "red" },
        ],
    },
    {
        title: "Total Weight",
        data: [
            { label: "Gross", value: "100 gm", color: "black" },
            { label: "Net", value: "100 gm", color: "black" },
        ],
    },
];

const transactions = [
    {
        name: "Soham Kale",
        date: "03-03-2024",
        amount: "10,000.00",
        avatar: "", // Placeholder image for avatar
    },
    // {
    //     name: "Harsh Kale",
    //     date: "03-03-2024",
    //     amount: "10,000.00",
    //     avatar: {Soham}, // Placeholder image for avatar
    // },
];

function Home() {
    return (
        //direction="column"
        <Grid container minHeight={'100vh'} display={'block'} overflow={'hidden'} spacing={3}>
            {/* Header */}
            <Grid item>
                <Typography variant='h5' sx={{
                    mt: "10px",
                    ml: { lg: "28%", xs: "10px", sm: "24%", md: "26%" },
                    color: '#FFD500',
                    pl: '10%',
                }} > Home</Typography>
            </Grid>

            {/* Card Grid */}
            <Grid item>
                <Grid container spacing={2} justifyContent="center">
                    {cards.map((card, index) => (
                        <Grid item xs={5} sm={5} md={5} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: "#fffbea",
                                    borderRadius: "15px",
                                    textAlign: "center",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    border: "1px solid #ccc",
                                    fontSize: "20px"
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" fontSize={20} fontWeight="bold">
                                        {card.title}
                                    </Typography>
                                    {card.data.map((item, idx) => (
                                        <Typography
                                            key={idx}
                                            variant="body1"
                                            sx={{ color: item.color, mt: idx > 0 ? 1 : 2 }}
                                        >
                                            {item.label}: <strong>{item.value}</strong>
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Recent Transactions */}
            <Grid item>
                <Typography variant="h6" align="center" sx={{ mb: 2 }}>
                    Recent Transactions
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {transactions.map((transaction, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    borderRadius: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    p: 2,
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <Avatar src={transaction.avatar} alt={transaction.name} sx={{ mr: 2 }} />
                                <div>
                                    <Typography variant="body1" fontWeight="bold">
                                        {transaction.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {transaction.date}
                                    </Typography>
                                </div>
                                <Typography variant="body1" fontWeight="bold" sx={{ ml: "auto" }}>
                                    ₹{transaction.amount}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Footer />

        </Grid>

    )
}

function Footer() {
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
            <Box sx={{
                    position: 'fixed', 
                    mt: 'auto', 
                    backgroundColor: '#FFD500',
                    width: '100vw', 
                    height: '73px',
                    borderRadius: '0px 0px 38px 38px',
                    bottom: '0', 
                    left: '0', 
            }} >
                <Stack direction="row" sx={{ display: 'flex', justifyContent: "space-evenly" }}>
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