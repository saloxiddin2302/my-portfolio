import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareDots } from "react-icons/bs";
import { Link } from "react-scroll";
const Nav = (props) => {
  return (
    <>
      <nav className="fixed lg:left-2 w-auto top-1/2 -translate-y-1/2 overflow-hidden max-md:fixed max-md:bottom-8 max-md:w-full max-md:overflow-hidden max-md:top-[auto] z-50 max-md:-translate-y-0">
        <div
          className=" w-[96px] max-md:shadow-md max-md:bg-white/10 max-md:backdrop-blur-[3px] h-[460px] px-5 py-5 flex flex-col justify-between items-center max-md:flex-row text-2x1 text-white max-md:w-full max-md:h-[96px]  max-md:max-w-[460px] max-md:mx-auto "
          style={{ borderRadius: `${props.borderRadius}px` }}
        >
          <Link
            to="home"
            offset={-150}
            activeClass="active btn"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" style={{borderRadius: `${props.borderRadius}px`}}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active btn"
            smooth={true}
            spy={true}
            offset={-6}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" style={{borderRadius: `${props.borderRadius}px`}}
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active btn"
            smooth={true}
            spy={true}
            offset={11}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" style={{borderRadius: `${props.borderRadius}px`}}
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={14}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" style={{borderRadius: `${props.borderRadius}px`}}
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={35}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" style={{borderRadius: `${props.borderRadius}px`}}
          >
            <BsChatSquareDots />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
