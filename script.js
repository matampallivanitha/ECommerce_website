const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});



document.addEventListener("DOMContentLoaded", () => {
  /********************
   *  NAV MENU TOGGLE *
   ********************/
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  /*************************
   *  KEEP SEARCH BAR OPEN *
   *************************/
  const navSearch = document.getElementById("nav-search");
  const searchInput = navSearch.querySelector("input");
  // Force the search bar to stay open:
  navSearch.classList.add("open");

  // If you want it always open, remove any blur event. 
  // If you had code that collapses on blur, remove it entirely.

  // Optionally, re-focus the input on click:
  navSearch.addEventListener("click", (e) => {
    e.stopPropagation();
    searchInput.focus();
  });

  /*************************
   *  PRODUCT FILTER LOGIC *
   *************************/
  const productGrid = document.querySelector(".product__grid");
  const allProducts = Array.from(productGrid.querySelectorAll(".product__card"));

  // Create "No products available" message
  const noProductsMsg = document.createElement("p");
  noProductsMsg.className = "no-products-message";
  noProductsMsg.textContent = "No products available";
  noProductsMsg.style.display = "none";
  noProductsMsg.style.pointerEvents = "none"; // Prevents it from blocking clicks

  // Place the message INSIDE the product grid area, so it doesn't overlap the search
  productGrid.insertAdjacentElement("afterend", noProductsMsg);

  // Filter function
  function filterProducts() {
    const query = searchInput.value.trim().toLowerCase();
    let hasMatch = false;

    // If empty, show all
    if (query === "") {
      allProducts.forEach(product => (product.style.display = "block"));
      noProductsMsg.style.display = "none";
      return;
    }

    // Otherwise, filter
    allProducts.forEach(product => {
      const productName = product.querySelector("h4").textContent.trim().toLowerCase();
      if (productName.includes(query)) {
        product.style.display = "block";
        hasMatch = true;
      } else {
        product.style.display = "none";
      }
    });

    // Toggle message if no matches
    noProductsMsg.style.display = hasMatch ? "none" : "block";
  }

  // Listen for live input
  searchInput.addEventListener("input", filterProducts);

  /*********************************
   * SCROLLREVEAL & SWIPER SETUP   *
   *********************************/
  // (Your existing ScrollReveal / Swiper code here)
  // Example:
  // ScrollReveal().reveal(".header__image img", {...});
  // ...
  // const swiper = new Swiper(".swiper", { loop: true });
});




const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});