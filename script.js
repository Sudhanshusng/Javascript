const cont = document.querySelector(".container");
const input = document.querySelector("#meal");
const button = document.querySelector(".btn"); // Use document.querySelector to select a single element
const recipe = document.querySelector(".recipes");

let word;

async function fetchRecipes(word) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`);
    const data = await response.json();
    console.log(data);
    
    // const div = document.createElement("div");
    // div.classList.add("boxy"); // Use classList.add to add a class to the element
    // recipe.appendChild(div);
}

// Debugging statement to check if the button element is selected correctly
console.log(button);

button.addEventListener("click", function (e) {
    e.preventDefault();
    word = input.value.trim();
    if (word === "") {
        alert("Please enter a word");
    } else {
        fetchRecipes(word);
    }
});
