import React from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import ridersData from './fakeData';

const Destination = () => {
  const styles ={ 
    width:'200px',
    height:'200px'
  }

  const {bedType} = useParams();
  const getItem = ridersData.find(item => item.bedType ==bedType);
  const {imgUrl,title} = getItem;
 
  return (
    <div style={{ textAlign: "center", color: "black" }}>
      <h1 className="text-success p-5">
        Let's booking a ticket for {bedType}
      </h1>
      <div>
        <h1>{title}</h1>
        <img style={styles} src={imgUrl} alt=""/>
        <p>Want a <Link to="/home">different rider?</Link> </p>
      </div>
     
    </div>
  );
};

export default Destination;
