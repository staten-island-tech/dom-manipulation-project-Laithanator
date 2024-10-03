const domSelectors = {
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};

let name, imgLink;

function createCard(name, imgLink) {
  //creating the card
  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeading = document.createElement("h2");
  cardHeading.textContent = name;
  card.appendChild(cardHeading);
  cardHeading.classList.add("card-heading");

  const imgElement = document.createElement("img");
  imgElement.src = imgLink;
  imgElement.alt = name;
  card.appendChild(imgElement);
  imgElement.classList.add("card-img");

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("card-removeBtn");
  card.appendChild(removeBtn);

  removeBtn.addEventListener("click", function () {
    card.remove();
  });
  const cardContainer = document.querySelector(".container");
  cardContainer.appendChild(card);

  domSelectors[("card", name)] = card;
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
