import { useNavigate } from 'react-router-dom'
import image from "./asset/soham.png"
import { Box, Button, Typography } from '@mui/material'
import { KeyboardBackspace } from '@mui/icons-material'
import { useState } from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './loan.css'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function AddLoan() {
    const [loanId, setLoanId] = useState("");
    const [amount, setAmount] = useState("");
    const [itemName, setItemName] = useState("");
    const [netWeight, setNetWeight] = useState("");
    const [grossWeight, setGrossWeight] = useState("");
    const [purity, setPurity] = useState("");
    const [goldRate, setGoldRate] = useState("");
    const [image, setImage] = useState([]);

    const loan = useNavigate();
    function LoanPage() {
        if (!loanId) {
            alert("Please entre loanId");
        }
        else if (!amount) {
            alert("Please entre amount");
        }
        else if (!itemName) {
            alert("Please entre itemName");
        }
        else if (!netWeight) {
            alert("Please entre netWeight");
        }
        else if (!grossWeight) {
            alert("Please entre grossWeight");
        }
        else if (!purity) {
            alert("Please entre purity");
        }
        else if (!goldRate) {
            alert("Please entre goldRate");
        }

        else {
            axios.post("https://girvi-backend-v1.onrender.com/addLoan", {
                loanId: loanId,
                amount: amount,
                itemName: itemName,
                netWeight: netWeight,
                grossWeight: grossWeight,
                purity: purity,
                goldRate: goldRate,
                image: image
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            })
                .then((resp) => {
                    console.log("Response:", resp.data);
                    loan('/NewLoan');
                })
                .catch((error) => console.log("Error:", error));
        }
    }

    return (
        <div>
            <h6 className='tag'><Button onClick={LoanPage} sx={{
                color: "#FFD500",
                marginRight: "-20px",
                ml: { lg: "45%", xs: "10px", sm: "20%", md: "20%" },
                "&:hover": { backgroundColor: 'transparent' }
            }}><KeyboardBackspace /></Button> &nbsp; Add Loan</h6>
            <CustProfile /> <br />
            <InputField /> <br />
            <Interest />  <br />
            <Box display='flex' alignItems='center' justifyContent='center' sx={{ marginTop: '15px' }}>
                <Button
                    variant="contained"
                    onClick={LoanPage}
                    sx={{
                        backgroundColor: "#FFD500",
                        width: '230px',
                        height: '50px',
                        borderRadius: '20px',
                        boxShadow: 'none',
                        marginBottom: '5px',
                    }}>

                    <Typography
                        variant="body1"
                        sx={{ fontWeight: '600', fontSize: '15px', fontFamily: 'Inter' }}
                    >
                        Create New Loan
                    </Typography>
                </Button>
            </Box>
        </div>
    )

    function Input() {
        const style = { color: 'red' };
        return (
            <>
                <div className="form-row">
                    <div className="form-group">
                        <label className='label1'>Loan Id<span style={style}>*</span> :</label> <br />
                        <input className='input1' type="text" value={loanId} onChange={(e) => setLoanId(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className='label1'>Amount<span style={style}>*</span> :</label> <br />
                        <input className='input1' type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                </div>
            </>
        )
    }

    function Input2() {
        const style = { color: 'red' };
        return (
            <>
                <div className="form-row">
                    <div className="form-group">
                        <label className='label1'>Net Weight (gm)<span style={style}>*</span> :</label> <br />
                        <input className='input1' type="text" value={netWeight} onChange={(e) => setNetWeight(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className='label1'>Gross Weight (gm)<span style={style}>*</span> :</label> <br />
                        <input className='input1' type="text" value={grossWeight} onChange={(e) => setGrossWeight(e.target.value)} />
                    </div>
                </div>
            </>
        )
    }

    function Input3() {
        const style = { color: 'red' };
        return (
            <>
                <div className="form-row">
                    <div className="form-group">
                        <label className='label1'>Purity<span style={style}>*</span> :</label> <br />
                        <input className='input1' type="text" value={purity} onChange={(e) => setPurity(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className='label1'>Today’s Gold rate for 1gm<span style={style}>*</span> :</label> <br />
                        <input className='input1' type="text" value={goldRate} onChange={(e) => setGoldRate(e.target.value)} />
                    </div>
                </div>
            </>
        )
    }

    function Img() {
        return (
            <Box sx={{
                mt: "13px",
            }}>
                <Button
                    sx={{
                        width: "168px",
                        height: "25px",
                        marginLeft: "70px"
                    }}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload image
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(e) => setImage(e.target.value)}
                        multiple
                    />
                </Button>
            </Box>
        )
    }

    function Input4() {
        const style = { color: 'red' };
        return (
            <>
                <div className="form-row">
                    <div className="form-group">
                        <label className='label1'>Interest Calculated by<span style={style}>*</span></label> <br />
                        <input className='input1' type="month" placeholder='Month' />
                    </div>
                    <div className="form-group">
                        <label className='label1'>Interest (%)<span style={style}>*</span></label> <br />
                        <input className='input1' type="text" />
                    </div>
                </div>
            </>
        )
    }

    function InputField() {
        const style = { color: 'red' };
        return (
            <>
                <div className='sizeOfBox'>
                    <Input />
                    <label className='label3'>Item Name<span style={style}>*</span> :</label> <br />
                    <input className='input3' type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                    <Input2 />
                    <Input3 />
                    <Img/>
                </div>
            </>
        )
    }

    function Interest() {
        const style = { color: 'red' };
        return (
            <>
                <div className='lastDiv'>

                    <div className='combine'>
                        <h3 className='num'><span>#1001</span></h3>
                        <h6 className='impDate'>Start Date : 16-03-2024</h6>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className='label1'>Tenure in<span style={style}>*</span></label> <br />
                            <input className='input1' type="month" placeholder='Month' />
                        </div>
                        <div className="form-group">
                            <label className='label1'>Tenure in<span style={style}>*</span></label> <br />
                            <input className='input1' type="text" />
                        </div>
                    </div>
                    <Input4 />
                </div>
            </>
        )
    }
}

function CustProfile() {
    return (
        <>
            <div className="names2">
                <img className='custImg' src={image} alt="soham" />
                <div style={{ paddingBottom: "10px", marginLeft: "25%" }}>
                    <h6 className='customerName3'>Soham Kale</h6>
                    <h6 className='number2'>7728527871</h6>
                </ div>
            </div>
        </>
    )
}

export default AddLoan;