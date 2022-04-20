const randomURL =
  "https://api.spoonacular.com/recipes/random?apiKey=44e9f8a09607483aa7fabed76a891bdb";

// const wholeURL =
//   "https://api.spoonacular.com/recipes/complexSearch?apiKey=5cfff0b79de64c61bbe518c3a5c52cb6";
fetch(randomURL)
  .then((response) => response.json())
  .then((recipes) => getTheRecipe(recipes));

const recipePic = document.getElementById("list");

function getTheRecipe(recipes) {
  let toppings = recipes.recipes[0].extendedIngredients;

  foodImgSpot = document.getElementById("title-area");
  foodImg = document.createElement("img");
  foodImg.src = recipes.recipes[0].image;
  foodImgSpot.append(foodImg);

  const showIngredients = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      toppings.forEach((topping) => {
        keyIngredients(topping);
      });
    }
  });
}

function keyIngredients(e) {
  li = document.createElement("li");
  li.textContent = e.name;
  recipePic.append(li);
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  console.log(e);

  let comment = document.getElementById("new-comment");
  const submit = document.getElementById("comment-display");
  comment = e.target[0].value;
  submit.innerText = "";
  submit.append(comment);
  form.reset();
}
const button = document.getElementById("random");
button.addEventListener("click", () => {
  window.location.reload();
});
