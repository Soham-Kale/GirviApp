import image from './asset/soham.png'
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Button, IconButton, Skeleton, Stack, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Ballot, KeyboardBackspace, OtherHouses, People, PermIdentity } from '@mui/icons-material'
import { useState } from 'react';

function CustomerPage() {

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

  const add = useNavigate();
  function addPage() {
    add('/AddCustomer');
  }

  const home = useNavigate();
  function HomePage() {
    home('/Home');
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
        mr: { lg: "43%", sm: "20%", xs: "45%"},
      }}> <Button onClick={HomePage} sx={{
        color: "#FFD500",
        marginRight: "-20px",
        ml: {lg: "40%",  xs: "10px", sm: "24%", md: "40%"},
        "&:hover": { backgroundColor: 'transparent' }
      }}><KeyboardBackspace /></Button>  Customer</Typography>

      <DynamicSearch />  <br /><br /><br /><br /><br /><br />

      <Button onClick={addPage} sx={{
            width: '52px',
            height: '54px',
            ml: '300px',
            border: 'none',
            backgroundColor: '#FFFFFF',
            position: 'absolute',
            mr: '40px',
            right: '10px',
            bottom: '20%',
            
      }} >
        <AddIcon sx={{
            borderRadius: "100%",
            width: "auto",
            height: '35px',
            top: '663px',
            left: '319px',
            border: '1px solid black',
            fontFamily: 'Inter',
            fontSize: '40px',
            fontWeight: 400,
            lineHeight: '48.41px',
            color: '#FFD500',
            alignItems: 'end',
        }} /></Button>

      <Box sx={{ 
        // bottom --> className
          position: 'relative', 
          mt: 'auto',
          backgroundColor: '#FFD500',
          width: '100vw',
          height: '73px',
          borderRadius: '0px 0px 35px 35px',
          bottom: '0px', 
        }}>
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
  { name: 'Harsh Kale', number: '8973542621', component: People1 },
  { name: 'Om Dixit', number: '9274353652', component: People2 },
  { name: 'Soham Kale', number: '7728527871', component: People3 }
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
              mb: "40px",
              mt: {lg: "35px", xs: "40px", sm: "30px"},
              width: { lg: "350px", xs: "250px", sm: "300px", md: "250px" },
            }}
      />
      {filteredCustomers.map(customer => (
        <customer.component key={customer.name} />
      ))}
    </Box>
  );
};

function People1() {
  const profile = useNavigate();
  function profilePage() {
    profile('/Profile');
  }
  return (
    <>
      <Button onClick={profilePage}  
        sx={{ "&:hover": { backgroundColor: 'transparent' },
        display: 'flex',
        justifyContent:"center", 
        alignItems: "center",
        margin: "auto",
        border: 'none',
        backgroundColor: '#FFFFFF',
        }}
      >
        <Box sx={{
                margin: 'auto',
                display: 'block',
                width: { lg: "350px", xs: "250px", sm: "300px", md: "250px" },
                height: { lg: "58px", xs: "45px", sm: "50px", md: "45px" },
                boxShadow: '0px 1px 1px 1px rgb(111, 118, 125)',
                borderRadius: '12px',
                textAlign: 'left',
                pl: '10px',           
              }} >
          <Avatar sx={{
            width: '38px',
            borderRadius: '20px',
            ml: '10px',
            float: 'left',
            mt: { lg: "10px", sm: "5px" , xs: "4px"},
          }} alt="Soham Kale" src={image} />

          <Box sx={{ marginLeft: "20%", marginTop: "6px" }}>
            <Typography sx={{
                        mb: "5px", mt: "5px",
                        fontSize: { lg: "14px", xs: "12px", sm: "12px" , md: "11px" },
                        width: "400px",
                        height: '15px',
                        color: '#000000',
                        fontWeight: 400,
                        ml: { lg: "", xs: "12px"}
                    }} >Harsh Kale</Typography>
            <Typography sx={{
                        mb: "5px", 
                        mt: { lg: "-10px", md: "", sm: "", xs: "-15px"},
                        fontSize: { lg: "14px", xs: "12px", sm: "12px" , md: "11px" },
                        width: "400px",
                        height: '12px',
                        color: '#010101',
                        fontWeight: 400,
                        pt: '15px',
                        pl: '15px',
                        ml: { lg: "", sm: "", xs: ""}
                }} >9274353652</Typography>
          </Box>
        </Box>
      </Button>
    </>
  )
}

