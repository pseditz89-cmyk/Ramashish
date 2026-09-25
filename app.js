/* ==========================================================================
   RAMASHISH NASTA HOUSE - Interactive Application Logic
   ========================================================================== */

// 1. Full Menu Catalog Data
const MENU_ITEMS = [
  {
    id: "kachori",
    name: "Khasta Kachori",
    hindiName: "खस्ता कचौरी",
    category: "snacks",
    categoryLabel: "Hot Snacks",
    isBestSeller: true,
    pricePerUnit: 10,
    unitType: "piece",
    unitLabel: "₹10 / piece",
    image: "IMAGES/khasta-kachori-H1.webp",
    badge: "⭐ Best Seller",
    desc: "Signature crispy golden crust filled with rich spicy moong dal and hing masala. Served with tangy imli chutney and spicy green chutney.",
    ingredients: "Refined flour, Moong dal, Hing (Asafoetida), Coriander seeds, Garam masala, Pure groundnut oil",
    spiciness: "Medium Spicy 🌶️🌶️",
    shelfLife: "Best consumed fresh & warm within 8 hours",
    portions: [
      { label: "1 Pc", qty: 1, price: 10 },
      { label: "2 Pcs", qty: 2, price: 20 },
      { label: "5 Pcs", qty: 5, price: 50 },
      { label: "10 Pcs", qty: 10, price: 100 }
    ]
  },
  {
    id: "samosa",
    name: "Special Samosa",
    hindiName: "स्वादिष्ट समोसा",
    category: "snacks",
    categoryLabel: "Hot Snacks",
    isBestSeller: false,
    pricePerUnit: 10,
    unitType: "piece",
    unitLabel: "₹10 / piece",
    image: "IMAGES/Samosa-and-Chatni.jpg",
    badge: "Hot & Fresh",
    desc: "Classic triangular crispy pastry packed with hearty spiced potato mash, sweet green peas, and whole roasted spices.",
    ingredients: "Potatoes, Green peas, Ginger, Cumin, Carom seeds (Ajwain), Chaat masala",
    spiciness: "Mild Spicy 🌶️",
    shelfLife: "Best consumed hot within 6 hours",
    portions: [
      { label: "1 Pc", qty: 1, price: 10 },
      { label: "2 Pcs", qty: 2, price: 20 },
      { label: "5 Pcs", qty: 5, price: 50 },
      { label: "10 Pcs", qty: 10, price: 100 }
    ]
  },
  {
    id: "poha",
    name: "Indori Poha",
    hindiName: "मालवी स्पेशल पोहा",
    category: "nashta",
    categoryLabel: "Morning Nashta",
    isBestSeller: false,
    pricePerUnit: 10,
    unitType: "plate",
    unitLabel: "₹10 / plate",
    image: "IMAGES/Poha-4-copy-3-e1722868478363.webp",
    badge: "Morning Favorite",
    desc: "Soft steamed flattened rice tempered with mustard, fennel seeds, green chillies, topped with fresh Ratlami Sev and a juicy lemon wedge.",
    ingredients: "Poha (Flattened rice), Mustard seeds, Saunf, Fried peanuts, Green chillies, Fresh coriander, Sev",
    spiciness: "Mild & Tangy 🍋",
    shelfLife: "Serve hot fresh",
    portions: [
      { label: "1 Plate", qty: 1, price: 10 },
      { label: "2 Plates", qty: 2, price: 20 },
      { label: "4 Plates", qty: 4, price: 40 }
    ]
  },
  {
    id: "bhajiya",
    name: "Crispy Kanda Bhajiya",
    hindiName: "गरमा-गरम कांदा भजिया",
    category: "snacks",
    categoryLabel: "Hot Snacks",
    isBestSeller: false,
    pricePerUnit: 20,
    unitType: "100gm",
    unitLabel: "₹20 / 100gm",
    image: "IMAGES/bhajiya.jpg",
    badge: "Crispy Pakoda",
    desc: "Golden-brown crunchy onion and potato fritters seasoned with carom seeds and green chillies. Ideal companion with hot Masala Chai.",
    ingredients: "Thin sliced onions, Gram flour (Besan), Ajwain, Green chillies, Curry leaves",
    spiciness: "Medium Spicy 🌶️🌶️",
    shelfLife: "Eat hot & crisp",
    portions: [
      { label: "100 gm", qty: 1, weight: "100g", price: 20 },
      { label: "250 gm", qty: 1, weight: "250g", price: 50 },
      { label: "500 gm", qty: 1, weight: "500g", price: 100 },
      { label: "1 kg", qty: 1, weight: "1kg", price: 200 }
    ]
  },
  {
    id: "aloo_vada",
    name: "Bombay Aloo Vada",
    hindiName: "आलू वड़ा (बटाटा वड़ा)",
    category: "snacks",
    categoryLabel: "Hot Snacks",
    isBestSeller: false,
    pricePerUnit: 10,
    unitType: "piece",
    unitLabel: "₹10 / piece",
    image: "IMAGES/aloo_vada.jpg",
    badge: "Hot Snack",
    desc: "Spiced mashed potato roundels with mustard, curry leaves and garlic, dipped in smooth gram flour batter and fried golden.",
    ingredients: "Mashed potatoes, Garlic, Mustard seeds, Turmeric, Besan batter",
    spiciness: "Medium Spicy 🌶️🌶️",
    shelfLife: "Best eaten warm within 6 hours",
    portions: [
      { label: "1 Pc", qty: 1, price: 10 },
      { label: "2 Pcs", qty: 2, price: 20 },
      { label: "5 Pcs", qty: 5, price: 50 },
      { label: "10 Pcs", qty: 10, price: 100 }
    ]
  },
  {
    id: "jalebi",
    name: "Desi Ghee Jalebi",
    hindiName: "रसभरी जलेबी",
    category: "sweets",
    categoryLabel: "Royal Sweets",
    isBestSeller: false,
    pricePerUnit: 120,
    unitType: "kg",
    unitLabel: "₹120 / kg",
    image: "IMAGES/jalebi.jpg",
    badge: "Pure Sweet",
    desc: "Crispy swirls deep-fried to golden perfection and soaked in aromatic saffron and cardamom sugar syrup. Juicy with every bite.",
    ingredients: "Fine flour, Pure saffron, Cardamom, Sugar syrup, Rose water",
    spiciness: "Sweet & Juicy 🍯",
    shelfLife: "24 hours at room temperature",
    portions: [
      { label: "250 gm", qty: 1, weight: "250g", price: 30 },
      { label: "500 gm", qty: 1, weight: "500g", price: 60 },
      { label: "1 kg", qty: 1, weight: "1kg", price: 120 },
      { label: "2 kg", qty: 1, weight: "2kg", price: 240 }
    ]
  },
  {
    id: "boondi",
    name: "Mithi Boondi",
    hindiName: "मीठी बूंदी (प्रसाद बूंदी)",
    category: "sweets",
    categoryLabel: "Royal Sweets",
    isBestSeller: false,
    pricePerUnit: 120,
    unitType: "kg",
    unitLabel: "₹120 / kg",
    image: "IMAGES/boondi.jpg",
    badge: "Festive Sweet",
    desc: "Glowing, syrup-soaked golden gram flour pearls garnished with melon seeds and aromatic green cardamom.",
    ingredients: "Gram flour (Besan), Sugar, Saffron flavor, Melon seeds, Cardamom",
    spiciness: "Delightfully Sweet ✨",
    shelfLife: "3 to 4 days",
    portions: [
      { label: "250 gm", qty: 1, weight: "250g", price: 30 },
      { label: "500 gm", qty: 1, weight: "500g", price: 60 },
      { label: "1 kg", qty: 1, weight: "1kg", price: 120 },
      { label: "2 kg", qty: 1, weight: "2kg", price: 240 }
    ]
  },
  {
    id: "sev",
    name: "Ratlami Teekhi Sev",
    hindiName: "रतलामी तीखी सेव",
    category: "farsan",
    categoryLabel: "Namkeen & Farsan",
    isBestSeller: false,
    pricePerUnit: 200,
    unitType: "kg",
    unitLabel: "₹200 / kg",
    image: "IMAGES/Ratlami_Sev_Online_4dc151dc-420f-4960-af90-e49c6cf287b0_800x.webp",
    badge: "Crispy Namkeen",
    desc: "Renowned crunchy sev made with crushed black pepper, cloves, and premium spices. Unbeatable crunch and lingering spice.",
    ingredients: "Besan, Black pepper, Clove powder, Hing, Ajwain, Salt",
    spiciness: "Spicy & Crunchy 🌶️🌶️🌶️",
    shelfLife: "30 days in airtight packaging",
    portions: [
      { label: "250 gm", qty: 1, weight: "250g", price: 50 },
      { label: "500 gm", qty: 1, weight: "500g", price: 100 },
      { label: "1 kg", qty: 1, weight: "1kg", price: 200 },
      { label: "2 kg", qty: 1, weight: "2kg", price: 400 }
    ]
  },
  {
    id: "mixture",
    name: "Special Farsan Mixture",
    hindiName: "स्पेशल फरसाण मिक्सचर",
    category: "farsan",
    categoryLabel: "Namkeen & Farsan",
    isBestSeller: false,
    pricePerUnit: 200,
    unitType: "kg",
    unitLabel: "₹200 / kg",
    image: "IMAGES/mixture.jpg",
    badge: "Tea-Time Hit",
    desc: "A delectable savory crunchy mix of sev, fried roasted peanuts, flattened rice flakes, chana dal, and curry leaves in royal masala.",
    ingredients: "Sev, Roasted peanuts, Fried lentils, Poha, Curry leaves, Chatpata spice blend",
    spiciness: "Chatpata Medium 🌶️🌶️",
    shelfLife: "30 days in airtight packaging",
    portions: [
      { label: "250 gm", qty: 1, weight: "250g", price: 50 },
      { label: "500 gm", qty: 1, weight: "500g", price: 100 },
      { label: "1 kg", qty: 1, weight: "1kg", price: 200 },
      { label: "2 kg", qty: 1, weight: "2kg", price: 400 }
    ]
  },
  {
    id: "peda",
    name: "Mathura Kesar Peda",
    hindiName: "मथुरा केसर पेड़ा",
    category: "sweets",
    categoryLabel: "Royal Sweets",
    isBestSeller: false,
    pricePerUnit: 350,
    unitType: "kg",
    unitLabel: "₹350 / kg",
    image: "IMAGES/peda.jpg",
    badge: "Mawa Special",
    desc: "Slow-cooked dense condensed milk peda infused with pure saffron and pistachios, stamped with traditional floral seal.",
    ingredients: "Slow roasted Khoya/Mawa, Kesar, Cardamom, Desi sugar, Pistachios",
    spiciness: "Rich Milk Sweet 🥛",
    shelfLife: "7 to 10 days",
    portions: [
      { label: "250 gm", qty: 1, weight: "250g", price: 88 },
      { label: "500 gm", qty: 1, weight: "500g", price: 175 },
      { label: "1 kg", qty: 1, weight: "1kg", price: 350 },
      { label: "2 kg", qty: 1, weight: "2kg", price: 700 }
    ]
  },
  {
    id: "barfi",
    name: "Pure Mawa Barfi",
    hindiName: "शाही मावा बर्फी",
    category: "sweets",
    categoryLabel: "Royal Sweets",
    isBestSeller: false,
    pricePerUnit: 400,
    unitType: "kg",
    unitLabel: "₹400 / kg",
    image: "IMAGES/istockphoto-1428238507-612x612.jpg",
    badge: "Royal Delicacy",
    desc: "Melt-in-your-mouth creamy fudge barfi made from rich reduced dairy mawa, delicately sweetened and topped with pistachio slivers.",
    ingredients: "Fresh full-cream mawa, Cane sugar, Cardamom, Slivered almonds & pistachios",
    spiciness: "Velvety Sweet 🍬",
    shelfLife: "5 to 7 days",
    portions: [
      { label: "250 gm", qty: 1, weight: "250g", price: 100 },
      { label: "500 gm", qty: 1, weight: "500g", price: 200 },
      { label: "1 kg", qty: 1, weight: "1kg", price: 400 },
      { label: "2 kg", qty: 1, weight: "2kg", price: 800 }
    ]
  },
  {
    id: "ajmeri",
    name: "Ajmeri Kalakand (Milk Cake)",
    hindiName: "अजमेरी कलाकंद (मिल्क केक)",
    category: "sweets",
    categoryLabel: "Royal Sweets",
    isBestSeller: false,
    pricePerUnit: 400,
    unitType: "kg",
    unitLabel: "₹400 / kg",
    image: "IMAGES/ajmeri.jpg",
    badge: "Caramelized Hit",
    desc: "Traditional granular milk cake with caramelized brown center and delicate outer crust. Slow-cooked over gentle heat for hours.",
    ingredients: "Fresh milk, Desi ghee, Sugar, Cardamom essence",
    spiciness: "Caramelized Milk Sweet 🍮",
    shelfLife: "7 to 10 days",
    portions: [
      { label: "250 gm", qty: 1, weight: "250g", price: 100 },
      { label: "500 gm", qty: 1, weight: "500g", price: 200 },
      { label: "1 kg", qty: 1, weight: "1kg", price: 400 },
      { label: "2 kg", qty: 1, weight: "2kg", price: 800 }
    ]
  }
];

