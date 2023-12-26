import React from 'react'

const Singlemenucard = (props) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col   align-items-center mb-4 border-bottom border-slate-500 pb-3  text-white">
        <div>
          <img src={props.menuimg1} alt="" />
        </div>
        <div className="flex lg:flex-row lg:text-start text-center flex-col lg:justify-between justify-center w-full p-3 lg:items-end items-center">
          <div className='lg:text-start'>
            <h5 className="">{props.headings}</h5>
            <h6 className="mb-0">{props.shortdes}</h6>
          </div>
          <div>
            <p className="mb-0">{props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singlemenucard