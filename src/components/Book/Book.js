import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const {bedType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's booking a {bedType} Rider.</h1>
            <p>Want a <Link to="/home">different rider?</Link> </p>
        </div>
    );
};

export default Book;