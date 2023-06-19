# Lista de Compras - Segundo Parcial
Nombre: Ariane Garrett

Código: 54617

## Resumen
Para este parcial trabajé en una lista de compras en la que los usuarios puedan añadir y eliminar diferentes tarjetas que 
contienen la descripción de los productos que desean o necesitan comprar a la hora de hacer compras.

El funcionamiento es sencillo, simplemente deben ingresar a la página, hacer click en login y añadir un elemento a la lista. 
Posteriormente deben llenar los datos requeridos para así añadir un producto de manera correcta. Y listo! Podrán visualizar la lista 
de compras y marcar los productos ya comprados, además de eliminarlos posteriormente o marcarlos como comprados.

Trabajé utilizando React, Vite, Material-UI, Icons-Material y otras librerías que me permitieron desarrollar el proyecto satisfactoriamente.

## Video
El link donde se encuentra el video explicativo del parcial es el siguiente: 
https://drive.google.com/drive/folders/1Tf9unOYXBo0VsPXzMWxGvSXK5e58atpV?usp=sharing

## Primeras configuraciones
Para iniciar el proyecto, debemos clonar el repositorio con el siguiente comando:

```bash
git clone https://github.com/arigabec/Garrett-SegundoParcial.git
```
Una vez obtenido el proyecto completo debemos ejecutar los siguientes comandos en la rama *master*, en la carpeta donde clonamos el proyecto,
ya que ahí se encuentra el contenido de la página.

```bash
cd Garrett-SegundoParcial
npm install
npm run dev
```
Ahora nos dirigimos a la dirección de LocalHost obtenida, para poder visualizar la página en funcionamiento.

## App
Este archivo se encarga de poder mostrar los componentes y páginas del proyecto. *main.jsx* es quien llama a *App.jsx* para poder ver la página funcionando en el localHost. Aquí es donde llamamos al ContextProvider, que nos permite estar al tanto de los cambios que se realicen en los elementos de la página web.

También llamamos al BrowserRouter, que nos permite trabajar con las rutas necesarios para redirigirnos de una página a otra sin problemas.

## Componentes, layouts & pages
La página en la que trabajé tiene los siguientes *componentes*:
- ButtonTask: el componente sirve para mostrar los botones de *editar*, *marcar como completado* y *eliminar* de una tarjeta de la lista de compras.
- Description: el componente sirve para mostrar la información contenida en cada tarjeta (nombre del producto, cantidad, categoría).
- FormNewItem: el componente sirve para mostrar el formulario donde podemos añadir los datos del producto que queremos añadir a la lista de compras.
- Item: el componente sirve para mostrar la tarjeta con la información de un producto añadido a la lista de compras. 
- ItemList: el componente sirve para mostrar todas las tarjetas existentes en la lista de compras.
- TotalList: el componente sirve para mostrar el contador de productos existente en la lista.

También tiene las siguientes *pages*:
- EditPage: esta página se mostrará cada que nos dirijamos a la ruta /edit-item. Contiene el formulario de edición de un elemento.
- HomePage: esta página se mostrará cada que nos dirijamos a la ruta /. Contiene la lista de elementos y el botón que nos permite añadir un elemento nuevo a esta.
- NewItemPage: esta página se mostrará cada que nos dirijamos a la ruta /add-item. Contiene el formulario de edición de un elemento.
- LoginPage: esta página se mostrará cada que nos dirijamos a la ruta /auth/login. Contiene el formulario de inicio de sesión.
- RegisterPage: esta página se mostrará cada que nos dirijamos a la ruta /auth/register. Contiene el formulario de registro.

En cuanto a los *layouts*, existen dos:
- Layout: es el layout que se utiliza a lo largo de las diferentes pages de la página web.
- AuthLayout: es el layout que se utiliza en la página de autenticación (login).

## useState
Utilicé *useState* para controlar el contenido del formulario de la página en base a un estado. En mi caso, utilicé esta funcionalidad para verificar el estado de una tarjeta existente en la lista de productos, para así poder marcarla como completada o para poder eliminarla.

```bash
const [completado, setCompletado] = useState(false);
const [visible, setVisible] = useState(true);
```

## useEffect y localStorage
Utilicé *useEffect* para guardar los datos del formulario en el almacenamiento local (localStorage) cada vez que cambien. En mi caso, esta funcionalidad se encarga de realizar cierta acción cada que se modifica la lista de items y guarda los valores en el localStorage.

```bash
useEffect(() => {
  console.log('Se cambio items', items);
  localStorage.setItem('items', items);
}, [items]);
```

