import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Box } from '@mui/material'
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
            color:"#FFD500", 
            marginRight: "-20px",
            ml: {lg: "45%",  xs: "40px", sm: "20%", md: "26%"},
            "&:hover":{backgroundColor:'transparent'}
            }}><KeyboardBackspace/></Button> &nbsp; New Transaction</h6><br />             
            <Box1/>
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
                width: {lg: "20%", sm: "40%", xs: "80%"},
                margin:"auto"
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

function Box1() {
    const interest = useNavigate();
    function interestPage() {
        interest('/Interest');
    }
    const priciple = useNavigate();
    function priciplePage() {
        priciple('/Principle');
    }
    const topUp = useNavigate();
    function topUpPage() {
        topUp('/TopUp');
    }    
    return(
        <>
            <Box sx={{mt: "30px"}} className='buttons'>
                <button onClick={interestPage} className='buttonStyle2'><span>Interest</span></button>
                <button onClick={priciplePage} className='buttonStyle2'><span>Principal</span></button>
                <button onClick={topUpPage} className='buttonStyle2'><span>Top-up</span></button>
            </Box>
            <div className='flexBox'>
                <h6 className='closeDate'>Close Date : </h6>
                <input className='month' type="date" />

                <h6 className='closeDate'>Amount : </h6>
                <input type="text" className='month' placeholder='Enter Amount'/>
                
                <br /><br />
                <BasicSelect />

                <p className='styleOfPara'>*Create this when customer is paying INTEREST payment on his/her loan</p>
                <button className='savaData'><span>Save</span></button>
            </div>
        </>
    )
}

export default Interest;