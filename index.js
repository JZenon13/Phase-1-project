const randomURL =
  "https://api.spoonacular.com/recipes/random?apiKey=44e9f8a09607483aa7fabed76a891bdb";

fetch(randomURL)
  .then((response) => response.json())
  .then((recipes) => getTheRecipe(recipes));
//DOM selectors
const recipePic = document.getElementById("list");
const recipeTitle = document.getElementById("recipe-title");
const recipeSteps = document.getElementById("steps");
const wholeBody = document.getElementById("whole-body");
const ingredientsTitle = document.getElementById("ingredients-title");
const instructionsTitle = document.getElementById("instructions-title");
const h2play = document.getElementById("h2play");

//////////////
function getTheRecipe(recipes) {
  let toppings = recipes.recipes[0].extendedIngredients;
  let instructionSteps = recipes.recipes[0].analyzedInstructions[0].steps;
  wholeBody.style.color = "black";

  foodImgSpot = document.getElementById("title-area");
  foodImg = document.createElement("img");
  foodImg.src = recipes.recipes[0].image;
  foodImgSpot.append(foodImg);
  foodImg.addEventListener("click", () => {
    if (wholeBody.style.color === "black") {
      wholeBody.style.color = "white";
      wholeBody.style.background =
        "linear-gradient(-65deg, #000000, #1d1d1d, #505050, #1d1d1d, #000000)";
    } else {
      wholeBody.style.color = "black";
      wholeBody.style.background =
        "linear-gradient(-65deg, #f0ffbb, #fdd6a2, #ffcf91, #fdd6a2, #f0ffbb)";
    }
  });

  const showDish = document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      if (recipeTitle.innerText === "") {
        foodImg.style.float = "left";
        invokeToppings();
        invokeInstructions();
        h2play.textContent = "";
      }
      function invokeToppings() {
        recipeTitle.innerText = recipes.recipes[0].title;
        ingredientsTitle.innerText = "Ingredients";
        toppings.forEach((topping) => {
          keyIngredients(topping);
        });
      }
      function invokeInstructions() {
        instructionsTitle.innerText = "Instructions";
        instructionSteps.forEach((step) => {
          keySteps(step);
        });
      }
    }
  });
}
function keySteps(e) {
  li = document.createElement("li");
  li.innerText = e.step;
  recipeSteps.append(li);
}
function keyIngredients(e) {
  li = document.createElement("li");
  li.textContent = e.name;
  recipePic.append(li);
}

const form = document.getElementById("review-food");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
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
