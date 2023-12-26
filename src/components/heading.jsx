import React from 'react'

const Heading = (props) => {
  return (
    <>
      <div className="menuSection uppercase text-lg-start text-center d-flex justify-center flex-col mx-auto">
        <h2 className="text-white ">{props.titelmenu}</h2>
        <div className="relative spanLine">
          <span className="d-flex bg-white absolute"></span>
        </div>
        <p className="pt-4 uppercase  text-white">{props.details}</p>
      </div>
    </>
  );
}

export default Heading