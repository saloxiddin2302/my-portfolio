import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import resume from "../assets/resume.pdf";

//some problem with picture
const About = (props) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const cv = resume;
  const channelLink = "https://t.me/Saloxiddin2302";
  return (
    <>
      <section className="section" id="about" ref={ref}>
        <div className="container mx-auto">
          <div className=" flex items-center justify-center max-md:flex-col gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="box max-lg:hidden"
            >
              <div className="box__line box__line--top max-lg:hidden"></div>
              <div className="box__line box__line--right max-lg:hidden"></div>
              <div className="box__line box__line--bottom max-lg:hidden"></div>
              <div className="box__line box__line--left max-lg:hidden"></div>

              <div className="flex-1 lg:bg-about  lg:bg-contain bg-no-repeat lg:h-[520px] mix-blend-lighten lg:bg-top max-max-lg:hidden"></div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1"
            >
              <h2 className="h2" style={{ color: `${props.color}` }}>
                ABOUT ME.
              </h2>
              <h3 className="h3 mb-4">
                I'm a Frontend Developer with over 3 moon of experience.
              </h3>
              <p className="mb-6">
                <span>
                  Follow my daily posts at{" "}
                  <a href={channelLink}>
                    <b>t.me/coding_frontend_developer</b>
                  </a>{" "}
                  📆📚 Exciting times ahead!
                  🚀🎓
                </span>
              </p>
              <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Moon of <br />
                    Experience
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={18} duration={4} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Projects <br />
                    Completed
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={1} duration={4} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Satisfied <br />
                    Clients
                  </div>
                </div>
              </div>
              <div className="flex gap-x-8 items-center">
                <button
                  className="btn btn-lg z-50"
                  style={{
                    backgroundColor: `${props.color}`,
                    borderRadius: `${props.borderRadius}px`,
                  }}
                >
                  <a href={`https://blog.saloxiddin.u   z/`}>Blogs</a>
                </button>
                <a
                  href={cv}
                  alt="resume"
                  download={cv}
                  className="text-gradient btn-lnk z-50"
                  style={{ color: `${props.color}` }}
                >
                  Downlad CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
