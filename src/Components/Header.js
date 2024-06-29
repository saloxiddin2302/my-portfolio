import React from 'react';
import { BiCoffeeTogo } from "react-icons/bi";

const Header = (props) => {
  let linkBuy = "https://buymeacoffee.com/udarbola20s";
  let blank = "_blank";
  return (
    <>
      <header className='py-8'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <span className='font-four text-3xl' title='t.me/abdurahmon_official for more'>Saloxiddin</span>
            <a href={linkBuy} className='btn btn-sm flex items-center justify-center font-secondary' target={blank} style={{backgroundColor: `${props.color}`, borderRadius: `${props.borderRadius}px`}}><BiCoffeeTogo className='mx-1' /> buy me a coffee </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
