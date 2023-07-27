const refs = {
  menuBtnRef: document.querySelector("[data-menu-button]"),
  mobileMenuRef: document.querySelector("[data-menu]"),
  menuLinks: document.querySelectorAll(".nav-link"),
  onlineRecordBtn: document.querySelector(".record-button"),
};

const onMenuClick = () => {
  const expanded =
    refs.menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  refs.menuBtnRef.classList.toggle("is-open");
  refs.menuBtnRef.setAttribute("aria-expanded", !expanded);

  refs.mobileMenuRef.classList.toggle("is-open");
};

const closeMenu = () => {
  refs.menuBtnRef.classList.remove("is-open");
  refs.menuBtnRef.setAttribute("aria-expanded", "false");
  refs.mobileMenuRef.classList.remove("is-open");
};

if (refs.menuBtnRef && refs.mobileMenuRef) {
  refs.menuBtnRef.addEventListener("click", onMenuClick);
}

refs.menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

if (refs.onlineRecordBtn) {
  refs.onlineRecordBtn.addEventListener("click", closeMenu);
}
