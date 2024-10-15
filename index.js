const domSelectors = {
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};

let cardList = [];
let idCounter = 0;

function createCard(name, imgLink) {
  idCounter += 1;

  domSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card" id="card-${idCounter}">
      <h2 class="card-heading">${name}</h2>
      <img class="card-image" src="${imgLink}" alt="${name}">
      <button class="card-removeBtn" id="remove-${idCounter}">Remove</button>
    </div>`
  );

  cardList.push({ name, imgLink });
  console.log(cardList);
}
function removebtn(idCounter, name, imgLink) {
  const removeBtn = document.querySelector(`#remove-${idCounter}`);
  removeBtn.addEventListener("click", function () {
    const card = document.querySelector(`#card-${idCounter}`);
    card.remove();
    const item = cardList.array.forEach(card => card.name === name && card.imgLink === imgLink ?card);
    cardList.splice(card, 1);
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

  console.log(name);
  console.log(imgLink);

  createCard(name, imgLink);
  console.log("idCounter",idCounter)
  removebtn(idCounter,name,imgLink)
  clearText();
});
