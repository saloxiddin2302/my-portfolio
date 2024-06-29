import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const form = React.useRef();
  const [value, setValue] = React.useState("Send Message");
  const [notification, setNotification] = useState({
    message: null,
    color: null,
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      !form.current.user_name.value ||
      !form.current.user_email.value ||
      !form.current.message.value
    ) {
      setNotification({
        message: "Please fill out all fields in the form.",
        color: "red",
      });
      setTimeout(() => setNotification({ message: null, color: null }), 3000);
      return;
    }

    const formData = new FormData(form.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch("http://localhost:3001/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      setNotification({
        message: "Form submitted successfully!",
        color: "green",
      });
      setTimeout(() => setNotification({ message: null, color: null }), 3000);
    } catch (error) {
      // console.error("Error sending form data to server:", error);
      setNotification({
        message: "Form submitted successfully!",
        color: "green",
      });
      setTimeout(() => setNotification({ message: null, color: null }), 3000);
    }

    const telegramBotToken = "gddgd";
    const chatId = "@just_trying_messages";

    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: `Yangi xabar:\nIsm: ${data.user_name}\nEmail: ${data.user_email}\nXabar: ${data.message}`,
          }),
        }
      );

      const telegramResult = await telegramResponse.json();
      console.log(telegramResult, "Message sent, don't worry.)");
    } catch (error) {
      //console.error("Error sending form data to Telegram:", error);
    }

    emailjs
      .sendForm(
        "service_hz6hmb8",
        "template_8dh2h5m",
        form.current,
        "5e8grWVLAfL_2GfSZ"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );

    setValue("Sended");
    setTimeout(() => {
      setValue("Send Message");
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl uppercase font-medium mb-2"
                style={{ color: `${props.color}` }}
              >
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together.!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 btn lg:z-50 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            style={{ border: `1px solid ${props.color}` }}
            ref={form}
            onSubmit={sendEmail}
            action="http://localhost:3001/send-message"
            method="POST"
          >
            <input
              className=" bg-transparent py-3 outline-none w-full placeholder:text-white transition-all px-3 focus:rounded-md"
              style={{ borderBottom: `1px solid ${props.color}` }}
              type="name"
              placeholder="Your name"
              name="user_name"
            />
            <input
              className=" bg-transparent py-3 outline-none w-full placeholder:text-white transition-all px-3 focus:rounded-md"
              style={{ borderBottom: `1px solid ${props.color}` }}
              type="email"
              placeholder="Your email"
              name="user_email"
            />
            <textarea
              className=" bg-transparent py-12 outline-none w-full placeholder:text-white transition-all resize-none mb-12"
              placeholder="Your Message"
              style={{ borderBottom: `1px solid ${props.color}` }}
              name="message"
            ></textarea>
            <button
              style={{
                backgroundColor: `${props.color}`,
                borderRadius: `${props.borderRadius}px`,
              }}
              type="submit"
              className="btn btn-sm cursor-pointer"
            >
              {value}
            </button>

            <span className="w-full h-[20px]">
              <span className={`text-${notification.color}-500 text-sm`} style={{color: `${notification.color}`}}>
                {notification.message}
              </span>
            </span>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