// 2. Application State
const state = {
  cart: [],
  selectedPortions: {},
  activeCategory: "all",
  searchQuery: "",
  sortBy: "default",
  appliedCoupon: null,
  orderType: "pickup",
  isPlayingAudio: false
};

// Initialize portions default
MENU_ITEMS.forEach(item => {
  state.selectedPortions[item.id] = 0; // Default to first portion
});

// Load cart from localStorage if present
try {
  const savedCart = localStorage.getItem("ramashish_cart");
  if (savedCart) state.cart = JSON.parse(savedCart);
} catch (e) {
  console.warn("Storage access:", e);
}

// 3. Audio Player Logic
const audioElement = new Audio("my music/08 SHREE_HANUMAN_CHALISA - Copy.mp3");
audioElement.loop = true;
audioElement.volume = 0.45;

function toggleAudio() {
  const pill = document.getElementById("audioTogglePill");
  const audioText = document.getElementById("audioStateText");
  if (state.isPlayingAudio) {
    audioElement.pause();
    state.isPlayingAudio = false;
    pill.classList.remove("playing");
    audioText.innerText = "Devotional Ambient: Paused";
  } else {
    audioElement.play().then(() => {
      state.isPlayingAudio = true;
      pill.classList.add("playing");
      audioText.innerText = "Playing: Shree Hanuman Chalisa";
    }).catch(err => {
      console.log("Audio play prevented or file format issue:", err);
      // Fallback
      audioText.innerText = "Tap to Play Music";
    });
  }
}

