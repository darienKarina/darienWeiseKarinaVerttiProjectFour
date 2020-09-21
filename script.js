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
        
        // Display 2 random movies generated from a random item function
        const firstMovie = movieQuizApp.randomMovie(res.results)
        $('.movie1 img').attr({
            'src': `https://image.tmdb.org/t/p/original${firstMovie.poster_path}`,
            'alt': firstMovie.title
        });
        $('.firstMovieTitle').text(firstMovie.title);
        
        const secondMovie = movieQuizApp.randomMovie(res.results)
        $('.movie2 img').attr({
            'src': `https://image.tmdb.org/t/p/original${secondMovie.poster_path}`,
            'alt': secondMovie.title
        });
        $('.secondMovieTitle').text(secondMovie.title);

        
      ////////// NEXT TWO functions for user results of clicked movie ////////
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
           // check if user has already answered
           // if use did not answer move on
           // else do nothing
            if (firstMovie.popularity < secondMovie.popularity) {
                $('#answer').text('Correct!');
                $('#movie2').css("border", "10px solid green");
            }else {if (firstMovie.popularity > secondMovie.popularity)
                $('#answer').text('Incorrect!');
                $('#movie2').css("border", "10px solid red");
            }
        })  
        })

      //  prevent two same movies from being populated at the same time.
        $( ".refresh" ).click(function() {
            location.reload();
        });

    }

    movieQuizApp.randomMovie = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
    }

    // track if the user has selected an answer
    movieQuizApp.userAnswered = false;

  // Create init function that will kick off the app:
    movieQuizApp.init = () => {
    movieQuizApp.getResults();
    }
  // Create document ready:
    $(document).ready(function () {
    movieQuizApp.init();
    })
    
    
  /////////////////////////// Pseudo code

  // Stretch goals:
  // Add points system & display final score
  // Display alert with final score
  // Find a way to make the app to continue indefinitely
