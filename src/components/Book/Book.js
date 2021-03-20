import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const {bedType, imgUrl} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's booking a {bedType} Rider.</h1>
            <img src={imgUrl} alt=""/>
            <p>Want a <Link to="/home">different rider?</Link> </p>
        </div>
    );
};

export default Book;