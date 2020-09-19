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
            language: "en-US",
            sort_by: "popularity.desc",
            // Figure out how to get just one page
            page: 1,
        }
    }).then((res) => {

        console.log(res.results);
        // movieQuizApp.getResults(res);

        // Create a function that grabs a random item from an array
        // get image only
        // get movie title
        // make movies not the same - possibly if statement
        const firstMovie = movieQuizApp.randomMovie(res.results)
        console.log(firstMovie);
        // second movie
        const secondMovie = movieQuizApp.randomMovie(res.results)
        console.log(secondMovie);
        
        // console.log(firstMovie.popularity);
        // console.log(secondMovie.popularity);
        
        if (firstMovie === secondMovie) {
            movieQuizApp.randomMovie();
        } else if(firstMovie.popularity > secondMovie.popularity) {
            console.log('yes!');
        } else {
            console.log('no');
        }
        // to make button click and do something $(.movie1).on('click', )

        // this if statement is comparing if (popularity of first movie) is higher than (popularity of second movie)

        // Display 2 random movies generated from a random item function
        // to make results appear
        // to make results appear
    const showResults = () => {
        $('.movie1').click(function(){
        $('.button').on('click', function(){
        $(this).css('background-image', posterPath)
        })
        })
    }

        // const toDisplay = randomMovie(babies[accomplice]);
        // $('.results').html(`
        // <p class="choice">${toDisplay.name}</p>
        // <img src="${toDisplay.url}" alt="${toDisplay.alt}">
        // `);
    })
}
movieQuizApp.randomMovie = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
// Create an if statement that prevents two movies with same title
// let i = (res.title)
// if (i === i) then run random movie again until result is different
// let userScore = 0;
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
// Find a way to make the app to continue indefinitely

// Create init function that will kick off the app:
movieQuizApp.init = () => {
    movieQuizApp.getResults();
}
// Create document ready:
$(document).ready(function () {
    movieQuizApp.init();
})