Para poder verificar esto, popdemos dirigirnos a la opcion de "Herramientas para desarrolladores" de la página abierta e ingresar a la opción de 
*Aplicación*, donde podemos ver el localStorage de la página que se encuentra en localHost, que se encarga de almacenar los datos del formulario
de manera persistente.

## .map()
.map() → lo utilicé para poder visualizar los elementos de la lista de compras.

```bash
items.map((item) => (
  <Item
      item={item}
  />
))
```

## useMemo
Pude haber utilizado *useMemo* para calcular y mostrar el número total de elementos existentes en la lista de compras, sin embargo, preferí usar el *useStore* para obtener el erreglo de items y simplemente obtener su tamaño. 

```bash
const { items } = useStore();
<Typography variant='h8' sx={{ fontWeight: 'bold' }}> Cantidad de productos en lista: {items.length} </Typography>         
```

## memo
Para optimizar el rendimiento de los componentes y evitar renderizados innecesarios utilicé *memo*. Esto en el componente *Item* ya que al ser una tarjeta que contiene la información de diferentes items, debe renderizarse varias veces y en diferentes ocasiones.

```bash
memo(Item)
```

## useRef
Utilicé *useRef* para enfocar automáticamente el primer input en el formulario de inicio de sesión cuando se carga la página.

```bash
const inputRef = useRef();

useEffect(() => {
    if (inputRef.current) {
        inputRef.current.focus();
    }
}, []);

<TextField
  label="Email"
  type="email"
  placeholder="email@gmail.com"
  fullWidth
  inputRef={inputRef}
/>
```

Hice lo mismo para enfocar automáticamente el primer input en el formualrio para añadir/editar un elemento de la lista.

```bash
const inputRef = useRef();

useEffect(() => {
    if (inputRef.current) {
        inputRef.current.focus();
    }
}, []);

<TextField
    label="Producto"
    value={producto}
    onChange={(e) => setProducto(e.target.value)}
    fullWidth
    margin="normal"
    inputRef={inputRef}
/>
```

## useContext
Trabajé con el *useContext* en el ContextProvider, de modo que es posible estar al tanto de los cambios que se realicen en los elementos a lo largo de toda la página web.

```bash
const ListContext = createContext();
```

## useReducer y useDispatch
Utilicé *useReducer* para manejar las acciones relacionadas con los elementos de la lista de compras, como crear, editar y eliminar. Para esto, la página tiene valores iniciales que posteriormente serán modificados.

```bash
const initialValues = {
  auth: false,
  items : [],
}
```

Y para poder trabajar con las diferentes acciones, llamamos al *useDispatch* que nos permitirá referenciar a las acciones que deseamos realizar.

```bash
// Al hacer click el el botón de submit del formulario, usamos dispatch para referenciar la acción
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

// Añadimos un item (acción)
case types.addItem:
      return {
        ...state,
        items: [...state.items, action.payload[0]],
      };
```

De igual manera, utilicé el reducer para verificar la autenticación.

## react-router-dom
*react-router-dom* permite crear diferentes rutas en la aplicación, en mi caso, lo utilicé para redirigir las páginas cuando sea necesario.

Rutas:
- /auth/login → redirige a la página de inicio de sesión.
- /auth/register → redirige a la página de registro.
- / → redirige a la página principal, que muestra la lista de compras.
- /edit-item → redirige a la página que contiene el formulario para editar un elemento.
- /add-item → redirige a la página que contiene el formulario para añadir un elemento.

## guards
Implementé guards de autenticación utilizando *react-router-dom* para proteger las rutas que requieren autenticación. Esto nos permite forzar el inicio de sesión para poder ingresar a la página principal. En este caso, simplemente es necesario hacer click en el botón de *login* para poder continuar a la página de lista de compras, pero así aseguramos la autenticación de la página.

```bash
<Route
  path="/"
  element={
    <GuardedRoute auth={auth}>
      <HomePage />
    </GuardedRoute>
  }
/>
```

## react-hook-form
Utilicé *react-hook-form* para que los campos del formulario de añadir o editar elementos sean obligatorios, de modo que la información de los productos añadidos tengan necesariamente el nombre del producto, la cantidad que se desea comprar y la categoría a la que pertenecen. Para esto simplemenente añadí *required* en el componente de cada campo.

```bash
<TextField
    label="Producto"
    value={producto}
    onChange={(e) => setProducto(e.target.value)}
    fullWidth
    margin="normal"
    inputRef={inputRef}
    required
/>
```