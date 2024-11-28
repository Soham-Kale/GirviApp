import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Box, Typography } from '@mui/material'
import { KeyboardBackspace } from '@mui/icons-material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './interest.css'

function Interest() {
    const backPage = useNavigate();
    function back() {
        backPage("/LoanProfile")
    }

    return (
        <div>
            <h6 className='tag'><Button onClick={back} sx={{
                color: "#FFD500",
                marginRight: "-20px",
                ml: { lg: "45%", xs: "40px", sm: "20%", md: "26%" },
                "&:hover": { backgroundColor: 'transparent' }
            }}><KeyboardBackspace /></Button> &nbsp; New Transaction</h6><br />
            <Box1 />
        </div>
    )
}

function BasicSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{
            width: { lg: "20%", sm: "40%", xs: "80%" },
            margin: "auto"
        }}>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Paid by</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Cash</MenuItem>
                    <MenuItem value={20}>Online</MenuItem>
                    <MenuItem value={30}>Card</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

// function Box1() {
//     const interest = useNavigate();
//     function interestPage() {
//         interest('/Interest');
//     }
//     const priciple = useNavigate();
//     function priciplePage() {
//         priciple('/Principle');
//     }
//     const topUp = useNavigate();
//     function topUpPage() {
//         topUp('/TopUp');
//     } 

//     const [selected, isSelected] = useState(false);
//     const [active, isActive] = useState(false);

//     const interestCal = () => {
//         isSelected(false);
//         isActive(true);
//         interest('/Interest');
//     }

//     const pricipleCal = () => {
//         isSelected(true);
//         isActive(false);
//         priciple('/Principle');
//     }

//     const topUpCal = () => {
//         isSelected(false);
//         isActive(false);
//         topUp('/TopUp');
//     }

//     return(
//         <>
//             <Box sx={{mt: "30px"}} className='buttons'>
//                 <Button variant='outlined' style={{ border: 'none', color: 'black' }} sx={{ backgroundColor: active ? '#FFD500' : '#00000 ', borderRadius: 20, }} onClick={interestCal}><Typography>Interest</Typography></Button>
//                 <Button variant='outlined' style={{ border: 'none', color: 'black' }} sx={{ backgroundColor: selected ? '#FFD500' : '#00000 ', borderRadius: 20, }} onClick={pricipleCal}><Typography>Principal</Typography></Button>
//                 <Button variant='outlined' style={{ border: 'none', color: 'black' }} sx={{ backgroundColor: selected ? '#FFD500' : '#00000 ', borderRadius: 20, }} onClick={topUpCal}><Typography>Top-up</Typography></Button>
//             </Box>
//             <div className='flexBox'>
//                 <h6 className='closeDate'>Close Date : </h6>
//                 <input className='month' type="date" />

//                 <h6 className='closeDate'>Amount : </h6>
//                 <input type="text" className='month' placeholder='Enter Amount'/>

//                 <br /><br />
//                 <BasicSelect />

//                 <p className='styleOfPara'>*Create this when customer is paying INTEREST payment on his/her loan</p>
//                 <button className='savaData'><span>Save</span></button>
//             </div>
//         </>
//     )
// }

function Box1() {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(""); 

    const interestCal = () => {
        setActiveButton("Interest"); 
        navigate("/Interest"); 
    };

    const principleCal = () => {
        setActiveButton("Principle"); 
        navigate("/Principle"); 
    };

    const topUpCal = () => {
        setActiveButton("TopUp"); 
        navigate("/TopUp"); 
    };

    return (
        <>
            <Box sx={{ mt: "40px" }} className="buttons">
                {/* Interest Button */}
                <Button
                    variant="outlined"
                    style={{ border: "none", color: "black" }}
                    sx={{
                        backgroundColor: activeButton === "Interest" ? "#FFD500" : "transparent",
                        borderRadius: 20,
                    }}
                    onClick={interestCal}
                >
                    <Typography>Interest</Typography>
                </Button>

                {/* Principle Button */}
                <Button
                    variant="outlined"
                    style={{ border: "none", color: "black" }}
                    sx={{
                        backgroundColor: activeButton === "Principle" ? "#FFD500" : "transparent",
                        borderRadius: 20,
                    }}
                    onClick={principleCal}
                >
                    <Typography>Principal</Typography>
                </Button>

                {/* Top-Up Button */}
                <Button
                    variant="outlined"
                    style={{ border: "none", color: "black" }}
                    sx={{
                        backgroundColor: activeButton === "TopUp" ? "#FFD500" : "transparent",
                        borderRadius: 20,
                    }}
                    onClick={topUpCal}
                >
                    <Typography>Top-up</Typography>
                </Button>
            </Box>

            <div className="flexBox">
                <h6 className="closeDate">Close Date : </h6>
                <input className="month" type="date" />

                <h6 className="closeDate">Amount : </h6>
                <input type="text" className="month" placeholder="Enter Amount" />

                <br />
                <br />
                <BasicSelect />

                <p className="styleOfPara">
                    *Create this when customer is paying INTEREST payment on his/her loan
                </p>
                <button className="savaData">
                    <span>Save</span>
                </button>
            </div>
        </>
    );
}

export default Interest;