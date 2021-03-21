import React from 'react';
import Cart from '../Cart/Cart';
import './Home.css';
import fakeData from '../Destination/fakeData';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between',
    }

   
    return (
        <div className="home-map">
            <div style={style}>

                {
                    fakeData.map(rider => <Cart key={rider.bedType} rider={rider}></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;