// 4. Theme Toggle Logic
function initTheme() {
  const savedTheme = localStorage.getItem("ramashish_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("ramashish_theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.innerHTML = theme === "dark" 
      ? `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

// 5. Render Menu Cards
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  let filtered = MENU_ITEMS.filter(item => {
    // Category match
    if (state.activeCategory === "bestseller") {
      if (!item.isBestSeller) return false;
    } else if (state.activeCategory !== "all") {
      if (item.category !== state.activeCategory) return false;
    }
    // Search query match
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchHindi = item.hindiName.toLowerCase().includes(q);
      const matchDesc = item.desc.toLowerCase().includes(q);
      return matchName || matchHindi || matchDesc;
    }
    return true;
  });

  // Sorting
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.pricePerUnit - b.pricePerUnit);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.pricePerUnit - a.pricePerUnit);
  } else if (state.sortBy === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortBy === "popular") {
    filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</p>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.4rem;">No items found</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Try searching for "Kachori", "Samosa", "Jalebi", or "Sev"</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const selectedPortionIdx = state.selectedPortions[item.id] || 0;
    const currentPortion = item.portions[selectedPortionIdx] || item.portions[0];
    
    // Check if this specific item + portion is currently in cart
    const cartEntry = state.cart.find(c => c.id === item.id && c.portionLabel === currentPortion.label);
    const inCartQty = cartEntry ? cartEntry.qty : 0;

    return `
      <div class="food-card ${item.isBestSeller ? 'best-seller' : ''}" data-id="${item.id}">
        <!-- Veg & Best Seller Badges -->
        ${item.isBestSeller 
          ? `<span class="food-card-badge bestseller-badge">⭐ Best Seller</span>` 
          : `<span class="food-card-badge category-badge">${item.categoryLabel}</span>`
        }
        <div class="food-card-badge pureveg-badge" title="100% Pure Vegetarian"></div>

        <!-- Food Image -->
        <div class="food-img-container" onclick="openItemModal('${item.id}')">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>

        <!-- Content -->
        <div class="food-content">
          <div class="food-title-row">
            <div>
              <h3 class="food-title">${item.name}</h3>
              <span class="food-title-hindi">${item.hindiName}</span>
            </div>
          </div>

          <p class="food-desc">${item.desc}</p>

          <!-- Portion Options -->
          <div class="portion-selector-box">
            <div class="portion-label">
              <span>Select Portion / Weight</span>
              <span style="color: var(--primary); font-weight: 700;">₹${currentPortion.price}</span>
            </div>
            <div class="portion-options">
              ${item.portions.map((p, idx) => `
                <button 
                  type="button" 
                  class="portion-btn ${idx === selectedPortionIdx ? 'active' : ''}" 
                  onclick="selectPortion('${item.id}', ${idx})"
                >
                  ${p.label}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Footer Price & Add Button -->
          <div class="food-footer">
            <div class="food-price-block">
              <span class="price-current">₹${currentPortion.price}</span>
              <span class="price-unit-tag">${currentPortion.label}</span>
            </div>

            <div class="food-action-block">
              ${inCartQty > 0 ? `
                <div class="qty-stepper">
                  <button class="qty-btn" onclick="updateCartQty('${item.id}', '${currentPortion.label}', -1)">-</button>
                  <span class="qty-value">${inCartQty}</span>
                  <button class="qty-btn" onclick="updateCartQty('${item.id}', '${currentPortion.label}', 1)">+</button>
                </div>
              ` : `
                <button class="btn-add-cart" onclick="addToCart('${item.id}')">
                  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  <span>ADD</span>
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 6. Portion Selection Handler
function selectPortion(itemId, portionIdx) {
  state.selectedPortions[itemId] = portionIdx;
  renderMenu();
}

// 7. Cart Operations
function addToCart(itemId, customPortionIdx = null) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;

  const portionIdx = customPortionIdx !== null ? customPortionIdx : (state.selectedPortions[itemId] || 0);
  const portion = item.portions[portionIdx];

  const existing = state.cart.find(c => c.id === itemId && c.portionLabel === portion.label);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      hindiName: item.hindiName,
      portionLabel: portion.label,
      unitPrice: portion.price,
      image: item.image,
      qty: 1
    });
  }

  saveCart();
  renderMenu();
  renderCartDrawer();
  updateCartCounters();
  showToast(`Added ${item.name} (${portion.label}) to cart!`);
}

