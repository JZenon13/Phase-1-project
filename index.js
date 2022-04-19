const randomURL =
  "https://api.spoonacular.com/recipes/random?apiKey=44e9f8a09607483aa7fabed76a891bdb";

const wholeURL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=5cfff0b79de64c61bbe518c3a5c52cb6";
fetch(randomURL)
  .then((response) => response.json())
  .then((recipes) => getTheRecipe(recipes));

const recipePic = document.getElementById("list");

function getTheRecipe(recipes) {
  let toppings = recipes.recipes[0].extendedIngredients;

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
