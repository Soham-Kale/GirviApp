import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Grid,
    Paper,
    Button,
    styled,
    useTheme,
    useMediaQuery
} from '@mui/material';

const GreenBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#90EE90',
    padding: '8px 16px',
    borderRadius: '4px',
    color: '#000',
    display: 'inline-block',
    marginBottom: '16px',
    [theme.breakpoints.up('md')]: {
        padding: '10px 20px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
    },
}));

const LoanCard = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Card
            sx={{
                width: { xs: '100%', sm: 450, md: 800, lg: 900 },
                borderRadius: { xs: '16px', md: '24px' },
                backgroundColor: '#f5f5f5',
                boxShadow: {
                    xs: '0 4px 8px rgba(0,0,0,0.1)',
                    md: '0 6px 12px rgba(0,0,0,0.15)'
                },
                position: 'relative',
                overflow: 'visible',
                m: { xs: 1, md: 3 },
                transition: 'all 0.3s ease',
            }}
        >
            <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                {/* Header Section */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                    {/* Loan ID Banner */}
                    <GreenBox
                        sx={{
                            position: 'absolute',
                            top: -4,
                            left: -4,
                            borderRadius: '4px',
                            fontSize: { xs: '0.875rem', md: '1.2rem' },
                        }}
                    >
                        <Typography variant={isDesktop ? "h6" : "subtitle1"} component="span">
                            #1002
                        </Typography>
                    </GreenBox>

                    {/* Loan Details Header */}
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-end',
                            gap: { xs: 2, md: 6 },
                            mt: { xs: 3, md: 1 },
                        }}
                    >
                        <Typography sx={{
                            fontSize: { xs: '0.875rem', md: '1.1rem' },
                            fontWeight: 'medium',
                            color: '#555'
                        }}>
                            16-03-2024
                        </Typography>
                        <Typography sx={{
                            fontSize: { xs: '0.875rem', md: '1.1rem' },
                            fontWeight: 'medium',
                            color: '#555'
                        }}>
                            20,000
                        </Typography>
                        <Typography sx={{
                            fontSize: { xs: '0.875rem', md: '1.1rem' },
                            fontWeight: 'medium',
                            color: '#555'
                        }}>
                            2.5%
                        </Typography>
                        <Typography sx={{
                            fontSize: { xs: '0.875rem', md: '1.1rem' },
                            fontWeight: 'medium',
                            color: '#555'
                        }}>
                            12 Months
                        </Typography>
                    </Box>
                </Box>

                {/* Main Content Grid */}
                <Grid container spacing={4}>
                    {/* Left Section - Payment Details */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            p: { xs: 2, md: 3 },
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}>
                            {/* Payment Table */}
                            <Grid container spacing={3}>
                                {/* Header Row */}
                                <Grid item xs={4}>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '0.875rem', md: '1.1rem' },
                                        color: '#333'
                                    }}>
                                        #
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '0.875rem', md: '1.1rem' },
                                        color: '#333'
                                    }}>
                                        Principal
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '0.875rem', md: '1.1rem' },
                                        color: '#333'
                                    }}>
                                        Interest
                                    </Typography>
                                </Grid>

                                {/* Paid Row */}
                                <Grid item xs={4}>
                                    <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                        Paid
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography
                                        color="success.main"
                                        sx={{
                                            fontSize: { xs: '0.875rem', md: '1rem' },
                                            fontWeight: 'medium'
                                        }}
                                    >
                                        18,000.00
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography
                                        color="success.main"
                                        sx={{
                                            fontSize: { xs: '0.875rem', md: '1rem' },
                                            fontWeight: 'medium'
                                        }}
                                    >
                                        1,000.00
                                    </Typography>
                                </Grid>

                                {/* Pending Row */}
                                <Grid item xs={4}>
                                    <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                        Pending
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography
                                        color="error.main"
                                        sx={{
                                            fontSize: { xs: '0.875rem', md: '1rem' },
                                            fontWeight: 'medium'
                                        }}
                                    >
                                        2,000.00
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography
                                        color="error.main"
                                        sx={{
                                            fontSize: { xs: '0.875rem', md: '1rem' },
                                            fontWeight: 'medium'
                                        }}
                                    >
                                        0.00
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        {/* Interest Per Month */}
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 3
                        }}>
                            <Typography
                                color="warning.main"
                                sx={{
                                    fontSize: { xs: '0.875rem', md: '1rem' },
                                    fontWeight: 'medium'
                                }}
                            >
                                Interest: 250.00 (per month)
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    fontSize: { xs: '0.875rem', md: '1rem' },
                                    textTransform: 'none',
                                    borderRadius: '8px'
                                }}
                            >
                                View items
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Section - Item Details */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            p: { xs: 2, md: 3 },
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: 3,
                                alignItems: { xs: 'center', md: 'flex-start' }
                            }}>
                                <Paper
                                    sx={{
                                        width: { xs: 100, md: 150 },
                                        height: { xs: 100, md: 150 },
                                        borderRadius: '16px',
                                        border: '1px solid #ddd',
                                        boxShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                                    }}
                                />
                                <Box>
                                    <Typography sx={{
                                        mb: 2,
                                        fontSize: { xs: '0.875rem', md: '1.1rem' },
                                        fontWeight: 'medium',
                                        color: '#333'
                                    }}>
                                        Item Name: Ring
                                    </Typography>
                                    <Typography sx={{
                                        mb: 2,
                                        fontSize: { xs: '0.875rem', md: '1.1rem' },
                                        color: '#555'
                                    }}>
                                        Principal Amount: 20,000
                                    </Typography>
                                    <Typography sx={{
                                        mb: 2,
                                        fontSize: { xs: '0.875rem', md: '1.1rem' },
                                        color: '#555'
                                    }}>
                                        Net weight: 2gm
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xs: '0.875rem', md: '1.1rem' },
                                        color: '#555'
                                    }}>
                                        Gross weight: 2gm
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default LoanCard;