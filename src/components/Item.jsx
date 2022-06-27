import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function Item({ product }) {
  // dispatch ใช้เพื่อเรียก fuction ใน cartActions โดยใน function จะมีการส่ง payload เป็น parameter
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const history = useHistory();

  function handleAddToCart() {
    if (!user) {
      history.push('/signin');
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  }

  return (
    <div className="product">
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      {/* dispatch ใช้เพื่อเรียก fuction ใน cartActions โดยใน function จะมีการส่ง payload เป็น parameter */}
      <button onClick={handleAddToCart}> Add To Cart</button>
    </div>
  );
}
