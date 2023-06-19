import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';


export const ButtonTask = ({ tipoBoton, accion }) => {
  tipoBoton = tipoBoton.toLowerCase();

  return (
    <IconButton aria-label="delete" onClick={accion} >
      { tipoBoton==="check" && (
        <CheckBoxIcon />
      )}

      { tipoBoton==="delete" && (
        <DeleteIcon />
      )}

      { tipoBoton==="edit" && (
        <EditIcon />
      )}

      { tipoBoton==="uncheck" && (
        <CheckBoxOutlineBlankIcon />
      )}
    </IconButton>
  );
};
