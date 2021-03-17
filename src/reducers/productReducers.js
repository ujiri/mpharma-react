const initialState = {
  status: 'idle',
  products: []
}

export default function productReducers(state = initialState, action) {
  switch(action.type) {
    case 'FETCHING':
      return { ...state, status: 'fetching' };
    case 'STORE_PRODUCT':
      console.log(action.payload);
      state =  {
        ...state,
        products: [...state.products, action.payload],
      }
      console.log(state)
      return state
    case 'UPDATE_PRODUCT':
    break
    case 'DELETE_PRODUCT':
    break
    default:
      return state
  }
}

const saveToBrowser = (state) => {

}
