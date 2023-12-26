import React from 'react'
const MenuCard = (props) => {
  return (
    <>
      <div className="col-lg-3 hovercolor col-12 justify-center flex flex-col z-2 border border-slate-400 h-auto relative">
        <div className="img-Con flex justify-center h-auto">
          <img src={props.imgproduct} className="" alt="" />
        </div>
        <div className="card-content text-white text-lg-start text-center ps-3 pe-3 pb-3">
          <p> {props.price}</p>
          <h3>{props.heading}</h3>
        </div>
      </div>
    </>
  );
}

export default MenuCard