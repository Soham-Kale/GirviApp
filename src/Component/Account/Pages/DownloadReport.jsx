import { Box, Button, Typography } from '@mui/material';
import { Download, KeyboardBackspace, NavigateNext, PeopleOutline, SyncAlt, Textsms } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../Pages/report.css'

function DownloadReport() {
    const account = useNavigate();
    function accountPage() {
        account('/Account');
    }

    return (
        <Box>
            <h6 className='tag'><Button onClick={accountPage} sx={{
            color:"#FFD500",
            marginLeft: "75px",
            ml: {lg: "44%",  xs: "60px", sm: "25%", md: "26%"},
            marginRight: "-20px",
            "&:hover": { backgroundColor: 'transparent' }
            }}><KeyboardBackspace/></Button> Download Report</h6> <br />          
            
            <Date/> <br /> <br />
            <Box1/>
            <Box2/>
            <Box3/>
        </Box>
    )
}

function Date() {
    return(
        <>
            <Box sx={{
                mb: "8px"
            }} className='dates'>
                <Box className='styleBox' sx={{
                    marginTop: {lg: "39px", sm: "25px", xs: "25px"},
                    marginLeft: {lg: "40%" , sm: "35%", xs: "15%"}
                }}>
                    <span className='start'>Start Date :</span> <br />
                    <button className='startDate'><span>01-01-2024</span></button> 
                </Box>
                <Box className='secondBtn'  sx={{
                    mt: {lg: "30px", sm: "15px", xs: "15px"},
                    ml: {lg: "52%"}
                }}>
                    <span className='start'>End Date :</span> <br />
                    <button className='startDate'><span>16-03-2024</span></button>  
                </Box>
            </Box>   
        </>
    )
}

function Box1() {
    return(
        <>
            <Box className="names1" >
            <Typography className='customerName'></Typography> 
                <PeopleOutline sx={{
                    mt: "-5px",
                    color: "blue", 
                    ml: "10px"
                }}/>
                <Button  className='iconStyle'>
                <Typography sx={{
                    textAlign: "center",
                    color: "black",
                    mt: '-5px', 
                    ml: "-400px"
                }}>Customer List</Typography>
                </Button>  

                <Button endIcon={<Download/>} sx={{
                    ml: "60%",
                    mt: "-65px",
                    backgroundColor: "blue",
                    color: "white"
                }}>Download </Button>
            </Box>
        </>
    )
}

function Box2() {
    return(
        <>
            <Box className="names1" >
            <Typography className='customerName'></Typography> 
                <PeopleOutline sx={{
                    mt: "-5px",
                    color: "green", 
                    ml: "10px"
                }}/>
                <Button  className='iconStyle'>
                <Typography sx={{
                    textAlign: "center",
                    color: "black",
                    mt: '-5px', 
                    ml: "-400px"
                }}>Loans</Typography>
                </Button>  

                <Button endIcon={<Download/>} sx={{
                    ml: "60%",
                    mt: "-65px",
                    backgroundColor: "green",
                    color: "white"
                }}>Download </Button>
            </Box>
        </>
    )
}


function Box3() {
    return(
        <>
            <Box className="names1" >
            <Typography className='customerName'></Typography> 
                <SyncAlt sx={{
                    mt: "-5px",
                    color: "#FFD500", 
                    ml: "10px"
                }}/>
                <Button  className='iconStyle'>
                <Typography sx={{
                    textAlign: "center",
                    color: "black",
                    mt: '-5px', 
                    ml: "-400px"
                }}>Transactions</Typography>
                </Button>  

                <Button endIcon={<Download/>} sx={{
                    ml: "60%",
                    mt: "-65px",
                    backgroundColor: "#FFD500",
                    color: "white"
                }}>Download </Button>
            </Box>
        </>
    )
}

export default DownloadReport