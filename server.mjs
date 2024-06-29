const sendEmail = async (e) => {
  e.preventDefault();
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
    const telegramBotToken = "6376892053:AAHBqJ5I-RZKy4Qd57vXfIM5jS0tJv8CsMM";
    const chatId = "@just_trying_messages";

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Yangi xabar:\nIsm: ${data.user_name}\nEmail: ${data.user_email}\nXabar: ${data.message}\nhttps://bekzotovich.uz`,
        }),
      }
    );

    const telegramResult = await telegramResponse.json();
    console.log(telegramResult);
    const emailjsResult = await emailjs.sendForm(
      "service_hz6hmb8",
      "template_8dh2h5m",
      form.current,
      "5e8grWVLAfL_2GfSZ"
    );

    console.log(emailjsResult);
    setValue("Sended");
    setTimeout(() => {
      setValue("Send Message");
    }, 3000);
  } catch (error) {
    console.error("Error sending form data:", error);
  }
};
