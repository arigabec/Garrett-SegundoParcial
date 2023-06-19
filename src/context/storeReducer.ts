const types = {
  addItem: "adding item",
  deleteItem: "deleting item",
  editItem: "editing item",
  getItem: "getting item",
  login: "login",
};

const initialValues = {
  auth: false,
  items : [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        auth: true,
    };
    case types.addItem:
      return {
        ...state,
        items: [...state.items, action.payload[0]],
      };
    case types.deleteItem:
      console.log(action.payload.id);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id) 
      };
    case types.getItem:
      return {
        ...state,
        // item: state.items.filter(item => item.id === action.payload.id) 
      };
    case types.editItem:
      // const index = state.items.findIndex(item => item.id !== action.payload.id);
      // const newArray = [...state.items];
      return { 
        ...state,
        // items: newArray,
      };
    default:
      return state;
  }
};

export { initialValues, types };

export default storeReducer;
