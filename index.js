const header = document.querySelector(".header");

console.log(header);

let student = {
  name: "Ryan",
  age: 15,
  girlfriend: true,
};

const domSelectors = {
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};

console.log(student.name);

domSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});

domSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});
