export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_CART = 'DELETE_CART';
export const EMPTY_CART = 'EMPTY_CART';

// ตัวอย่างค่าที่สร้างจาก function addToCart และส่งไปยัง cartReducer
// const action = {
//   type: '',
//   payload: {
//     title: '',
//     price: '',
//     quantity: '',
//   },
// };

// สร้าง fuction เพื่อส่ง type และ payload ไปยัง cartReducer
export function addToCart(addedProduct) {
  return {
    type: ADD_TO_CART,
    payload: addedProduct,
  };
}

export function deleteCart(id) {
  return {
    type: DELETE_CART,
    payload: id
  }
}

export function emptyCart() {
  return {
    type: EMPTY_CART,
  }
}
