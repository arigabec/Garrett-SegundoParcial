import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';


export const ButtonTask = ({ tipoBoton, accion }) => {
  tipoBoton = tipoBoton.toLowerCase();

  return (
    <IconButton aria-label="delete" onClick={accion} >
      { tipoBoton==="check" && (
        <CheckIcon />
      )}

      { tipoBoton==="delete" && (
        <DeleteIcon />
      )}

      { tipoBoton==="edit" && (
        <EditIcon />
      )}
    </IconButton>
  );
};
