import { Grid, Typography } from "@mui/material";
import Item from "./Item";

const ItemList = ({ items, setItems, setNewItem }) => {

  const deleteItem = (item) => {
    const itemIndex = items.indexOf(item);
    const newItems = items.splice(itemIndex, 1);
    setItems([...items]);
    console.log(items);
  };

  return (
    <Grid container
        alignItems="center"
        className='box-shadow'
        sx={{ 
                width: { sm: 600 },
                padding: 3, 
                borderRadius: 2 
    }}>
        <Typography variant='h8' sx={{ mb: 1, fontWeight: 'bold' }}> {items.length > 0 ? "Productos" : "No hay productos"} </Typography>
        {
            items.map((item) => (
            <Item
                item={item} 
                setNewItem={setNewItem}
                deleteItem={deleteItem}
            />
            ))
        }
    </Grid>
  );
};

export default ItemList;