function People2() {
  const profile = useNavigate();
  function profilePage() {
    profile('/Profile');
  }
  return (
    <>
      <Button onClick={profilePage} 
        sx={{ "&:hover": { backgroundColor: 'transparent' },
        display: 'flex',
        justifyContent:"center", 
        alignItems: "center",
        margin: "auto",
        border: 'none',
        backgroundColor: '#FFFFFF',
        }}
      >
        <Box sx={{
                margin: 'auto',
                display: 'block',
                width: { lg: "350px", xs: "250px", sm: "300px", md: "250px" },
                height: { lg: "58px", xs: "45px", sm: "50px", md: "45px" },
                boxShadow: '0px 1px 1px 1px rgb(111, 118, 125)',
                borderRadius: '12px',
                textAlign: 'left',
                pl: '10px',
            }}>
            <Avatar sx={{
              width: '38px',
              borderRadius: '20px',
              ml: '10px',
              float: 'left',
              mt: { lg: "10px", sm: "5px" , xs: "4px"},
          }} alt="Soham Kale" src={image} />

          <Box sx={{ marginLeft: "20%", marginTop: "6px" }}>
            <Typography sx={{
                        mb: "5px", mt: "5px",
                        fontSize: { lg: "14px", xs: "12px", sm: "12px" , md: "11px" },
                        width: "400px",
                        height: '15px',
                        fontFamily: "Inter",
                        fontWeight: 400,
                        color: '#000000',
                        ml: { lg: "", xs: "12px"}
                    }} >Soham Kale</Typography>
            <Typography sx={{
                        mb: "5px", 
                        mt: { lg: "-10px", md: "", sm: "", xs: "-15px"},
                        fontSize: { lg: "14px", xs: "12px", sm: "12px" , md: "11px" },
                        width: "400px",
                        height: '12px',
                        fontWeight: 400,
                        fontFamily: "Inter",
                        color: '#010101',
                        pt: '15px',
                        pl: '15px',
                        ml: { lg: "-2px", sm: "", xs: ""}
                }} >9074352287</Typography>
          </Box>
        </Box>
      </Button>
    </>
  )
}

function People3() {
  const profile = useNavigate();
  function profilePage() {
    profile('/Profile');
  }
  return (
    <>
      <Button onClick={profilePage}
        sx={{ "&:hover": { backgroundColor: 'transparent' },
        display: 'flex',
        justifyContent:"center", 
        alignItems: "center",
        margin: "auto",
        border: 'none',
        backgroundColor: '#FFFFFF',
        }}
      >
        <Box sx={{
                margin: 'auto',
                display: 'block',
                width: { lg: "350px", xs: "250px", sm: "300px", md: "250px" },
                height: { lg: "58px", xs: "45px", sm: "50px", md: "45px" },
                boxShadow: '0px 1px 1px 1px rgb(111, 118, 125)',
                borderRadius: '12px',
                textAlign: 'left',
                pl: '10px',
            }}>
            <Avatar sx={{
              width: '38px',
              borderRadius: '20px',
              ml: '10px',
              float: 'left',
              mt: { lg: "10px", sm: "5px" , xs: "4px"},
          }} alt="Soham Kale" src={image} />

          <Box sx={{ marginLeft: "20%", marginTop: "6px" }}>
            <Typography sx={{
                        mb: "5px", mt: "5px",
                        fontSize: { lg: "14px", xs: "12px", sm: "12px" , md: "11px" },
                        width: "400px",
                        height: '15px',
                        fontFamily: "Inter",
                        fontWeight: 400,
                        color: '#000000',
                        ml: { lg: "", xs: "12px"}
                    }} >Om Dixit</Typography>
            <Typography sx={{
                        mb: "5px", 
                        mt: { lg: "-10px", md: "", sm: "", xs: "-15px"},
                        fontSize: { lg: "14px", xs: "12px", sm: "12px" , md: "11px" },
                        width: "400px",
                        height: '12px',
                        fontWeight: 400,
                        fontFamily: "Inter",
                        color: '#010101',
                        pt: '15px',
                        pl: '15px',
                        ml: { lg: "-2px", sm: "", xs: ""}
                }} >9860216530</Typography>
          </Box>
        </Box>
      </Button>
    </>
  )
}

export default CustomerPage;