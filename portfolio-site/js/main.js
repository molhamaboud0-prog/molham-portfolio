const GALLERIES = {
  ecommerce: [
    { file: "home.png", label: "Home" },
    { file: "categories.png", label: "Categories" },
    { file: "cart.png", label: "Cart" },
    { file: "product.png", label: "Product" },
    { file: "profile.png", label: "Profile" },
    { file: "orders.png", label: "Orders" },
  ],
  flavorhub: [
    { file: "home.png", label: "Home" },
    { file: "menu.png", label: "Menu" },
    { file: "cart.png", label: "Cart" },
    { file: "checkout.png", label: "Checkout" },
    { file: "booking-slots.png", label: "Booking" },
    { file: "profile.png", label: "Profile" },
  ],
  carevisit: [
    { file: "welcome.png", label: "Welcome" },
    { file: "home.png", label: "Home" },
    { file: "search.png", label: "Search" },
    { file: "slots.png", label: "Book time" },
    { file: "success.png", label: "Success" },
    { file: "appointments.png", label: "Appointments" },
  ],
};

function buildGallery(container, id) {
  const items = GALLERIES[id];
  if (!items) return;

  items.forEach(({ file, label }) => {
    const base =
      window.location.pathname.endsWith("/") ||
      window.location.pathname.endsWith(".html")
        ? window.location.href.replace(/[^/]+$/, "")
        : `${window.location.href}/`;
    const src = `${new URL(`assets/screenshots/${id}/${file}`, base).href}?v=2`;
    const fig = document.createElement("figure");
    fig.className = "gallery__item";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${label} screen — ${id}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 393;
    img.height = 852;

    img.onerror = () => {
      fig.innerHTML = `<div class="gallery-placeholder">${label}<br /><small>Run npm run capture</small></div>`;
    };

    const cap = document.createElement("figcaption");
    cap.textContent = label;

    fig.appendChild(img);
    fig.appendChild(cap);
    container.appendChild(fig);
  });
}

document.getElementById("year").textContent = String(new Date().getFullYear());

document.querySelectorAll("[data-gallery]").forEach((el) => {
  buildGallery(el, el.getAttribute("data-gallery"));
});