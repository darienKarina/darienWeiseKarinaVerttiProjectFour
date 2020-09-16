
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
