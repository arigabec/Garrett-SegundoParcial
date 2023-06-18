import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from "../../context/ContextProvider";
import { useNavigate } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { TotalList } from '../components/TotalList';
import AddIcon from '@mui/icons-material/Add';
import { Layout } from '../layout/Layout';

export const HomePage = () => {
    const [newItem, setNewItem] = useState(false);
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addItem = () => {
        // dispatch({ type: types.login });    
        navigate("/add-item");
    };

    useEffect(() => {
        console.log('Se cambio items', items);
        // localStorage.setItem('items', items);
    }, [items]);

    useEffect(() => {
        console.log('Se cambio newItem', items);
        // localStorage.setItem('newItem', newItem);
    }, [newItem]);
    
  return (
    <>
        <Layout title="Lista de compras">
            <ItemList items={items} setItems={setItems} setNewItem={setNewItem} />

            <TotalList items={items} />

            <Button variant="contained" sx={{ backgroundColor: 'secondary.main' }} endIcon={<AddIcon />} onClick={addItem}>
                Añadir producto
            </Button>
        </Layout>
    </>
  )
}