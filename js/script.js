let open_page = document.getElementById("open_page");
let lang_page = document.getElementById("lang_page");
let login_page_ar = document.getElementById("login_page_ar");
let login_page_en = document.getElementById("login_page_en");
let products_page = document.getElementById("products_page");
let lang = document.querySelectorAll("#lang_page ul li");
let login_btn = document.querySelectorAll(".btn");
let card_btn = document.querySelector(".shopping_cart");
let products_list = document.querySelector(".products");

window.addEventListener("load", () => {
  setTimeout(() => {
    open_page.style.transform = "translateY(0%)";
  }, 500);
  setTimeout(() => {
    open_page.style.transform = "translateY(-100%)";
    lang_page.style.transform = "translateY(0%)";
  }, 2000);
});

lang.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.id == "ar") {
      lang_page.style.transform = "translateY(-100%)";
      login_page_ar.style.transform = "translateY(0%)";
    } else if (e.id == "en") {
      lang_page.style.transform = "translateY(-100%)";
      login_page_en.style.transform = "translateY(0%)";
    }
  });
});

login_btn.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    login_page_en.style.transform = "translateX(-100%)";
    login_page_ar.style.transform = "translateX(-100%)";
    products_page.style.transform = "translateY(0%)";
  });
});

// menu Toggle
let menu_btn = document.querySelector(".menu_btn");
let menu = document.querySelector(".menu");

menu_btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  products_list.classList.remove("active");
});

card_btn.addEventListener("click", () => {
  menu.classList.remove("active");
  products_list.classList.toggle("active");
});

// All Products Items
let products = [
  {
    product_image: "Images/product-1.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-2.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-3.png",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-4.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-5.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-6.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-7.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-8.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-9.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-10.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-11.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-13.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-14.webp",
    product_name: "Product Name",
    product_price: 250.0,
  },
  {
    product_image: "Images/product-15.png",
    product_name: "Product Name",
    product_price: 250.0,
  },
];

let product_row = document.querySelector(".product_row");
let temp;
function showProducts() {
  for (let i = 0; i < products.length; i++) {
    product_row.innerHTML += `
      <div class="box">
      <div class="img">
        <img src='${products[i].product_image}' alt="" />
      </div>
      <div class="icons">
        <i class="fas fa-heart"></i>
        <i class="fas fa-shopping-bag"></i>
      </div>

      <div class="details">
        <div class="price">
          <h2>${products[i].product_price} EGP</h2>
        </div>
        <div class="prod-name">
          <p>${products[i].product_name}</p>
        </div>
        <div class="action">
          <a id="add_to_cart" onclick = 'addItemInCart(${i})'  href="#">ADD TO CART</a>
          <a id="view_product" href="#">VIEW PRODUCT</a>
        </div>
      </div>
      </div>
`;
    temp = i;
  }
}
showProducts();

// add items to cart

let nom_of_products = document.querySelector(".nom_of_products");
let no_product = document.querySelector(".no_product");
let counter = 0;
function addItemInCart(i) {
  no_product.style.display = "none";
  nom_of_products.style.display = "flex";
  nom_of_products.innerHTML = ++counter;
  products_list.innerHTML += `
    <li class="product_box">
    <div class="content">
      <div class="img">
        <img src="${products[i].product_image}" alt="" />
      </div>
      <div class="product_info">
        <h3 class="product_price">${products[i].product_price} EGP</h3>
        <p class="product_name">${products[i].product_name}</p>
      </div>
      <div class="delete_icon">
        <i class="fas fa-times" ></i>
      </div>
    </div>
  </li>
    `;
  let delete_icon = document.querySelectorAll(".delete_icon");
  delete_icon.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.parentElement.style.display = "none";
      nom_of_products.innerHTML = --counter;
      if (counter == 0) {
        nom_of_products.style.display = "none";
        products_list.innerHTML = `<h1 style='text-align:center;'>No Products</h1>`;
      }
    });
  });
}
