import { Box, Button, Typography } from '@mui/material'
import {  HighlightOff, KeyboardBackspace, NavigateNext, NotificationsNone, Textsms } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Setting() {
    const account = useNavigate();
    function accountPage() {
        account('/Account');
    }
    return (
        <Box>
            <h6 className='tag'><Button onClick={accountPage} sx={{
            color:"#FFD500",
            ml: {lg: "42%",  xs: "40px", sm: "20%", md: "26%"},
            marginRight: "-20px",
            "&:hover": { backgroundColor: 'transparent' }
            }}><KeyboardBackspace/></Button> &nbsp; Setting</h6> <br />
            <Box1/>
            <Box2/>
            <Box3/>
        </Box>
    )
}

function Box1() {
    return(
        <>
            <Box className="names" style={{marginBottom: "8px"}}>
                <h3 className='rectangle'></h3>
                <Typography className='customerName'></Typography> 
                <Textsms sx={{
                    mt: "-5px"
                }}/>
                <Button  className='iconStyle'>
                <Typography sx={{
                    textAlign: "center",
                    color: "black",
                    mt: '-5px', 
                    ml: "-250px"
                }}>Get SMS</Typography>
                    <NavigateNext sx={{marginTop: "-15px", color: "black" , ml: "142px"}}/>
                </Button>
            </Box>
        </>
    )
}

function Box2() {
    return(
        <>
            <Box className="names" style={{marginBottom: "8px"}}>
                <h3 className='rectangle'></h3>
                <Typography className='customerName'></Typography> 
                <NotificationsNone sx={{
                    mt: "-5px"
                }}/>
                <Button  className='iconStyle'>
                <Typography sx={{
                    textAlign: "center",
                    color: "black",
                    mt: '-5px', 
                    ml: "-250px"
                }}>Get Notification</Typography>
                    <NavigateNext sx={{marginTop: "-15px", color: "black" , ml: "65px"}}/>
                </Button>
            </Box>
        </>
    )
}

function Box3() {
    return(
        <>
                <Box className="names" style={{marginBottom: "8px"}}>
                <h3 className='rectangle'></h3>
                <Typography className='customerName'></Typography> 
                <HighlightOff sx={{
                    mt: "-5px", 
                    color: "red"
                }}/>
                <Button  className='iconStyle'>
                <Typography sx={{
                    textAlign: "center",
                    color: "black",
                    mt: '-5px', 
                    ml: "-250px"
                }}>Delete Account?</Typography>
                    <NavigateNext sx={{marginTop: "-15px", color: "black" , ml: "65px"}}/>
                </Button>
            </Box>
        </>
    )
}

export default Setting