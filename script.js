"use script";

//fetching the json file to populate the data dynamically
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

//handling the theme color change functionality
const themebtn = document.querySelector(".theme-toggle");
const themeImage = document.getElementById("theme-image");
const body = document.querySelector("body");
const header = document.querySelector("header");
const buttons = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");
const cardTitles = document.querySelectorAll("h3");
const mainTitle = document.querySelector(".main-title");
const logoTitle = document.querySelector(".logo-title");
// console.log(button);
// console.log(card);

let isFirstImage = true;

themebtn.addEventListener("click", () => {
  if (isFirstImage) {
    themeImage.src = "./assets/images/icon-moon.svg";
    themeImage.alt = "light-mood-logo";
    body.style.background = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
    header.style.backgroundColor = "white";
    mainTitle.classList.add("main-title-light-mood");
    logoTitle.classList.add("hidden");
    buttons.forEach((btn, index) => {
      btn.classList.add("btn-light-mood");
    });
    cards.forEach((card, index) => {
      card.classList.add("btn-light-mood");
    });

    cardTitles.forEach((cardtitle) => {
      cardtitle.classList.add("card-title-light-mood");
    });
  } else {
    themeImage.src = "./assets/images/icon-sun.svg";
    themeImage.alt = "dark-mood-logo";
    logoTitle.classList.remove("hidden");
    header.style.backgroundColor = "hsl(226, 25%, 17%)";
    mainTitle.classList.remove("main-title-light-mood");
    buttons.forEach((btn, index) => {
      btn.classList.remove("btn-light-mood");
    });
    cards.forEach((card, index) => {
      card.classList.remove("btn-light-mood");
    });

    cardTitles.forEach((cardtitle) => {
      cardtitle.classList.remove("card-title-light-mood");
    });
    body.style.background = "linear-gradient(180deg, #040918 0%, #091540 100%)";
  }

  isFirstImage = !isFirstImage;
  console.log(themeImage);
});

//handling the active toggle button
let cardArray = Array.from(document.querySelectorAll(".card"));
// console.log(cardArray);
let activeCardArray = [];

let clicked = true;
cardArray.forEach((card) => {
  // console.log(card);
  let activeToggle = card.querySelector(".active-toggle");
  activeToggle.addEventListener("click", () => {
    if (activeCardArray.includes(card)) {
      activeCardArray = activeCardArray.filter((active) => active !== card);
    } else {
      activeCardArray.push(card);
    }

    console.log(activeCardArray);
    if (clicked) {
      activeToggle.style.backgroundColor = "hsl(3, 77%, 44%)";
      activeToggle.style.justifyContent = "flex-end";

      //handling the active tab functionality
    } else {
      activeToggle.style.backgroundColor = "hsl(226, 11%, 37%)";
      activeToggle.style.justifyContent = "flex-start";
      activeCardArray.pop(card);
    }

    clicked = !clicked;
  });
});

//handling the click event on buttons
const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    btn.forEach((b) => b.classList.remove("btn-active"));

    button.classList.add("btn-active");
  });
});

const btnActive = document.querySelector(".btn-active");

btnActive.addEventListener("click", () => {
  // btnActive.style.backgroundColor = "hsl(3, 71%, 56%)";
  //show active card functionality
  cardArray.forEach((card) => {
    if (activeCardArray.includes(card)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

//show all card functionality
const btnAll = document.querySelector(".btn-all");

btnAll.addEventListener("click", () => {
  // btnAll.style.backgroundColor = "hsl(3, 71%, 56%)";
  cardArray.forEach((card) => {
    card.style.display = "block";
  });
});

const btnInactive = document.querySelector(".btn-inactive");

btnInactive.addEventListener("click", () => {
  // btnInactive.style.backgroundColor = "hsl(3, 71%, 56%)";

  cardArray.forEach((card) => {
    if (!activeCardArray.includes(card)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

//handling the click remove button functionality

cardArray.forEach((card) => {
  let btnRemove = card.querySelector(".btn-remove");
  btnRemove.addEventListener("click", () => {
    cardArray = cardArray.filter((a) => a !== card);

    card.remove();
  });
});
