const SCROLL = "scroll-down";
const headerElement = document.getElementById("main-header");

globalThis.addEventListener("scroll", handleScroll);

// + functions
function handleScroll() {
  if (scrollY > 0 && !headerElement.classList.contains(SCROLL)) {
    headerElement.classList.add(SCROLL);
  } else if (scrollY === 0 && headerElement.classList.contains(SCROLL)) {
    headerElement.classList.remove(SCROLL);
  }
}
