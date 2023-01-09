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



// <<<<<<<<<<<<<<<<< MAP & FILTER FUNCTIONS <<<<<<<<<<<<<<<<<

function findItalianFood() {
    alert("Searching for Italian dishes...")
    // TODO: Filter all dishes 
    alert("Found all Italian dishes!  Check the console for full output")
}
function searchCuisines() {
    alert("Searching for dishes by cuisine...")
    // TODO: Gather user input for a cuisin to search for, then filter for all dishes matching this cuisine type
    // Then, log the filter results to the console
    alert("Found all dishes matching the cuisine search term!  Check the console for full output")
}

function searchIngredients() {
    alert("Searching for dishes by ingredient...")
    // TODO: Gather user input for an ingredient to search for, then filter for all dishes that INCLUDE this ingredient in their ingredients array property
    // Then, log the filter results to the console
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

function cuisineDishConcatenator(singleDish) {
    // TODO: Combine the dish Cuisine and Name into a single string, and return it
}

function combineCuisineDish(allDishes, callbackFunction) {
    // TODO: Apply the concatenatorFunction to each dish in allDishes, then log to the console the modified result
    alert("Successfully combined cuisine and dish names!  Check the console for full output.")

}

function displayDishInfo(dish) {
    alert("Gathering information on today's special dish...")
    // TODO: Log to the console all information about the passed-in dish object
    alert("Success!  Check the console for full recipe information!")
}

// <<<<<<<<<<<<<<<<< CUSTOM PROMPT FUNCTION <<<<<<<<<<<<<<<<<

function customPrompt(promptQuestion, arrayOfValidResponses) {
    let response
    while (!arrayOfValidResponses.includes(response)) {
        response = prompt(promptQuestion)
    }
    return response
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