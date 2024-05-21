import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBagById } from '../Store/SliceBag';
import { useParams } from 'react-router-dom';
import './Bags.css';

function BagsDetails() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const bagsState = useSelector((state) => state.bags);

  useEffect(() => {
    dispatch(getBagById(id));
  }, [dispatch, id]);
  
  if (bagsState.load) return <div>Loading...</div>;
  if (bagsState.error) return <div>Error: {bagsState.error}</div>;
  return (
    <div className="form-container">
      <h2>Bag Details</h2>
      {bagsState.selectedBag && (
        <>
          <p>ID: {bagsState.selectedBag.id}</p>
          <p>Brand: {bagsState.selectedBag.brand}</p>
          <p>Color: {bagsState.selectedBag.color}</p>
          <p>Price: ${bagsState.selectedBag.price}</p>
        </>
      )}
    </div>
  );
}

export default BagsDetails;
