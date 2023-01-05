// Pass function into other function
// Filter, map, and reduce
// Adding to data list (some type of form)
// User input for searching

// Core set of assumptions - JS file, HTML file, working in browser
// Main Goal: Being able to read code that is NOT their own, pick out familiar pieces and connect them to prior concepts
// MW Lite Edition, using recipes
// Incorperating a single, separate object (looking up information about them)
// **DEMO OF CALLBACK FUNCTIONS AND NAMING MAP AND FILTER FNS**
// Use .map and .filter to build features (build from scratch)
// Rework these anonymous functions into named functions
// Build connection that anonymous functions CAN be named & passed in!
// Build basic promptFor/validation function that will take callback function
// Will connect to promptFor in MW

// <<<<<<<<<<<<<<<<< User Stories <<<<<<<<<<<<<<<<<

// Write a function that will search for all Italian dishes.  

let dishes = [
    {
        id: 1,
        name: "Pizza",
        cuisine: "Italian",
        servings: 8,
        ingredients: ["tomato", "cheese"],
    },
    {
        id: 2,
        name: "Spaghetti",
        cuisine: "Italian",
        servings: 2,
        ingredients: ["tomato", "cheese"],
    },
    {
        id: 3,
        name: "Ravioli",
        cuisine: "Italian",
        servings: 2,
        ingredients: ["tomato", "cheese"],
    },
    {
        id: 4,
        name: "Enchiladas",
        cuisine: "Mexican",
        servings: 6,
        ingredients: ["tomato", "cheese"],
    },
    {
        id: 5,
        name: "Tacos",
        cuisine: "Mexican",
        servings: 4,
        ingredients: ["tomato", "cheese"],
    },
    {
        id: 6,
        name: "Burrito Supreme",
        cuisine: "Mexican",
        servings: 1,
        ingredients: ["tomato", "cheese"],
    },
    {
        id: 7,
        name: "Elote",
        cuisine: "Mexican",
        servings: 4,
        ingredients: ["corn", "cheese"],
    },
    {
        id: 8,
        name: "Crepes",
        cuisine: "French",
        servings: 1,
        ingredients: ["flour", "sugar"],
    },
    {
        id: 9,
        name: "Corned Beef & Cabbage",
        cuisine: "Irish",
        servings: 10,
        ingredients: ["beef", "cabbage"],
    },
    {
        id: 10,
        name: "Beef Stew",
        cuisine: "Irish",
        servings: 8,
        ingredients: ["beef", "tomato"],
    },
    {
        id: 11,
        name: "Lasagna",
        cuisine: "Vegetarian",
        servings: 8,
        ingredients: ["tomato", "cheese"],
    },
    {
        id: 12,
        name: "Falafel",
        cuisine: "Vegetarian",
        servings: 1,
        ingredients: ["chickpea", "parsley"],
    },
    {
        id: 13,
        name: "Chili",
        cuisine: "Vegetarian",
        servings: 13,
        ingredients: ["tomato", "chickpea"],
    },
    {
        id: 14,
        name: "Goulash",
        cuisine: "Hungarian",
        servings: 15,
        ingredients: ["beef", "tomato"],
    },
];
let todaysSpecial = {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
}

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

function findMexicanFood() {
    // This will be an example function that will already be completed
    let results = dishes.filter(function (el) {
        if (el.cuisine === "Mexican") {
            return true;
        } else {
            return false;
        }
    });

    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

    return results;
}

// <<<<<<<<<<<<<<<<< CUSTOM PROMPT FUNCTION <<<<<<<<<<<<<<<<<

function customPrompt(promptQuestion, arrayOfValidResponses) {
    // Students will start with prompt(), then will refactor to use this customPrompt() function
    let response
    while (!arrayOfValidResponses.includes(response)) {
        response = prompt(promptQuestion)
    }
    return response
}

