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
      <h2 class="card-heading" id="heading-${idCounter}">${name}</h2>
      <img class="card-img" id="img-${idCounter}" src="${imgLink}" alt="${name}">
      <button class="card-removeBtn" id="remove-${idCounter}">Remove</button>
    </div>`
  );

  const nameID = `heading-${idCounter}`;
  const imgID = `img-${idCounter}`;

  cardList.push({ name, nameID, imgLink, imgID });
  console.log(cardList);
}
function removebtn(idCounter, name, imgLink) {
  const removeBtn = document.querySelector(`#remove-${idCounter}`);
  removeBtn.addEventListener("click", function () {
    const card = document.querySelector(`#card-${idCounter}`);
    card.remove();
    const index = cardList.findIndex(
      (object) => object.nameID === `heading-${idCounter}`
    );
    cardList.splice(index, 1);
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

  createCard(name, imgLink);
  removebtn(idCounter, name, imgLink);
  clearText(name, imgLink);
  console.log(cardList);
});
