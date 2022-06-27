import { ADD_TO_CART, DELETE_CART, EMPTY_CART } from '../actions/cartActions';

// สร้าง default state
const initialState = [];
// function cartReducer จะรับค่ามาจาก cartActions โดยเริ่มต้นจะให้ parameter state = initialState ส่วน action จะรับค่าจาก cartActions
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // ห้ามทำการเปลี่ยนแปลงค่า state โดยตรง ดังนั้นจึงต้องทำการ Destructuring array
      let updatedCart;
      const foundItem = state.find((item) => item.id === action.payload.id);

      if (!foundItem) {
        updatedCart = [...state, action.payload];
      } else {
        updatedCart = state.map((item) => ({
          ...item,
          quantity:
            item.id === foundItem.id ? item.quantity + 1 : item.quantity,
        }));
      }

      return updatedCart;

    case DELETE_CART:
      return state.filter((item) => item.id !== action.payload);

    case EMPTY_CART:
      return [];

    default:
      return state;
  }
}
