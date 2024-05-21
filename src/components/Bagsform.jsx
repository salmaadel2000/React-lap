import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addNewBag } from '../Store/SliceBag';

function BagsForm({ history }) {
    const [bag, setBag] = useState({ brand: '', color: '', price: '' });
    const bagsState = useSelector((state) => state.bags);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBag({ ...bag, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(addNewBag(bag));
        } catch (error) {
            console.error('Error adding bag:', error);
        }
    };
    
    if (bagsState.load) return <div>Loading...</div>;
    if (bagsState.error) return <div>Error: {bagsState.error}</div>;


    return (
        <div className="form-container">
            <h2>Add New Bag</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Brand:
                    <input type="text" name="brand" value={bag.brand} onChange={handleChange} required />
                </label>
                <label>
                    Color:
                    <input type="text" name="color" value={bag.color} onChange={handleChange} required />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={bag.price} onChange={handleChange} required />
                </label>
                <button type="submit">Add Bag</button>
            </form>
        </div>
    );
}

export default BagsForm;
