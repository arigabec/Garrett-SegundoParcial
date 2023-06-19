const types = {
  addItem: "adding item",
  deleteItem: "deleting item",
};

const initialValues = {
  items : [
    {
      producto: "Zanahoria",
      cantidad: "300g",
      categoria: "Abarrotes",
    },
    {
      producto: "Zanahoria2",
      cantidad: "300g",
      categoria: "Verduras",
    }
  ]
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.addItem:
      return {
        ...state,
    };
    case types.deleteItem:
      return {
        ...state,
    };
    default:
      return state;
  }
};

export { initialValues, types };

export default storeReducer;
