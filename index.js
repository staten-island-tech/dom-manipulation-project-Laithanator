const domSelectors = {
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};

let name, imgLink;

function createCard(name, imgLink) {
  //creating the card
  const card = document.createElement("div");
  card.classList.add("card");

  const nameElement = document.createElement("h2");
  nameElement.textContent = name;
  card.appendChild(nameElement);
}

domSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.querySelector(".name").value;
  let imgLink = document.querySelector(".imgLink").value;

  name = "";
  imgLink = "";

  //checking values
  console.log(name);
  console.log(imgLink);

  createCard(name, imgLink);
});
