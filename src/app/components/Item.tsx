import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Description from './Description';
import { useState, useMemo, memo } from 'react';
import { ButtonTask } from './ButtonTask';
import { Box } from '@mui/material';
import { useDispatch } from "../../context/ContextProvider";
import { useNavigate } from 'react-router-dom';
import IconoAbarrotes from "../assets/kitchen.png";
import IconoFrutas from "../assets/fruits.png";
import IconoVerduras from "../assets/verduras.png";
import IconoLacteos from "../assets/cheese.png";
import IconoBebidas from "../assets/drinks.png";
import IconoHogar from "../assets/home.png";
import IconoMascotas from "../assets/pets.png";
import IconoHigiene from "../assets/cleaning.png";
import { types } from '../../context/storeReducer';

const diccionarioIconos = {
    Abarrotes: IconoAbarrotes,
    Frutas: IconoFrutas,
    Verduras: IconoVerduras,
    Lacteos: IconoLacteos,
    Bebidas: IconoBebidas,
    Hogar: IconoHogar,
    Mascotas: IconoMascotas,
    Higiene: IconoHigiene,
};


const Item = ({ item }) => {
    const [completado, setCompletado] = useState(false);
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const responseMemoized = useMemo(() => {
        console.log('Se renderizo la card');
      }, []);

    const checkTask = () => {
        setCompletado(!completado);
    };

    const deleteTask = () => {
        setVisible(!visible);
        dispatch({ type: types.deleteItem, payload: item });
    };

    const editTask = () => {
        navigate("/edit-item");
    };

    return (
        <>
        {visible && (
        <Card sx={{ minWidth: 275, m:3 }} >
        <CardContent>
        <div style={{ width: '100%' }}>
            <Box
                sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
            >
                <Box
                sx={{
                    width: '100%',
                }}
                >
                    <Description nombre="Producto: " valor={item.producto} completado={completado}/>
                    <Description nombre="Cantidad: " valor={item.cantidad} completado={completado}/>
                    <Description nombre="Categoría: " valor={item.categoria} completado={completado}/>
                </Box>
                <Box
                    component="img"
                    sx={{
                        height: 70,
                        width: 70,
                        flexShrink: 1,
                    }}
                    src={diccionarioIconos[item.categoria]}
                />
            </Box>
        </div>
        
            
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                m: 1,
                }}
            >
                <ButtonTask tipoBoton="edit" accion={editTask}/>
                <ButtonTask tipoBoton="check" accion={checkTask}/>
                <ButtonTask tipoBoton="delete" accion={deleteTask}/>
            </Box>
        </CardContent>
        </Card>
        )}
        </>
    )
}

export default memo(Item);