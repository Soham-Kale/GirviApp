import React from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Avatar,
  IconButton,
  styled 
} from '@mui/material';
import { KeyboardBackspace, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import image from "./asset/soham.png";

const StyledCard = styled(Card)({
  boxShadow: 'none',
  border: '1px solid #f0f0f0',
  borderRadius: 8,
  marginBottom: 16
});

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} overflow={'hidden'}>
        {/* Header */}
        <Grid item xs={12}>
          <StyledCard>
            <CardContent>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                color: '#FFD500' 
              }}>
                <IconButton 
                  onClick={() => navigate('/CustomerPage')}
                  sx={{ 
                    color: '#FFD500',
                    mr: 1,
                    '&:hover': { backgroundColor: 'transparent' }
                  }}
                >
                  <KeyboardBackspace />
                </IconButton>
                <Typography>Profile</Typography>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Customer Profile */}
        <Grid item xs={12} sx={{ mt: { xs: "-60px" }, mb: { xs: "-50px" } }}>
          <StyledCard>
            <CardContent>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 2 
              }}>
                <Avatar 
                  src={image} 
                  alt="soham"
                  sx={{ width: 56, height: 56 }}
                />
                <Box>
                  <Typography variant="h6">Soham Kale</Typography>
                  <Typography color="text.secondary">7728527871</Typography>
                </Box>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Summary Table */}
        <Grid item xs={12}>
          <StyledCard>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography color="text.secondary" gutterBottom>
                    # As on Date
                  </Typography>
                </Grid>
                
                <Grid item xs={4}>
                  <Typography>#</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Principal</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Interest</Typography>
                </Grid>

                {/* Expected Row */}
                <Grid item xs={4}>
                  <Typography color="text.secondary">Expected</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>20,000.00</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ color: '#FFD500' }}>1,000.00</Typography>
                </Grid>

                {/* Paid Row */}
                <Grid item xs={4}>
                  <Typography color="text.secondary">Paid</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="success.main">18,000.00</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="success.main">1,000.00</Typography>
                </Grid>

                {/* Pending Row */}
                <Grid item xs={4}>
                  <Typography color="text.secondary">Pending</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="error.main">2,000.00</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="error.main">0.00</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Loans Section */}
        <Grid item xs={12} sx={{ mt: { xs: "-40px" }, }}>
          <StyledCard>
            <CardContent>
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2
              }}>
                <Typography variant="h6">Loans</Typography>
                <Button
                  variant="contained"
                  startIcon={<Add />}
                  onClick={() => navigate('/addLoan')}
                  sx={{
                    bgcolor: '#FFD500',
                    color: 'black',
                    '&:hover': { bgcolor: '#FFD500' }
                  }}
                >
                  Add Loan
                </Button>
              </Box>

              {/* Loan Cards */}
              <Grid container spacing={2}>
                {/* Loan #1002 */}
                <Grid item xs={12}>
                  <StyledCard>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 2
                          }}>
                            <Typography 
                              sx={{ 
                                bgcolor: '#e8f5e9',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 1
                              }}
                            >
                              #1002
                            </Typography>
                            <Box>
                              <Typography color="text.secondary">
                                16-03-2024
                              </Typography>
                              <Typography color="text.secondary">
                                20,000 • 2.5%
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        {/* Table Content */}
                        <Grid item xs={12}>
                          <Grid container spacing={1}>
                            {/* Headers */}
                            <Grid item xs={4}>
                              <Typography color="text.secondary">#</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.secondary">Principal</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.secondary">Interest</Typography>
                            </Grid>

                            {/* Paid Row */}
                            <Grid item xs={4}>
                              <Typography>Paid</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="success.main">18,000.00</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="success.main">1,000.00</Typography>
                            </Grid>

                            {/* Pending Row */}
                            <Grid item xs={4}>
                              <Typography>Pending</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="error.main">2,000.00</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="error.main">0.00</Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* Footer */}
                        <Grid item xs={12}>
                          <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            pt: 2,
                            borderTop: '1px solid #f0f0f0'
                          }}>
                            <Typography sx={{ color: '#ff9800' }}>
                              Interest: 250.00 (per month)
                            </Typography>
                            <Button 
                              onClick={() => navigate('/ViewItem')}
                              sx={{ 
                                color: '#FFD500',
                                textTransform: 'none'
                              }}
                            >
                              View items
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </StyledCard>
                </Grid>

                {/* Loan #1001 - Similar structure */}
                <Grid item xs={12}>
                  {/* Similar structure as #1002 */}
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;