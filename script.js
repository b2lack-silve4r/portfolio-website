const contactForm = document .getElementById("contact-form");

contactForm .addEventListener("submit", function (event) {
  event .preventDefault();

  const name = document .getElementById ("name") . value;
  const email = document .getElementById ("email") . value;
  const message = document .getElementById ("message") . value;

  const whatsappMessage =
      `Hello Christian,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message: \n${message}`;

  const whatsappURL =
      `https://wa.me/2347048492926?text=${encodeURIComponent(whatsappMessage)}`;
  
  window.open(whatsappURL, "_blank");

  contactForm.reset();
})