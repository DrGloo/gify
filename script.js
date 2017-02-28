$( "#Reset" ).click(function() {
    $("#dd").html("");
    $("#input").val("");
});

$("#sButton").click(function() {
    console.log("Search")
   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q=" + $("#input").val() + "&api_key=dc6zaTOxFJmzC",
     
     
      function(response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++){
                    $("#dd").append("<img src=" + response.data[i].images.fixed_height_downsampled.url + ">");

        }        
      });
});