function updateCartQty(itemId, portionLabel, delta) {
  const idx = state.cart.findIndex(c => c.id === itemId && c.portionLabel === portionLabel);
  if (idx === -1) return;

  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }

  saveCart();
  renderMenu();
  renderCartDrawer();
  updateCartCounters();
}

function removeFromCart(itemId, portionLabel) {
  state.cart = state.cart.filter(c => !(c.id === itemId && c.portionLabel === portionLabel));
  saveCart();
  renderMenu();
  renderCartDrawer();
  updateCartCounters();
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderMenu();
  renderCartDrawer();
  updateCartCounters();
}

function saveCart() {
  try {
    localStorage.setItem("ramashish_cart", JSON.stringify(state.cart));
  } catch (e) {
    console.warn(e);
  }
}

function updateCartCounters() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const headerCount = document.getElementById("headerCartCount");
  const mobileCount = document.getElementById("mobileCartCount");
  const mobileTotal = document.getElementById("mobileCartTotal");

  if (headerCount) headerCount.innerText = totalCount;
  if (mobileCount) mobileCount.innerText = totalCount;

  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  if (mobileTotal) mobileTotal.innerText = `₹${subtotal}`;
}

// 8. Cart Drawer Rendering & Calculations
function renderCartDrawer() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const discountRowEl = document.getElementById("cartDiscountRow");
  const discountAmountEl = document.getElementById("cartDiscountAmount");
  const totalEl = document.getElementById("cartTotalAmount");
  const checkoutBtn = document.getElementById("btnCheckoutWhatsapp");

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.3rem;">Your cart is empty</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Explore our fresh Kachori, Samosa, Jalebi & Farsan!</p>
        <button class="btn-primary" onclick="closeCartDrawer(); scrollToMenu();">Browse Menu</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = "₹0";
    if (discountRowEl) discountRowEl.style.display = "none";
    if (totalEl) totalEl.innerText = "₹0";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <div class="cart-item-portion">${item.portionLabel} • ₹${item.unitPrice}</div>
        <div class="cart-item-price">₹${item.unitPrice * item.qty}</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-stepper">
          <button class="qty-btn" onclick="updateCartQty('${item.id}', '${item.portionLabel}', -1)">-</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}', '${item.portionLabel}', 1)">+</button>
        </div>
        <button class="btn-remove-item" onclick="removeFromCart('${item.id}', '${item.portionLabel}')">Remove</button>
      </div>
    </div>
  `).join('');

  // Bill calculations
  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  let discount = 0;

  if (state.appliedCoupon === "RAMASHISH10" && subtotal >= 100) {
    discount = Math.round(subtotal * 0.10);
  } else if (state.appliedCoupon === "KACHORI5" && subtotal >= 150) {
    discount = 20;
  }

  const finalTotal = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.innerText = `₹${subtotal}`;
  if (discountRowEl) {
    if (discount > 0) {
      discountRowEl.style.display = "flex";
      discountAmountEl.innerText = `-₹${discount}`;
    } else {
      discountRowEl.style.display = "none";
    }
  }
  if (totalEl) totalEl.innerText = `₹${finalTotal}`;
}

// 9. Coupon Handling
function applyCoupon() {
  const codeInput = document.getElementById("couponInput");
  const code = codeInput ? codeInput.value.trim().toUpperCase() : "";
  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);

  if (!code) {
    showToast("Please enter a coupon code");
    return;
  }

  if (code === "RAMASHISH10") {
    if (subtotal < 100) {
      showToast("Minimum order of ₹100 required for RAMASHISH10");
      return;
    }
    state.appliedCoupon = code;
    showToast("🎉 Coupon 'RAMASHISH10' applied! 10% discount added.");
  } else if (code === "KACHORI5") {
    if (subtotal < 150) {
      showToast("Minimum order of ₹150 required for KACHORI5");
      return;
    }
    state.appliedCoupon = code;
    showToast("🎉 Coupon 'KACHORI5' applied! Flat ₹20 discount added.");
  } else {
    showToast("Invalid coupon code. Try RAMASHISH10 or KACHORI5");
    return;
  }

  renderCartDrawer();
}

// 10. WhatsApp Order Generator
function sendOrderWhatsApp() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const customerName = document.getElementById("orderCustomerName") ? document.getElementById("orderCustomerName").value.trim() : "Valued Customer";
  const customerPhone = document.getElementById("orderCustomerPhone") ? document.getElementById("orderCustomerPhone").value.trim() : "";
  const orderNotes = document.getElementById("orderNotes") ? document.getElementById("orderNotes").value.trim() : "";
  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || "Takeaway / Pickup";

  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  let discount = 0;
  if (state.appliedCoupon === "RAMASHISH10" && subtotal >= 100) {
    discount = Math.round(subtotal * 0.10);
  } else if (state.appliedCoupon === "KACHORI5" && subtotal >= 150) {
    discount = 20;
  }
  const total = Math.max(0, subtotal - discount);

  const orderToken = "RMS-" + Math.floor(1000 + Math.random() * 9000);

  let message = `*🙏 नमस्ते रामाशीष नाश्ता हाउस (RAMASHISH NASTA HOUSE)*\n`;
  message += `*NEW ORDER TOKEN:* #${orderToken}\n\n`;
  message += `*📋 ORDER ITEMS:*\n`;

  state.cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (${item.hindiName})\n`;
    message += `   └ Portion: ${item.portionLabel} × ${item.qty} = *₹${item.unitPrice * item.qty}*\n`;
  });

  message += `\n--------------------------------\n`;
  message += `*Subtotal:* ₹${subtotal}\n`;
  if (discount > 0) {
    message += `*Discount (${state.appliedCoupon}):* -₹${discount}\n`;
  }
  message += `*Total Amount:* ₹${total}\n`;
  message += `--------------------------------\n\n`;

  message += `*👤 CUSTOMER DETAILS:*\n`;
  message += `• Name: ${customerName}\n`;
  if (customerPhone) message += `• Phone: ${customerPhone}\n`;
  message += `• Order Type: *${orderType}*\n`;
  if (orderNotes) message += `• Notes / Time: ${orderNotes}\n`;

  message += `\n_Please confirm availability & preparation time. Dhanyawad!_`;

  const phoneNum = "919826012345"; // Default shop contact number
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNum}?text=${encoded}`;

  window.open(whatsappUrl, "_blank");
}

