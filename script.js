const movieQuizApp = {};

// URL from API 
movieQuizApp.endpoint = "https://api.themoviedb.org/3/discover/movie";

// movieDB API key
movieQuizApp.key = "1c6216962b83757c0807c889023d20c0";

// Pulling data from movieDB API
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
            page: 4,
        }
    }).then((res) => {

      // Adds movie poster images to movies displayed on page
        const firstMovie = movieQuizApp.randomMovie(res.results)
        $('.movie1 img').attr({
            'src': `https://image.tmdb.org/t/p/original${firstMovie.poster_path}`,
            'alt': firstMovie.title
        });

         // Displaying movie title
        $('.firstMovieTitle').text(firstMovie.title);
        
        const secondMovie = movieQuizApp.randomMovie(res.results)
        $('.movie2 img').attr({
            'src': `https://image.tmdb.org/t/p/original${secondMovie.poster_path}`,
            'alt': secondMovie.title
        });

        $('.secondMovieTitle').text(secondMovie.title);

        
      ////////// NEXT TWO functions display results of user click  ////////
      // 
      // when user clicks on #movie1
        $('#movie1').on('click', function(){
        // if movie displayed inside #movie1 is *MORE popular than in #movie2 
            if (firstMovie.popularity > secondMovie.popularity) {
               $('#answer').text('Correct!');
               $('#movie1').css("border", "10px solid green");
            }else {if (firstMovie.popularity < secondMovie.popularity)
               $('#answer').text('Incorrect!');
               $('#movie1').css("border", "10px solid red");
            }
         })
        // when user clicks on #movie2
        $('#movie2').on('click', function(){
           // if movie displayed inside #movie1 is *LESS popular than in #movie2 
            if (firstMovie.popularity < secondMovie.popularity) {
               $('#answer').text('Correct!');
               $('#movie2').css("border", "10px solid green");
            }else {if (firstMovie.popularity > secondMovie.popularity)
               $('#answer').text('Incorrect!');
               $('#movie2').css("border", "10px solid red");
            }
        })
      //  Prevents two movies of same value from loading at same time
        if (firstMovie === secondMovie){
           location.reload();
        }
      })

   //loads new pair of movies when clicked
   $( ".refresh" ).click(function() {
      location.reload();
      });
   }

   // Randomizes result of movieQuizApp movies displayed
   movieQuizApp.randomMovie = (array) => {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
   }

   // tracks if the user has selected an answer
   movieQuizApp.userAnswered = false;

  // Init function that starts movieQuizApp
   movieQuizApp.init = () => {
      movieQuizApp.getResults();
   }
  // When document is ready, initialize movieQuizApp
   $(document).ready(function () {
      movieQuizApp.init();
   })
    
    
  /////////////////////////// Pseudo code

  // Stretch goals:
  // Add points system & display final score
  // Display alert with final score
  // Find a way to make the app to continue indefinitely
