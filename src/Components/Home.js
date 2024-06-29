import React from "react";
import Image from "../assets/profilepic.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Home = (props) => {
  const forHomeHref = {
    gitHub: "https://instagram.com/saloxiddin2302",
    instagram: "https://github.com/saloxiddin2302",
    linkedIn: "https://www.linkedin.com/in/salox-normominov-523b5626b/",
    cv: "https://blog.saloxiddin.uz",
  };
  let blank = "_blank";
  return (
    <>
      <section
        id="home"
        className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-1 text-center font-secondary lg:text-left">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-[35px] fontbolf mb-[20px] leading-[0.8] lg:text-[55px] pl-12 max-md:pl-0"
              >
                Normo'minov <span>Saloxiddin</span>
              </motion.h1>
              <div className="items-center justify-center flex lg:hidden">
                <motion.div
                  variants={fadeIn("up", 0.45)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="mb-6 text-[36px] btn lg:text-[30px] font-secondary font-semibold leading-for-home bg-white/10 p-3 w-[84%] flex items-center justify-center"
                  style={{ borderRadius: `${props.borderRadius}px` }}
                >
                  <pre></pre>
                  <span className="mr-4 text-white text-[30px] font-four">
                    I am a
                  </span>

                  <div style={{ color: `${props.color}` }} className="w-auto">
                    <TypeAnimation
                      sequence={[
                        "Developer",
                        2000,
                        "Fronend",
                        2000,
                        "React Js",
                        2000,
                      ]}
                      speed={50}
                      className="text-[25px] lowercase font-four"
                      wrapper="span"
                      repeat={Infinity}
                    />
                  </div>
                </motion.div>
              </div>
              <div className="items-center justify-center hidden lg:flex">
                <motion.div
                  variants={fadeIn("up", 0.45)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="mb-6 text-[36px] btn lg:text-[30px] font-secondary font-semibold leading-[-1] bg-white/10 p-3 w-[84%] flex items-center"
                  style={{ borderRadius: `${props.borderRadius}px` }}
                >
                  <pre>
                    <span
                      className="text-[25px] font-four"
                      style={{ color: `${props.color}` }}
                    >
                      {" "}
                      ${" "}
                    </span>
                  </pre>
                  <span className="mr-4 text-white text-[30px] font-four">
                    I am a
                  </span>
                  <div style={{ color: `${props.color}` }}>
                    <TypeAnimation
                      sequence={[
                        "Developer",
                        2000,
                        "Frontend",
                        2000,
                        "React Js",
                        2000,
                      ]}
                      speed={50}
                      className="text-[25px] lowercase font-four"
                      wrapper="span"
                      repeat={Infinity}
                    />
                  </div>
                </motion.div>
              </div>
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="mb-8 max-w-lg mx-auto lg:mx-0 pl-12 max-md:pl-0"
              >
                My website is still a work in progress, with some pages
                currently under construction. Excitingly, the{" "}
                <a href="http://blog.saloxiddin.uz/" className="font-bold">
                  blog page
                </a>{" "}
                is now up and running! 🚧✨ Stay tuned for more updates as I
                continue to build and enhance the site. 🌐💻
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 pl-12 max-md:pl-0"
              >
                <button
                  className="btn btn-lg"
                  style={{
                    backgroundColor: `${props.color}`,
                    borderRadius: `${props.borderRadius}px`,
                  }}
                >
                  <Link
                    to="contact"
                    activeClass="notactive"
                    smooth={true}
                    spy={true}
                    offset={30}
                  >
                    Contact me
                  </Link>
                </button>
                <a
                  href={forHomeHref.cv}
                  className="text-gradient btn-link"
                  target={blank}
                  style={{ color: `${props.color}` }}
                >
                  Blogs
                </a>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 pl-[55px] max-md:pl-0"
              >
                <a href={forHomeHref.gitHub} target={blank}>
                  <FaInstagram />
                </a>
                <a href={forHomeHref.instagram} target={blank}>
                  <FaGithub />
                </a>
                <a href={forHomeHref.linkedIn} target={blank}>
                  <FaLinkedinIn />
                </a>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className=" hidden lg:flex flex-1 max-w-[320px] h-[320px] lg:max-w-[482px]"
            >
              <img
                title="image will replace"
                src={Image}
                alt="avatar"
                className=" h-[320px] lg:max-w-[320px] w-[320px] rounded-full object-cover z-[100] btn mix-blend-normal"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
