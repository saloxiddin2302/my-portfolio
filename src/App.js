import React, { useEffect } from "react";
//Components
import Home from "./Components/Home";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
//Configuration
import { IoSettings } from "react-icons/io5";
import { Drawer } from "antd";
import { TfiClose } from "react-icons/tfi";
//Images
import Image1 from "./assets/bg2.jpg";
import Image2 from "./assets/bg1.jpg";
import Image3 from "./assets/bg3.jpg";
import Image4 from "./assets/bg4.jpg";
import Image5 from "./assets/bg5.jpg";
import Footer from "./Components/Footer";

const App = () => {
  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  //input
  const [borderrad, setBorderrad] = React.useState(100);

  //color palette
  const [color, setColor] = React.useState("rgba(255, 255, 255, 0.5)");
  const colors = {
    color1: "rgba(255, 255, 255, 0.5)",
    color2: "#66BFBF",
    color3: "#6D9886",
    color4: "#525FE1",
    color5: "#F99417",
  };
  //background
  const [background, setBackground] = React.useState(Image1);
  const setBg1 = () => {
    setBackground(Image1);
  };
  const setBg2 = () => {
    setBackground(Image2);
  };
  const setBg3 = () => {
    setBackground(Image3);
  };
  const setBg4 = () => {
    setBackground(Image4);
  };
  const setBg5 = () => {
    setBackground(Image5);
  };

  // loader

  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-full fixed bg-[#252525]">
          <div id="loader">
            <div id="box"></div>
            <div id="hill"></div>
          </div>
        </div>
      ) : (
        <div
          className={`bg-no-repeat bg-cover overflow-hidden `}
          style={{ backgroundImage: `url(${background})` }}
        >
          <Header color={color} borderRadius={borderrad} />
          <Home borderRadius={borderrad} color={color} />
          <Nav borderRadius={borderrad} color={color} />
          <About borderRadius={borderrad} color={color} />
          <Services borderRadius={borderrad} color={color} />
          <Work borderRadius={borderrad} color={color} />
          <Contact borderRadius={borderrad} color={color} />
          <Footer />
          {/* Configuration // settings */}
          <div className="z-50 fixed top-[5rem] right-0">
            <button
              className="shadow bg-white/10 backdrop-blur-[3px] p-5"
              style={{
                color: `${color}`,
                borderRadius: `${borderrad}px 0 0 ${borderrad}px`,
              }}
              onClick={showDrawer}
            >
              <IoSettings className="rotate-center" />
            </button>
            <Drawer
              placement="right"
              onClose={onClose}
              open={open}
              style={{ backgroundColor: `rgb(47, 46, 52)`, color: "#fff" }}
              closeIcon={<TfiClose className=" text-[#fff]" />}
              headerStyle={{
                backgroundColor: "rgb(47, 46, 52)",
                boxShadow: `0 1px 10px rgba(0, 0, 0, 0.5)`,
              }}
            >
              <div className="text-[1.5rem] absolute top-[0.4rem] left-[4rem]">
                Settings
              </div>
              <div className="flex items-start justify-center flex-col">
                <span className=" text-lg">Color palette:</span>
                <ul className="grid my-5 grid-cols-3">
                  <li
                    className={`w-8 h-8 rounded-full flex items-center justify-center mx-5 p-1 my-3`}
                    onClick={() => {
                      setColor(colors.color1);
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: `${colors.color1}` }}
                    ></div>
                  </li>
                  <li
                    className=" w-8 h-8 rounded-full flex items-center justify-center mx-5 p-1 my-3"
                    onClick={() => setColor(colors.color2)}
                  >
                    <div
                      className={`w-6 h-6 rounded-full`}
                      style={{ backgroundColor: `${colors.color2}` }}
                    ></div>
                  </li>
                  <li
                    className=" w-8 h-8 rounded-full flex items-center justify-center mx-5 p-1 my-3"
                    onClick={() => setColor(colors.color3)}
                  >
                    <div
                      className={`w-6 h-6 rounded-full`}
                      style={{ backgroundColor: `${colors.color3}` }}
                    ></div>
                  </li>
                  <li
                    className={`w-8 h-8 rounded-full flex items-center justify-center mx-5 p-1 my-3`}
                    onClick={() => setColor(colors.color4)}
                  >
                    <div
                      className={`w-6 h-6 rounded-full`}
                      style={{ backgroundColor: `${colors.color4}` }}
                    ></div>
                  </li>
                  <li
                    className=" w-8 h-8 rounded-full flex items-center justify-center mx-5 p-1 my-3"
                    onClick={() => setColor(colors.color5)}
                  >
                    <div
                      className={`w-6 h-6 rounded-full`}
                      style={{ backgroundColor: `${colors.color5}` }}
                    ></div>
                  </li>
                </ul>
              </div>
              <div className="flex items-start justify-center flex-col">
                <span className="text-lg my-5">Setting corners:</span>
                <div className="range">
                  <input
                    style={{ backgroundColor: `${colors.color1}` }}
                    type="range"
                    min={1}
                    step={1}
                    max={100}
                    onChange={(event) => setBorderrad(event.target.value)}
                    value={borderrad}
                  />
                  <span className="mx-5 flex items-center justify-center">
                    {borderrad}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div
                  className={`w-[70px] h-[70px] border shadow-lg mx-5`}
                  style={{
                    borderRadius: `${borderrad}px`,
                    backgroundColor: `${color}`,
                  }}
                ></div>
              </div>
              <div className="my-5"></div>
              <div className="flex items-start justify-center flex-col">
                <span className="text-lg">Set background:</span>
                <div className="grid grid-cols-3 md:grid-cols-3">
                  <div className="w-[70px] h-[70px] mx-3 my-3 rounded-lg">
                    <img
                      src={Image1}
                      alt=""
                      className=" object-cover w-[70px] h-[70px] rounded-2xl cursor-pointer "
                      onClick={setBg1}
                    />
                  </div>
                  <div className="w-[70px] h-[70px] mx-3 my-3 rounded-lg">
                    <img
                      src={Image2}
                      alt=""
                      className=" object-cover w-[70px] h-[70px] rounded-2xl cursor-pointer"
                      onClick={setBg2}
                    />
                  </div>
                  <div className="w-[70px] h-[70px] mx-3 my-3 rounded-lg">
                    <img
                      src={Image3}
                      alt=""
                      className=" object-cover w-[70px] h-[70px] rounded-2xl cursor-pointer "
                      onClick={setBg3}
                    />
                  </div>
                  <div className="w-[70px] h-[70px] mx-3 my-3 rounded-lg">
                    <img
                      src={Image4}
                      alt=""
                      className=" object-cover w-[70px] h-[70px] rounded-2xl cursor-pointer "
                      onClick={setBg4}
                    />
                  </div>
                  <div className="w-[70px] h-[70px] mx-3 my-3 rounded-lg">
                    <img
                      src={Image5}
                      alt=""
                      className=" object-cover w-[70px] h-[70px] rounded-2xl cursor-pointer "
                      onClick={setBg5}
                    />
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
