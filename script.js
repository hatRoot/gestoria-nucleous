// Detecta el scroll y agrega o quita la clase "scrolled" al menú
window.addEventListener("scroll", function() {
  const menu = document.querySelector(".nav-bar");
  if (window.scrollY > 0) {
    menu.classList.add("scrolled"); // Añade la clase cuando se hace scroll
  } else {
    menu.classList.remove("scrolled"); // Elimina la clase cuando está en el top
  }
});
