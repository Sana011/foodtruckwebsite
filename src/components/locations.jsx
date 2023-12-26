import React from 'react'
import LocationCard from './locationCard';

const Locations = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <LocationCard date="20-27 October" titel="BROOKLYN" />
          <LocationCard date="20-27 October" titel="THE BRONX" />
          <LocationCard date="20-27 October" titel="MANHATTAN" />
          <LocationCard date="20-27 October" titel="QUEENS" />
          <LocationCard date="20-27 October" titel="STATEN ISLAND" />
          <LocationCard date="20-27 October" titel="BROOKLYN" />
          <LocationCard date="20-27 October" titel="QUEENS" />
          <LocationCard date="20-27 October" titel="BROOKLYN" />
        </div>
      </div>
    </>
  );
}

export default Locations