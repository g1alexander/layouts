const $hero = document.getElementById("hero"),
  $parrafo = document.getElementById("parrafo"),
  $form = document.getElementById("form"),
  $message = $form.querySelectorAll("span");

let valEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

function media() {
  let myFunction = (x) => {
    if (!x.matches) {
      $hero.setAttribute("src", "images/hero-mobile.jpg");
      $parrafo.classList.remove("w-80");
      $form.email.classList.remove("w-75");
      $form.email.classList.add("w-80");
      $form.submit.classList.remove("start-60");
      $form.submit.classList.add("start-70");
      $message[0].classList.add("start-60");
      $message[0].classList.remove("start-50");
    } else {
      $hero.setAttribute("src", "images/hero-desktop.jpg");
      $parrafo.classList.add("w-80");
      $form.email.classList.add("w-75");
      $form.email.classList.remove("w-80");
      $form.submit.classList.add("start-60");
      $form.submit.classList.remove("start-70");
      $message[0].classList.add("start-50");
      $message[0].classList.remove("start-60");
    }
  };
  let x = window.matchMedia("(min-width: 768px)");
  myFunction(x); // Call listener function at run time
  x.addEventListener("change", myFunction);
}

document.addEventListener("DOMContentLoaded", media());

document.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!valEmail.exec($form.email.value)) {
      $form.email.classList.add("input-error");
      $message[1].classList.remove("d-none");
      $message[1].classList.add("d-block");
      $message[0].classList.remove("d-none");
    }
    if (valEmail.exec($form.email.value)) {
      $form.email.classList.remove("input-error");
      $message[0].classList.add("d-none");
      $message[1].classList.add("d-none");
      $message[1].classList.remove("d-block");
    }
  }
});
