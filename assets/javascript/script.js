// array of topics
var topics = ["dogs", "cats", "tigers", "pandas", "koala",
    "sloths", "chinchillas"];

// for loop for buttons
for (var i = 0; i < topics.length; i++) {
    var button = $('<button>' + topics[i] + '</button>')
    button.appendTo('#buttonDiv');
};

//on click event for each button
// $("button").on("click", function () {
//     //getting attribute "data-person" and adding url
//     var person = $(this).attr("data-person");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         person + "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             var results = response.data;

//             for (var i = 0; i < results.length; i++) {
//                 var gifDiv = $("<div>");

//                 var rating = results[i].rating;

//                 var p = $("<p>").text("Rating: " + rating);

//                 var personImage = $("<img>");
//                 // makes sure height is the same for each gif
//                 personImage.attr("src", results[i].images.fixed_height.url);

//                 gifDiv.prepend(p);
//                 gifDiv.prepend(personImage);

//                 $("#gifs-appear-here").prepend(gifDiv);
//             }
//         });
// });
//link giphy app to buttons
//prepend gifs to page
//optional: create search bar