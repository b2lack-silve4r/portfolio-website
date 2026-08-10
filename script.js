const contactForm = 
document .getElementById("contact-form");

const nameInput = 
document .getElementById("name");

const emailInput =
document .getElementById("email");

contactForm .addEventListener ("submit" , function (event) {
  event .preventDefault ();

  const name = nameInput.value;

  const email = emailInput.value;

  if (!emailInput .checkValidity ())
  {
    alert ("Please enter a valid email address.");
    return;
  }

  alert (`Thank you, ${name}! Your message has been received.`);

  contactForm .reset ();
});