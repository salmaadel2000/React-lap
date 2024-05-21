import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBags, deleteBagById } from '../Store/SliceBag';
import './Bags.css';

function Bags() {
    const dispatch = useDispatch();
    const bagsState = useSelector((state) => state.bags);

    useEffect(() => {
        dispatch(getAllBags());
    }, [dispatch]);

    const deleteHandler = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this bag?");
        if (confirmDelete) {
            dispatch(deleteBagById(id));
        }
    };

    if (bagsState.load) return <div>Loading...</div>;
    if (bagsState.error) return <div>Error: {bagsState.error}</div>;

    return (
        <div className="bags-container">
            <h1>All Bags</h1>
            <div className="bags-grid">
                {Array.isArray(bagsState.bags) && bagsState.bags.map(bag => (
                    <div key={bag.id} className="bag-item">
                        <div className="bag-details">
                            <h3>{bag.brand}</h3>
                            <p>Color: {bag.color}</p>
                            <p>Price: ${bag.price}</p>
                        </div>
                        <div className="bag-actions">
                            <button onClick={() => deleteHandler(bag.id)}>Delete</button>
                            <Link to={`/bag/${bag.id}/edit`}><button>Edit</button></Link>
                            <Link to={`/bag/${bag.id}`}><button>Show Detail</button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/add"><button>Add Bag</button></Link>
        </div>
    );
}

export default Bags;
