// <<<<<<<<<<<<<<<<< User Stories <<<<<<<<<<<<<<<<<

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
    alert("Searching for Mexican dishes...")
    let results = dishes.filter(function (el) {
        if (el.cuisine === "Mexican") {
            return true;
        } else {
            return false;
        }
    });

    // Debug tip: Place a Breakpoint on the console.log AFTER the filter, then hover over "results" to see results of filter 
    // without having to step through the whole thing!
    console.log(results)
    alert("Found all Mexican dishes!  Check the console for full output.")

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
    alert("Searching for Italian dishes...")
    let results = dishes.filter(function (el) {
        if (el.cuisine === "Italian") {
            return true;
        } else {
            return false;
        }
    });
    console.log(results)
    alert("Found all Italian dishes!  Check the console for full output")
}
function searchCuisines() {
    alert("Searching for dishes by cuisine...")
    let allCuisines = ["Italian", "Mexican", "French", "Irish", "Vegetarian", "Hungarian"]
    let searchTerm = customPrompt(`What cuisine would you like to search for?
    (Options are: Italian, Mexican, French, Irish, Vegetarian, Hungarian)`, allCuisines)
    let results = dishes.filter(function (el) {
        if (el.cuisine === searchTerm) {
            return true;
        } else {
            return false;
        }
    });
    console.log(results)
    alert("Found all dishes matching the cuisine search term!  Check the console for full output")
}

function searchIngredients() {
    alert("Searching for dishes by ingredient...")
    let allIngredients = ["tomato", "cheese", "corn", "flour", "sugar", "beef", "cabbage", "chickpea", "parsley"]
    let searchTerm = customPrompt(`What ingredient would you like to search for?
    (Options are: tomato, cheese, corn, flour, sugar, beef, cabbage, chickpea, or parsley)`, allIngredients)
    let results = dishes.filter(function (el) {
        if (el.ingredients.includes(searchTerm)) {
            return true;
        } else {
            return false;
        }
    });
    console.log(results)
    alert("Found all dishes that contain the ingredient search term!  Check the console for full output")
}
function showCuisineTypes() {
    alert("Searching for cuisine types...")
    let results = dishes.map(function (el) {
        return el.cuisine
    });
    console.log(results)
    alert("Found all cuisine types!  Check the console for full output.")

}

function combineCuisineDish(allDishes, callbackFunction) {
    let cuisineDishNames = []
    for (let i = 0; i < allDishes.length; i++) {
        let concatenatedDish = callbackFunction(allDishes[i])
        cuisineDishNames.push(concatenatedDish)
    }
    console.log(cuisineDishNames)
    alert("Successfully combined cuisine and dish names!  Check the console for full output.")

}

function cuisineDishConcatenator(singleDish) {
    return `${singleDish.cuisine} ${singleDish.name}`
}

function displayDishInfo(dish) {
    alert("Gathering information on today's special dish...")
    console.log(`ID: ${dish.id}`)
    console.log(`Name: ${dish.name}`)
    console.log(`Cuisine: ${dish.cuisine}`)
    console.log(`Ingredient List:`)
    for (let i = 0; i < dish.ingredients.length; i++) {
        console.log(`${dish.ingredients[i]}`)
    }
    alert("Success!  Check the console for full recipe information!")
}

// <<<<<<<<<<<<<<<<< BONUS: REDUCE FUNCTIONS <<<<<<<<<<<<<<<<<

function calculateTotalServings() {
    alert("Calculating total number of servings...")
    let results = dishes.reduce(function (total, el) {
        return total + el.servings;
    }, 0)
    console.log(results)
}


function runApp() {
    alert("Welcome to the Recipe Searching Application!")
    let userChoice = customPrompt(`Press 1 to search for Mexican dishes.
    Press 2 to search for Italian dishes.    
    Press 3 to search for dishes by cuisine.
    Press 4 to search for dishes by ingredient
    Press 5 to see a list of cuisines & dish names.
    Press 6 to see today's special dish.
    Enter "Exit" to quit the application.`, ["1", "2", "3", "4", "5", "6", "Exit"])
    switch (userChoice) {
        case "1":
            findMexicanFood()
            break
        case "2":
            findItalianFood()
            break
        case "3":
            searchCuisines()
            break
        case "4":
            searchIngredients()
            break
        case "5":
            combineCuisineDish(dishes, cuisineDishConcatenator)
            break
        case "6":
            displayDishInfo(todaysSpecial)
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