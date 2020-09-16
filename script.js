// Create document ready
// Create init function that will kick off the app
// Create a namespace
// Display 2 random movies generated from a random item function**
// Create an event listener for a 'submit' event in the form
// Prevent default in form??
// Save information from user choice into a variable
// Determine if user choice is correct or not
// Display a message saying if user is right or wrong
// Display NEXT button to go to next pair of movies
// Hide NEXT button until user selects an option again
// Repeat from here ** 2 more times 
// Start over

// Stretch goals:
// If user is correct, asign points
// If user is not correct, take away points
// Display points earned
// Display alert with final score
// Add more movies
// Error handling






// Declare a function that will return a random item from any array
// Prevent default bahaviour from the form

// Stretch goals:



// Create a namespace:
const babyApp = {};

// Declare a function that will return a random item from any array
function randomSubject(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


// Create an event listener for a 'submit' event in the form
// Prevent default bahaviour from the form
$('form').on('submit', function (e) {
    e.preventDefault();

    // Save information from checked radio buttons into a variable
    // const accomplice = $('input[name=baby]:checked').val();


    
});


// Create init function that will kick off the app:
babyApp.init = () => {

}
// Create document ready:
$(document).ready(function () {
    babyApp.init();
})

// Stretch goals:
