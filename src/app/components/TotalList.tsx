import { Grid, Typography } from "@mui/material";
import { useStore } from "../../context/ContextProvider";

export const TotalList = ( ) => {
    const { items } = useStore();
  
    return (
        <Grid container
            alignItems="center"
            justifyContent="bottom"
            className='box-shadow'
            sx={{ 
                    width: { sm: 600 },
                    padding: 2, 
                    borderRadius: 2 
            }}
        >
            <Typography variant='h8' sx={{ fontWeight: 'bold' }}> Cantidad de productos en lista: {items.length} </Typography>
        </Grid>
    );
};