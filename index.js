const randomURL =
  "https://api.spoonacular.com/recipes/random?apiKey=5cfff0b79de64c61bbe518c3a5c52cb6";

const wholeURL =
  "https://api.spoonacular.com/food/menuItems/search?apiKey=5cfff0b79de64c61bbe518c3a5c52cb6";
fetch(randomURL)
  .then((response) => response.json())
  .then(console.log);

function stuff() {
  return "hello world";
}

let willThisWork = "I want to know if this will work";
