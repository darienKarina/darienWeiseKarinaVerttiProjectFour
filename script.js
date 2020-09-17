// Create a namespace
const movieQuizApp = {};

// The URL I use to make my API call:
movieQuizApp.endpoint = "https://api.themoviedb.org/3/discover/movie";

// The API kei I use to access the APi:
movieQuizApp.key = "1c6216962b83757c0807c889023d20c0";

movieQuizApp.getResults = () => {
    $.ajax({
        url: movieQuizApp.endpoint,
        dataType: 'json',
        method: 'GET',
        data: {
            // From TMDB documentation
            api_key: movieQuizApp.key,
            sort_by: "popularity.desc",
            laguage: "en-US"
            // with_genres: 27
        }
    }).then((res) => {
        console.log(res);
        // movieQuizApp.getResults(res);
    });
}

// Display 2 random movies generated from a random item function
    // Create a function that grabs a random item from an array

// Create an event listener for a 'click' event in the movie buttons
// Save information from user choice into a variable
// Determine if user choice is correct or not
// Display a message saying if user is right or wrong
// Display NEXT button to go to next pair of movies
// Hide NEXT button until user selects an option again
// Repeat from here 3 more times 
// Or start over

// Stretch goals:
// Add points system & display final score
// Display alert with final score
// Find a way to make the add to continue indefinitely



// Create init function that will kick off the app:
movieQuizApp.init = () => {
    movieQuizApp.getResults();
}
// Create document ready:
$(document).ready(function () {
    movieQuizApp.init();
})


























// // Declare a function that will return a random item from any array
// // Prevent default bahaviour from the form

// // Stretch goals:



// // Create a namespace:
// const babyApp = {};

// // Declare a function that will return a random item from any array
// function randomSubject(array) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
// }


// // Create an event listener for a 'submit' event in the form
// // Prevent default bahaviour from the form
// $('form').on('submit', function (e) {
//     e.preventDefault();

//     // Save information from checked radio buttons into a variable
//     // const accomplice = $('input[name=baby]:checked').val();


    
// });


// // Create init function that will kick off the app:
// babyApp.init = () => {
// console.log(I work!);
// }
// // Create document ready:
// $(document).ready(function () {
//     babyApp.init();
// })

// // Stretch goals:
