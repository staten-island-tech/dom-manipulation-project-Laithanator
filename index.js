const domSelectors = {
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};

let name, imgLink;
let cardList = [];
let idCounter = 0;
function createCard(name, imgLink) {
  idCounter += 1;
  domSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card"><h2 class="card-heading">${name}</h2><img class="imgLink" src="${imgLink}" alt="${name}"><button class="card-removeBtn" id="${idCounter}">Remove</button></div>`
  );
  cardList.push({ name, imgLink });

  console.log(cardList);

  const removeBtn = document.querySelector(`#${idCounter}`);
  removeBtn.addEventListener("click", function () {
    removeBtn.parentElement.remove();
  });
}

function clearText() {
  document.querySelector(".name").value = "";
  document.querySelector(".imgLink").value = "";
}

domSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.querySelector(".name").value;
  let imgLink = document.querySelector(".imgLink").value;

  //checking values
  console.log(name);
  console.log(imgLink);

  createCard(name, imgLink);
  clearText();
});
