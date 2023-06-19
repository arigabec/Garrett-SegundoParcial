import { Grid, Typography } from '@mui/material';

export const Layout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid item
       className='box-shadow'
       xs={ 3 }
       sx={{ 
            width: { sm: 600 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 
        }}>
          <Typography variant='h5' sx={{ mb: 1, color: "secondary.main", fontWeight: 'bold', textAlign: "center" }}>{ title }</Typography>
            { children }
        </Grid>

    </Grid>

  )
}