const logo = document.getElementById("second-logo");

const observer = new IntersectionObserver(
  (e, o) => {
    e[0].isIntersecting
      ? logo.classList.add("visible")
      : logo.classList.remove("visible");
  },
  {
    threshold: 1,
    rootMargin: "0px",
  }
);

observer.observe(logo);

logo.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
