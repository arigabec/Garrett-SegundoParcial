import { Grid, Typography } from "@mui/material";

export const TotalList = ({ items }) => {
    const total = items.reduce((total) => total + 1, 0);
  
    return (
        <Grid container
            alignItems="center"
            justifyContent="bottom"
            className='box-shadow'
            sx={{ 
                    width: { sm: 600 },
                    padding: 3, 
                    borderRadius: 2 
        }}>
            <Typography variant='h8' sx={{ mb: 0, fontWeight: 'bold' }}> Cantidad de productos en lista: {total} </Typography>
        </Grid>
    );
};