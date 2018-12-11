// array of topics
var topics = ["dogs", "cats", "tigers", "pandas", "koala",
    "sloths", "chinchillas"];
console.log(topics)

// for loop for buttons
for (var i = 0; i < topics.length; i++) {
    var button = $("<button>");
    button.attr("mydata", topics[i]);
    button.text(topics[i]);
    button.appendTo("#buttonDiv");
}

//on click event for each button
$("button").on("click", function () {
    var event = $(this).attr("mydata");
    // getting attribute "data-name" and adding url
    for (var i = 0; i < topics.length; i++) {
        var queryURL =
            "https://api.giphy.com/v1/gifs/search?q=" +
            event +
            "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);
    }
    // ajax method
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);

                var animalImage = $("<img>");
                // makes sure height is the same for each gif
                animalImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.prepend(p);
                gifDiv.prepend(animalImage);
                $("#gifsAppear").prepend(gifDiv);
            }
        });
});

