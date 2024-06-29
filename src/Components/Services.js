import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {Link} from "react-scroll";

const services = [
  {
    name: "Frontend Development",
    description:
      "In the frontend, I code with JavaScript and ReactJS for dynamic interfaces. Styling is done using Tailwind CSS. 💻🎨",
    link: "Learn more",
  },
  {
    name: "Software Engineering",
    description:
      "I'm a software engineering student at Najot Ta'lim, striving towards my junior degree. 📚💻",
    link: "Learn more",
  },
  // {
  //   name: "Videographing",
  //   description:
  //     "With 5 years of videography experience, I've had the pleasure of satisfying around 300 clients. 🎥🌟",
  //   link: "Learn more",
  // },
];
const linkForA = "#";
const Services = (props) => {
  return (
    <>
      <section className="section" id="services">
        <div className="container mx-auto">
          <div className="flex  flex-col lg:flex-row">
            {/* text */}

            {/* services */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1"
            >
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    key={index}
                    style={{ borderBottom: `1px solid ${props.color}` }}
                    className="h-[146px] mb-[38px] flex"
                  >
                    <div className="max-w-[476px] ">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className=" font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-start justify-center">
                      <a
                        href={linkForA}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center z-50"
                        style={{
                          backgroundColor: `${props.color}`,
                          borderRadius: `${props.borderRadius}px`,
                        }}
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={linkForA}
                        style={{ color: `${props.color}` }}
                        className="text-sm z-50"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1 lg:bg-services btn lg:bg-bottom bg-no-repeat mix-blend-normal rounded-xl p-10 mr-5 mb-12 lg:mb-0 bg-cover"
            >
              
              <h2 className="h2 mb-6" style={{ color: `${props.color}` }}>
                What I Do.{" "}
              </h2>
              <h3 className="h3 max-w-[455px] mb-6">
                I'm a Frontend Developer with over 1 year of experience.
              </h3>
              <button
                className="btn btn-sm z-50"
                style={{
                  backgroundColor: `${props.color}`,
                  borderRadius: `${props.borderRadius}px`,
                }}
              >
                <Link
                    to="work"
                    activeClass="notactive"
                    smooth={true}
                    spy={true}
                >See my work </Link>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
