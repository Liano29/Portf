// //code pour l'envoie sur emailjs
const SERVICE_ID = "service_4ebuk8c";
const TEMPLATE_ID = "template_8eglfjp";
const PUBLIC_KEY = "J4LF2fobdgOu5MvW5";
emailjs.init(PUBLIC_KEY);
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    message: document.getElementById("message").value,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
  alert("Merci pour votre message !");
  form.reset();
});