// <<<<<<<<<<<<<<<<< MAP & FILTER FUNCTIONS <<<<<<<<<<<<<<<<<

function findItalianFood() {
    // This will be an empty function that students will complete
    let results = dishes.filter(function (el) {
        if (el.cuisine === "Italian") {
            return true;
        } else {
            return false;
        }
    });
    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!
    return results;
}
function searchCuisines() {
    // This will be an empty function that students will complete
    let allCuisines = ["Italian", "Mexican", "French", "Irish", "Vegetarian", "Hungarian"]
}

function searchIngredients() {
    // This will be an empty function that students will complete
    let allIngredients = ["tomato", "cheese", "corn", "flour", "sugar", "beef", "cabbage", "chickpea", "parsley"]
    let searchTerm = prompt(`What ingredient would you like to search for?`)
    let results = dishes.filter(function (el) {
        if (el.ingredients.includes(searchTerm)) {
            return true;
        } else {
            return false;
        }
    });
    return results
}
function showCuisineTypes() {
    // This will be an empty function that students will complete
    let results = dishes.map(function (el) {
        return el.cuisine
    });
    return results
}

function displayDishInfo(dish) {
    // This will be an empty function that students will complete
    console.log(`ID: ${dish.id}`)
    console.log(`Name: ${dish.name}`)
    console.log(`Cuisine: ${dish.cuisine}`)
    console.log(`Ingredient List:`)
    for (let i = 0; i < dish.ingredients.length; i++) {
        console.log(`${dish.ingredients[i]}`)
    }
}

// <<<<<<<<<<<<<<<<< BONUS: REDUCE FUNCTIONS <<<<<<<<<<<<<<<<<

function calculateTotalServings() {
    // This will (potentially) be an empty function that students will complete as a bonus
    alert("Calculating total number of servings...")
    let results = dishes.reduce(function (total, el) {
        return total + el.servings;
    }, 0)
    return results
}


function runApp() {
    alert("Welcome to the Recipe Searching Application!")
    let userChoice = customPrompt(`Press 1 to search for Mexican dishes.
    Press 2 to search for Italian dishes.    
    Press 3 to search for dishes by cuisine.
    Press 4 to search for dishes by ingredient
    Press 5 to see all cuisine types.
    Press 6 to see today's special dish.
    Enter "Exit" to quit the application.`, ["1", "2", "3", "4", "5", "6", "Exit"])
    switch (userChoice) {
        case "1":
            alert("Searching for Mexican dishes...")
            let mexicanDishes = findMexicanFood()
            console.log(mexicanDishes)
            alert("Found all Mexican dishes!  Check the console for full output.")
            break
        case "2":
            alert("Searching for Italian dishes...")
            // TODO: Add search function for Italian cuisine
            alert("Found all Italian dishes!  Check the console for full output")
            break
        case "3":
            alert("Searching for dishes by cuisine...")
            // TODO: Add search function to use USER INPUT to search for dish cuisine
            alert("Found all dishes matching the cuisine search term!  Check the console for full output")
            break
        case "4":
            alert("Searching for dishes by ingredient...")
            // TODO: Add search function to use USER INPUT to search for dishes that INCLUDE that ingredient
            let ingredientSearchResults = searchIngredients()
            console.log(ingredientSearchResults)
            alert("Found all dishes that contain the ingredient search term!  Check the console for full output")
            break
        case "5":
            alert("Searching for cuisine types...")
            let cuisineTypes = showCuisineTypes()
            alert("Found all cuisine types!  Check the console for full output.")
            console.log(cuisineTypes)
            break
        case "6":
            alert("Gathering information on today's special dish...")
            displayDishInfo(todaysSpecial)
            alert("Success!  Check the console for full recipe information!")
            break
        case "exit":
            alert("Thank you for using the Recipe Searching Application!  Goodbye!")
            return
        default:
            alert("Invalid choice, please try your selection again!")
            return runApp()
    }
}

runApp()