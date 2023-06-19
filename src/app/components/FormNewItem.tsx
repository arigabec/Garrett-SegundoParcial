import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "../../context/ContextProvider";
import { useNavigate } from 'react-router-dom';
import { types } from "../../context/storeReducer";
import {v4 as uuidv4} from 'uuid';

const FormNewItem = ({ type }) => {
    const [producto, setProducto] = useState("");
    const [categoria, setCategoria] = useState("");
    const [cantidad, setCantidad] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = [
            {
                id: uuidv4(),
                producto,
                cantidad,
                categoria,
            },
        ];
        console.log(item);
        dispatch({ type: types.addItem, payload: item});    
        navigate("/");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Producto"
                    value={producto}
                    onChange={(e) => setProducto(e.target.value)}
                    fullWidth
                    margin="normal"
                    inputRef={inputRef}
                />
                <TextField
                    label="Cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label"> Selecciona una categoría </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={categoria}
                        label="Categoria"
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <MenuItem value="Abarrotes"> Abarrotes </MenuItem>
                        <MenuItem value="Frutas"> Frutas </MenuItem>
                        <MenuItem value="Verduras"> Verduras </MenuItem>
                        <MenuItem value="Lacteos"> Lacteos </MenuItem>
                        <MenuItem value="Bebidas"> Bebidas </MenuItem>
                        <MenuItem value="Hogar"> Hogar </MenuItem>
                        <MenuItem value="Mascotas"> Mascotas </MenuItem>
                        <MenuItem value="Higiene"> Higiene </MenuItem>
                    </Select>
                </FormControl>
                <Box textAlign='center'>
                    <Button 
                        type="submit"
                        variant="contained" 
                        color="secondary" 
                        sx={{ m:3, position: "center" }} 
                        endIcon={<ShoppingBasketIcon />}
                    >
                        { type }
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default FormNewItem;