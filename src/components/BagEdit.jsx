import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBagById, editBagById } from '../Store/SliceBag';
import './Bags.css';

function BagEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const bagsState = useSelector((state) => state.bags);
  const [formData, setFormData] = useState({
    id: '',
    brand: '',
    color: '',
    price: '',
  });

  useEffect(() => {
    if (id) {
      dispatch(getBagById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (bagsState.selectedBag) {
      setFormData({
        id: bagsState.selectedBag.id,
        brand: bagsState.selectedBag.brand,
        color: bagsState.selectedBag.color,
        price: bagsState.selectedBag.price,
      });
    }
  }, [bagsState.selectedBag]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(editBagById({ id: formData.id, bag: formData }));
      alert('Bag updated successfully!');
    } catch (error) {
      console.error('Failed to update bag:', error);
      alert('Failed to update bag');
    }
  };

  if (bagsState.load) return <div>Loading...</div>;
  if (bagsState.error) return <div >Error: {bagsState.error}</div>;

  return (
    <div className="form-container">
      <h2>Edit Bag</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} readOnly />
        </div>
        <div>
          <label>Brand:</label>
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
        </div>
        <div>
          <label>Color:</label>
          <input type="text" name="color" value={formData.color} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default BagEdit;
