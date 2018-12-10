// array of topics
var topics = ["dogs", "cats", "tigers", "pandas", "koala",
    "sloths", "chinchillas"];

// for loop for buttons
for (var i = 0; i < topics.length; i++) {
    var button = $('<button>' + topics[i] + '</button>')
    button.appendTo('#buttonDiv');
};

//on click event for each button
$("button").on("click", function () {
//     //getting attribute "data-person" and adding url
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);

// added code

//this function contains api connection, ajax call and redering of returned data to div tag display
// function gifDisplay() {
//     var event = $(this).attr("data-name");
//     //api url string
//     var apiURL =
//       "https://api.giphy.com/v1/gifs/search?q=" +
//       event +
//       "&api_key=sYAxNyVTIWOWfoyFGSvZwDdC3wwKOOTR&limit=12";
//     console.log(apiURL);
    $.ajax({
      url: apiURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      $("#gifsAppear").empty();
      var results = response.data;
      if (results == "") {
        alert("There isn't a gif for this selected button");
      }
      //for loop generates the 12 renered images
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>"); //div for the gifs to go inside
        gifDiv.addClass("gifDiv");

        // pulling gif
        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
        gifImage.attr(
          "data-still",
          results[i].images.fixed_height_small_still.url
        ); // still image
        gifImage.attr("data-animate", results[i].images.downsized.url); // animated image

        gifImage.addClass("image");
        gifDiv.append(gifImage);
        $("#myGifs").prepend(gifDiv);

        // pulling rating of gif
        var gifRating = $("<p class='rate-card'>").text(
          "Rating: " + results[i].rating
        );
        gifDiv.append(gifRating);
      }
    });
  }
  //calling the functions
  buttonsDisplay();
  newButtonAdd();
  removeButton();
  // Document Event Listeners using global settings to work image click actions
  $(document).on("click", ".event", gifDisplay);
  $(document).on("click", ".image", function() {
    var state = $(this).attr("data-state");
    if (state == "still") {
      $(this).attr("src", $(this).data("animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).data("still"));
      $(this).attr("data-state", "still");
    }
  });
});


// end of added code


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