// 11. Quick View Modal
function openItemModal(itemId) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;

  const modal = document.getElementById("itemDetailModal");
  const content = document.getElementById("itemModalContent");
  if (!modal || !content) return;

  const selectedPortionIdx = state.selectedPortions[item.id] || 0;
  const currentPortion = item.portions[selectedPortionIdx];

  content.innerHTML = `
    <div class="modal-img-banner">
      <img src="${item.image}" alt="${item.name}" />
      <button class="modal-close-btn" onclick="closeItemModal()">✕</button>
    </div>
    <div class="modal-body">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-main);">${item.name}</h2>
          <span style="font-size: 1rem; color: var(--primary); font-family: 'Rozha One', serif;">${item.hindiName}</span>
        </div>
        <span style="font-size: 1.5rem; font-weight: 800; color: var(--primary);">₹${currentPortion.price}</span>
      </div>

      <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.2rem; line-height: 1.5;">${item.desc}</p>

      <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.2rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.86rem;">
        <div><strong>🌿 Ingredients:</strong> ${item.ingredients}</div>
        <div><strong>🌶️ Taste Profile:</strong> ${item.spiciness}</div>
        <div><strong>⏳ Shelf Life:</strong> ${item.shelfLife}</div>
      </div>

      <div style="margin-bottom: 1.4rem;">
        <label style="display: block; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">Select Quantity / Weight</label>
        <div class="portion-options">
          ${item.portions.map((p, idx) => `
            <button 
              type="button" 
              class="portion-btn ${idx === selectedPortionIdx ? 'active' : ''}" 
              onclick="selectPortionModal('${item.id}', ${idx})"
            >
              ${p.label} - ₹${p.price}
            </button>
          `).join('')}
        </div>
      </div>

      <button class="btn-primary" style="width: 100%; justify-content: center; padding: 0.85rem;" onclick="addToCart('${item.id}', ${selectedPortionIdx}); closeItemModal();">
        Add to Order (₹${currentPortion.price})
      </button>
    </div>
  `;

  modal.classList.add("active");
}

