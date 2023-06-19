import { Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useStore } from "../../context/ContextProvider";
import { useNavigate } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { TotalList } from '../components/TotalList';
import AddIcon from '@mui/icons-material/Add';
import { Layout } from '../layout/Layout';

export const HomePage = () => {
    const { items } = useStore();
    const navigate = useNavigate();

    const addItem = () => {  
        navigate("/add-item");
    };

    useEffect(() => {
        console.log('Se cambio items', items);
    }, [items]);
    
  return (
    <>
        <Layout title="Lista de compras">
            <ItemList/>
            <Divider />
            <TotalList/>
            <Button variant="contained" sx={{ backgroundColor: 'secondary.main', m:2 }} endIcon={<AddIcon />} onClick={addItem}>
                Añadir producto
            </Button>
        </Layout>
    </>
  )
}