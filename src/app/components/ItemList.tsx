import { Grid, Typography } from "@mui/material";
import Item from "./Item";
import { useStore } from "../../context/ContextProvider";

const ItemList = () => {
  const { items } = useStore();
  
  return (
    <>
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
        <Typography variant='h8' sx={{ fontWeight: 'bold', textDecoration: 'underline' }}> {items.length > 0 ? "Productos" : "No hay productos"} </Typography>
      </Grid>
      {
            items.map((item) => (
            <Item
                item={item}
            />
            ))
        }
    </>
  );
};

export default ItemList;