function selectPortionModal(itemId, idx) {
  state.selectedPortions[itemId] = idx;
  openItemModal(itemId);
  renderMenu();
}

function closeItemModal() {
  const modal = document.getElementById("itemDetailModal");
  if (modal) modal.classList.remove("active");
}

// 12. Token Receipt Modal
function openReceiptModal() {
  if (state.cart.length === 0) {
    showToast("Cart is empty! Add items to generate receipt.");
    return;
  }

  const modal = document.getElementById("receiptModal");
  const container = document.getElementById("receiptBody");
  if (!modal || !container) return;

  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  let discount = 0;
  if (state.appliedCoupon === "RAMASHISH10" && subtotal >= 100) discount = Math.round(subtotal * 0.10);
  else if (state.appliedCoupon === "KACHORI5" && subtotal >= 150) discount = 20;
  const total = Math.max(0, subtotal - discount);

  const orderToken = "RMS-" + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  const timeStr = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  container.innerHTML = `
    <div class="receipt-box">
      <div class="receipt-header">
        <h3 style="color: #c2410c; margin-bottom: 2px;">रामाशीष NASTA HOUSE</h3>
        <p style="font-size: 0.8rem; margin-bottom: 4px;">Taste & Purity Guaranteed • 100% Shuddh</p>
        <div style="font-size: 1.1rem; font-weight: 800; border: 2px solid #000; display: inline-block; padding: 2px 10px; margin: 4px 0;">TOKEN: #${orderToken}</div>
        <p style="font-size: 0.78rem;">Date: ${dateStr} • Time: ${timeStr}</p>
      </div>

      <table class="receipt-table">
        <thead>
          <tr style="border-bottom: 1px solid #000;">
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          ${state.cart.map(item => `
            <tr>
              <td>${item.name} (${item.portionLabel})</td>
              <td>${item.qty}</td>
              <td>₹${item.unitPrice * item.qty}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div style="border-top: 1px dashed #000; padding-top: 6px; font-size: 0.88rem;">
        <div style="display: flex; justify-content: space-between;">
          <span>Subtotal:</span>
          <span>₹${subtotal}</span>
        </div>
        ${discount > 0 ? `
          <div style="display: flex; justify-content: space-between; color: green;">
            <span>Discount (${state.appliedCoupon}):</span>
            <span>-₹${discount}</span>
          </div>
        ` : ''}
        <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; border-top: 1px solid #000; margin-top: 6px; padding-top: 4px;">
          <span>TOTAL PAYABLE:</span>
          <span>₹${total}</span>
        </div>
      </div>

      <div style="text-align: center; margin-top: 1.2rem; font-size: 0.75rem; border-top: 1px dashed #000; padding-top: 8px;">
        <p><strong>धन्यवाद! फिर अवश्य पधारें!</strong></p>
        <p style="margin-top: 4px;">कृपया कचरा डस्टबिन में ही डालें ♻️</p>
      </div>

      <div style="display: flex; gap: 0.8rem; margin-top: 1.4rem;">
        <button class="btn-primary" style="flex: 1; justify-content: center;" onclick="window.print()">
          🖨️ Print Receipt
        </button>
        <button class="btn-whatsapp" style="flex: 1; justify-content: center;" onclick="sendOrderWhatsApp(); closeReceiptModal();">
          📲 Send Order
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeReceiptModal() {
  const modal = document.getElementById("receiptModal");
  if (modal) modal.classList.remove("active");
}

// 13. Physical Menu Poster Viewer
function openPosterModal() {
  const modal = document.getElementById("posterModal");
  if (modal) modal.classList.add("active");
}

function closePosterModal() {
  const modal = document.getElementById("posterModal");
  if (modal) modal.classList.remove("active");
}

// 14. Bulk Enquiry Submit
function handleBulkEnquiry(e) {
  e.preventDefault();
  const name = document.getElementById("bulkName").value.trim();
  const phone = document.getElementById("bulkPhone").value.trim();
  const eventDate = document.getElementById("bulkDate").value;
  const guests = document.getElementById("bulkGuests").value;
  const items = document.getElementById("bulkItems").value.trim();

  let message = `*🎉 BULK / CATERING ENQUIRY - RAMASHISH NASTA HOUSE*\n\n`;
  message += `• Name: *${name}*\n`;
  message += `• Contact: *${phone}*\n`;
  message += `• Event Date: *${eventDate}*\n`;
  message += `• Expected Guests: *${guests} People*\n`;
  message += `• Required Items: *${items}*\n\n`;
  message += `_Please share the best quote and delivery options._`;

  const phoneNum = "919826012345";
  const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
  showToast("Opening WhatsApp for Bulk Booking Quote...");
}

// 15. UI Helpers
function toggleCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) {
    overlay.classList.toggle("active");
    if (overlay.classList.contains("active")) {
      renderCartDrawer();
    }
  }
}

function openCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) {
    overlay.classList.add("active");
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) overlay.classList.remove("active");
}

function scrollToMenu() {
  const el = document.getElementById("menuCatalogSection");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #1c1917;
      color: #ffffff;
      padding: 0.8rem 1.4rem;
      border-radius: 9999px;
      font-size: 0.88rem;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      z-index: 9999;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
      pointer-events: none;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border: 1px solid rgba(245, 158, 11, 0.4);
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>✨</span><span>${message}</span>`;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 2800);
}

// 16. Event Listeners Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderMenu();
  renderCartDrawer();
  updateCartCounters();

  // Search input live filtering
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderMenu();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderMenu();
    });
  }

  // Category filter tabs
  const catButtons = document.querySelectorAll(".cat-tab");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeCategory = btn.getAttribute("data-category");
      renderMenu();
    });
  });

  // Bulk order form
  const bulkForm = document.getElementById("bulkEnquiryForm");
  if (bulkForm) {
    bulkForm.addEventListener("submit", handleBulkEnquiry);
  }
});
