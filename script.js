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

        // Display 2 random movies generated from a random item function
        const firstMovie = movieQuizApp.randomMovie(res.results)
        $('.movie1 img').attr({
            'src': `https://image.tmdb.org/t/p/original${firstMovie.poster_path}`,
            'alt': firstMovie.title
        });
        $('.firstMovieTitle').text(firstMovie.title);

        
        console.log(firstMovie);

        const secondMovie = movieQuizApp.randomMovie(res.results)
        $('.movie2 img').attr({
            'src': `https://image.tmdb.org/t/p/original${secondMovie.poster_path}`,
            'alt': secondMovie.title
        });
        $('.secondMovieTitle').text(secondMovie.title);

        console.log(secondMovie);
        
        // user clicks on button
        $('button').on('click', function(){
            const selectedMovie = $(this);
            const buttonSelected = $(this);
            // console.log(buttonSelected.attr(‘id’))



            // console.log(selectedMovie.attr('id'));
            // console.log(movieQuizApp.selectedMovie.attr('id'));

            if (selectedMovie === 'movie1' && firstMovie.popularity > secondMovie.popularity) {
                console.log('yes!');
            } else {
                console.log('no');
            }
        })
        // compare the movie the user selected to the movie determined to be more popular
        // if user guessed right … do something
        // else … do something else


        // const toDisplay = () => {
        // $('.movie1').click(function(){
        //     $('.button').on('click', function(){
        //     $(this).html()
        //     })
        //     })
        // }

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
