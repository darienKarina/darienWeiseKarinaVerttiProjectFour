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
            language: "en",
            sort_by: "popularity.desc",
            // Figure out how to get just one page
            page: 1,
            page: 2,
            page: 3,
         }
    }).then((res) => {

      // Display 2 random movies generated from a random item function

      // Display random movie for left image from random item function
      const firstMovie = movieQuizApp.randomMovie(res.results)
      $('.movie1 img').attr({
         'src': `https://image.tmdb.org/t/p/original${firstMovie.poster_path}`,
         'alt': firstMovie.title
      });

      // add movie title to left image on screen
      $('.firstMovieTitle').text(firstMovie.title);

      // Display random movie for right image from random item function
      const secondMovie = movieQuizApp.randomMovie(res.results)
      $('.movie2 img').attr({
         'src': `https://image.tmdb.org/t/p/original${secondMovie.poster_path}`,
         'alt': secondMovie.title
      });

      // add movie title to right image on screen
      $('.secondMovieTitle').text(secondMovie.title);
      
      ////////// NEXT TWO functions for user results of clicked movie ////////
      //
      // when user clicks on #movie1
      $('#movie1').on('click', function(){
      // show if the user choice is correct or incorrect
         if (firstMovie.popularity > secondMovie.popularity) {
            // unhide #clickResult>#correctAnswer to display answer on page
            console.log('correct');
            $('#answer').text('Correct!');
         }else {if (firstMovie.popularity < secondMovie.popularity)
            $('#answer').text('Incorrect!');
         }
      })
      // when user clicks on #movie1
      $('#movie2').on('click', function(){
         // show if the user choice is correct or incorrect
            if (firstMovie.popularity < secondMovie.popularity) {
               $('#answer').text('Correct!');
            } else {if (firstMovie.popularity > secondMovie.popularity)
               $('#answer').text('Incorrect!');
            }
         }) 
         
      // Prevents two movies from populating the same
         if (firstMovie.popularity === secondMovie.popularity){
               location.reload();
         }
    })
}

// randomizes results of the array and outputs two objects
movieQuizApp.randomMovie = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// init function that will kick off the app:
movieQuizApp.init = () => {
    movieQuizApp.getResults();
}

// document ready:
$(document).ready(function () {
    movieQuizApp.init();
})



/////////////////////////// Psuedo code
// 
// if user guessed right … do something
// else … do something else
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
       

/////////////////////// MISC CODE SNIPPETS
// 
// const toDisplay = () => {
        // $('.movie1').click(function(){
        //     $('.button').on('click', function(){
        //     $(this).html()
        //     })
        //     })
        // }


                    // console.log(buttonSelected.attr(‘id’))
            // console.log(selectedMovie.attr('id'));
            // console.log(movieQuizApp.selectedMovie.attr('id'));