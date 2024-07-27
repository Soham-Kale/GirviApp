import { useNavigate } from 'react-router-dom'
import image from "./asset/soham.png"
import {  DarkMode, Download, KeyboardBackspace, Logout, NavigateNext, Policy, PrivacyTip, Settings } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { Ballot, OtherHouses, People, PermIdentity } from '@mui/icons-material'
import { Modal, styled } from '@mui/material'
import { useState } from 'react';
import './account.css'
function Account() {

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


    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <h6 className='tag'><Button onClick={HomePage} sx={{
                color: "#FFD500",
                marginRight: "-20px",
                ml: {lg: "45%",  xs: "10px", sm: "20%", md: "2%"},
                "&:hover": { backgroundColor: 'transparent' }
            }}><KeyboardBackspace /></Button> &nbsp; Account</h6>

            <CustProfile /> 
            <Box1 />
            <Box2 />
            <Box3 />
            <Box4 />
            <Box5 />
            <Box6 />

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

function CustProfile() {
    return (
        <>
            <Box sx={{mb: 10}} className="names2">
                <img className='sohamImg4' src={image} alt="soham" />
                <h1 className='customerName2'>Business Name</h1>
                <Box style={{ paddingBottom: "10px" }}>
                    <h6 className='number3'>Soham Kale</h6>
                    <Typography sx={{ml : 9, fontSize: "14px"}}>7728527871</Typography>
                </Box>
            </Box>
        </>
    )
}


function Box1() {
    const setting = useNavigate();
    function settingPage() {
        setting('/Setting');
    }
    return (
        <>
            <Box className="names" style={{ marginBottom: "8px" }}>
                <h3 className='rectangle'></h3>
                <Typography className='customerName'></Typography>
                <Settings sx={{
                    mt: "-20px"
                }} />
                <Button className='iconStyle' onClick={settingPage}>
                    <Typography sx={{
                        textAlign: "center",
                        color: "black",
                        mt: "-15px",
                        ml: "-250px"
                    }}>Settings</Typography>
                    <NavigateNext sx={{ marginTop: "-15px", color: "black", ml: "150px" }} />
                </Button>
            </Box>
        </>
    )
}

function Box2() {
    const download = useNavigate();
    function DownloadReport() {
        download('/DownloadReport');
    }
    return (
        <>
            <Box className="names" style={{ marginBottom: "8px" }}>
                <h3 className='rectangle'></h3>
                <Typography className='customerName'></Typography>
                <Download sx={{
                    mt: "-20px"
                }} />
                <Button className='iconStyle' onClick={DownloadReport}>
                    <Typography sx={{
                        textAlign: "center",
                        color: "black",
                        mt: '-15px',
                        ml: "-250px"
                    }}>Download Report</Typography>
                    <NavigateNext sx={{ marginTop: "-15px", color: "black", ml: "65px" }} />
                </Button>
            </Box>
        </>
    )
}

function Box3() {
    return (
        <>
            <Box className="names" style={{ marginBottom: "8px" }}>
                <h3 className='rectangle'></h3>
                <Typography className='customerName'></Typography>
                <PrivacyTip sx={{
                    mt: "-20px"
                }} />
                <Button className='iconStyle'>
                    <Typography sx={{
                        textAlign: "center",
                        color: "black",
                        mt: '-15px',
                        ml: "-250px"
                    }}>Terms & Conditions</Typography>
                    <NavigateNext sx={{ marginTop: "-15px", color: "black", ml: "55px" }} />
                </Button>
            </Box>
        </>
    )
}

function Box4() {
    return (
        <>
            <Box className="names" style={{ marginBottom: "8px" }}>
                <h3 className='rectangle'></h3>
                <Typography className='customerName'></Typography>
                <Policy sx={{
                    mt: "-20px"
                }} />
                <Button className='iconStyle'>
                    <Typography sx={{
                        textAlign: "center",
                        color: "black",
                        mt: '-15px',
                        ml: "-250px"
                    }}>Privacy Policy</Typography>
                    <NavigateNext sx={{ marginTop: "-15px", color: "black", ml: "95px" }} />
                </Button>
            </Box>
        </>
    )
}

function Box5() {
    const them = useNavigate();
    function toggle() {
        them('/ThemeToggle');
    }
    return (
        <>
            <Box className="names" style={{ marginBottom: "8px" }}>
                <h3 className='rectangle'></h3>
                <Typography className='customerName'></Typography>
                <DarkMode sx={{
                    mt: "-20px"
                }} />
                <Button className='iconStyle'>
                    <Typography sx={{
                        textAlign: "center",
                        color: "black",
                        mt: '-15px',
                        ml: "-250px"
                    }}>Dark Mode</Typography>
                    <NavigateNext sx={{ marginTop: "-15px", color: "black", ml: "130px" }} />
                </Button>
            </Box>
        </>
    )
}

function Box6() {
    const navigate = useNavigate();

    function toggle() {
        navigate('/SecondPage');
    }

    function toggleSamePage() {
        navigate('/Account');
    }

    const handleCancel = () => {
        setOpen(false);
    };

    const StyledModal = styled(Modal)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    });

    const [open, setOpen] = useState(false);

    return (
        <>
            <Box className="names" style={{ marginBottom: "8px" }}>
                <h3 className='rectangle'></h3>
                <Typography className='customerName'></Typography>
                <Logout sx={{ mt: "-20px" }} />
                <Button className='iconStyle' onClick={() => setOpen(true)}>
                    <Typography sx={{ textAlign: "center", color: "black", mt: '-15px', ml: "-250px" }}>Log Out</Typography>
                    <NavigateNext sx={{ marginTop: "-15px", color: "black", ml: "150px" }} />
                </Button>

                <StyledModal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="Styledmodal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box width={356} height={200} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
                        <Typography variant='h1' sx={{ fontSize: "25px", color: 'black', fontWeight: "600" }}>Logout?</Typography>
                        <Typography sx={{ mt: 2, fontSize: '18px' }}>Are you sure you want to Logout?</Typography>
                        <Button 
                            variant="outlined"
                            onClick={handleCancel}
                            sx={{ height: "50px", width: "150px", mt: 4 }}
                        >
                            Cancel
                        </Button> 
                        <Button 
                            variant="contained"
                            onClick={toggle} 
                            sx={{ backgroundColor: "red", ml: "8px", height: "50px", width: "150px", mt: 4 }}
                        >
                            Logout
                        </Button>
                    </Box>
                </StyledModal>
            </Box>
        </>
    );
}

export default Account;