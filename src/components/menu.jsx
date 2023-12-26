import React,{useRef} from 'react'
import MenuCard from './MenuCard'
import imgproduct from "../assets/images/product-005-free-img.png";
import product2 from "../assets/images/product-001-free-img.png";
import products3 from "../assets/images/product-003-free-img.png";
import product4 from "../assets/images/product-002-free-img.png"
import Heading from './heading';
const Menu = ({ menuRef, ...props }) => {
  return (
    <>
      <div
        className="row lg:pt-[150px] pt-60 flex-lg-row flex-column-reverse justify-center"
        ref={menuRef}
      >
        <div className="col-lg-8 col-11 mx-auto justify-center lg:pt-[0] pt-16 ">
          <div className="row  justify-center mx-auto">
            <MenuCard
              price="$2.50 "
              imgproduct={imgproduct}
              heading="VANILLA ICE CREAM"
            />
            <MenuCard
              price="$2.50"
              imgproduct={product2}
              heading={"MANGO MILKSHAKE"}
            />
            <MenuCard
              price="$2.50"
              imgproduct={products3}
              heading={"CHOCOLATE ICE CREAM"}
            />
            <MenuCard
              price="$2.50"
              imgproduct={product4}
              heading={"CHOCOLATE MILKSHAKE"}
            />
          </div>
        </div>
        <div className="col-lg-4 col-11  mx-auto  text-lg-start text-center p-5">
          <Heading
            titelmenu="DAILY SPECIAL"
            details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
        </div>
      </div>
    </>
  );
};

export default Menu