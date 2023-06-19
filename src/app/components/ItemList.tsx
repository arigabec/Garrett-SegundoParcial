import { Grid, Typography } from "@mui/material";
import Item from "./Item";
import { useStore } from "../../context/ContextProvider";

const ItemList = ({ setItems, setNewItem }) => {
  const { items } = useStore();
  
  return (
    <>
        <Typography variant='h8' sx={{ mb: 1, fontWeight: 'bold', textDecoration: 'underline' }}> {items.length > 0 ? "Productos" : "No hay productos"} </Typography>
        {
            items.map((item) => (
            <Item
                item={item} 
                setNewItem={setNewItem}
            />
            ))
        }
    </>
  );
};

export default ItemList;