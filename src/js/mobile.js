(() => {
 const refs = {
   // Додати атрибут data-modal-open на кнопку відкриття
   openMenuBtn: document.querySelector("[data-menu-open]"),
   // Додати атрибут data-modal-close на кнопку закриття
   closeMenuBtn: document.querySelector("[data-menu-close]"),
   // Додати атрибут data-modal на бекдроп моб меню
   menu: document.querySelector("[data-menu]"),
    // Додати атрибут data-overlayl на overlay моб меню
   overlay: document.querySelector("[data-overlay]"),
 };
 
 refs.openMenuBtn.addEventListener("click", toggleMenu);
 refs.closeMenuBtn.addEventListener("click", toggleMenu);

 function toggleMenu() {
  const isMenuOpen = refs.menu.classList.toggle("is-open");

  // if(isMenuOpen) {
  //   refs.overlay.classList.add("is-active");
  // } else {
  //   refs.overlay.classList.remove("is-active");
  // }
  refs.overlay.classList.toggle("is-active", isMenuOpen);
 
}
})();