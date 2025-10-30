const menu = [
    { name: "Treviso", price: 70, img: "https://images.unsplash.com/photo-1604908177522-432c517f8a58" },
    { name: "Arabica", price: 75, img: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
    { name: "Spanish Latte", price: 85, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87" },
    { name: "Cafe Latte", price: 80, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { name: "Caramel Macchiato", price: 90, img: "https://images.unsplash.com/photo-1536520002442-39764a41e067" },
  ];
  
  const menuContainer = document.getElementById("menuItems");
  const priceRange = document.getElementById("priceRange");
  const spinBtn = document.getElementById("spinBtn");
  
  // Show Menu
  function showMenu(maxPrice) {
    menuContainer.innerHTML = "";
    menu
      .filter((item) => item.price <= maxPrice)
      .forEach((item) => {
        menuContainer.innerHTML += `
          <div class="card">
            <img src="${item.img}" alt="${item.name}">
            <div class="card-content">
              <h4>${item.name}</h4>
              <p class="price">₱${item.price}</p>
              <button class="add-btn">+ Add to Cart</button>
            </div>
          </div>
        `;
      });
  }
  
  showMenu(priceRange.value);
  
  priceRange.addEventListener("input", (e) => {
    showMenu(e.target.value);
  });
  
  spinBtn.addEventListener("click", () => {
    const random = menu[Math.floor(Math.random() * menu.length)];
    alert(`🎯 You got: ${random.name} — ₱${random.price}`);
  });
  