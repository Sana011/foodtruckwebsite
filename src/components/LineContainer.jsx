import React from 'react'

const LineContainer = (props) => {
  return (
    <>
      <div className="line-container">
        <span className="horizontal-line"></span>
      </div>

      <h3 className="pb-10 uppercase text-lg-start text-center">
        {props.titel}
      </h3>
    </>
  );
}

export default LineContainer