import { Typography } from "@mui/material";

const Description = ({nombre, valor, completado }) => {
    return (
        <>
            { completado ? (
                <div>
                    <Typography display="inline" variant="h7" component="div" color="primary" sx={{ textDecoration: 'line-through' }}>
                        {nombre}
                    </Typography>
                    <Typography display="inline" variant="h8" component="div" sx={{ textDecoration: 'line-through' }}>
                        {valor}
                    </Typography>
                </div>
                
            ) : (
                <div>
                    <Typography display="inline" variant="h7" component="div" color="primary" >
                        {nombre}
                    </Typography>
                    <Typography display="inline" variant="h8" component="div">
                        {valor}
                    </Typography>
                </div>
            )
            } 
        </>
    );
};

export default Description;