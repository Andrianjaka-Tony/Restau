let overflowAnimations = document.querySelectorAll(".overflow-animation");
delay = 0;
overflowAnimations.forEach((element) => {
  element.animate(
    [
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 350,
      fill: "forwards",
      timing: "ease",
      delay: delay,
    }
  );

  delay += 200;
});

/**
 * Fonction pour creer un lightbox
 * @param {string} img
 */
const createLightBox = (img) => {
  let response = document.createElement("div");
  response.classList.add("photo-lightbox");

  response.innerHTML = `
    <img src="${img}" alt="">
    <button class="btn-close">Fermer</button>
  `;

  document.body.appendChild(response);

  response.querySelector("button").addEventListener("click", () => {
    response.style.animation = "disappear 0.2s forwards";
    window.setTimeout(() => {
      document.body.removeChild(response);
    }, 200);
  });
};

/**
 * @typedef {Object} Menu
 * @property {string} image
 * @property {string} name
 * @property {string} price
 */
/**
 * Fonction pour creer une menu-card
 * @param {Menu} menu
 */
const createMenuCard = (menu) => {
  let response = document.createElement("div");
  response.classList.add("menu-card");
  response.classList.add("reveal");

  response.innerHTML = `
    <img src="${menu.image}" class="menu-img">
    <div class="menu-info">
      <p class="emnu-price">${menu.price}$</p>
      <p class="menu-name">${menu.name}</p>
    </div>
  `;

  response.addEventListener("click", () => {
    createLightBox(menu.image);
  });

  return response;
};

let menuDatas = [
  {
    image: "./img/menu1.png",
    name: "Tacos",
    price: "1.99",
  },
  {
    image: "./img/menu2.png",
    name: "Ailes de poulet",
    price: "2.49",
  },
  {
    image: "./img/menu3.png",
    name: "Beignet d'oignon",
    price: "1.49",
  },
  {
    image: "./img/menu4.png",
    name: "Blanc de poulet",
    price: "2.99",
  },
  {
    image: "./img/menu5.png",
    name: "Cheeseburger",
    price: "4.49",
  },
  {
    image: "./img/menu6.png",
    name: "Croque-monsieur",
    price: "2.29",
  },
  {
    image: "./img/menu7.png",
    name: "Frites",
    price: "0.99",
  },
  {
    image: "./img/menu8.png",
    name: "Nem",
    price: "2.49",
  },
  {
    image: "./img/menu9.png",
    name: "Salade de poulets grillés",
    price: "4.99",
  },
  {
    image: "./img/menu10.png",
    name: "Sandwich au poisson",
    price: "3.49",
  },
  {
    image: "./img/menu11.png",
    name: "Steak végétarien",
    price: "1.29",
  },
  {
    image: "./img/menu12.png",
    name: "Nuggets de poulets",
    price: "5.99",
  },
];
let menuContainer = document.querySelector(".menu-container");
menuDatas.forEach((menu) => {
  let menuCard = createMenuCard(menu);
  menuContainer.appendChild(menuCard);
});

let observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
    },
    {
      threshold: 0.5,
    }
  );
});
document
  .querySelectorAll(".reveal")
  .forEach((reveal) => observer.observe(reveal));
