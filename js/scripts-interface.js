var api = "BQBrp5IhzNH3PROuLoY8tddyujaFsyq3nftNrVYlFVovPASBQsIA1OTscy8PLhrF0bd8NUPiAwVuQav_7VKfjA";

$(function() {
  $("form").submit(function(){
    event.preventDefault();
    var genre = $('#genre').val();

    var tempo = parseFloat($('#tempo').val());

    $.get('https://api.spotify.com/v1/recommendations?market=US&seed_genres=' + genre + '&limit=25&target_tempo=' + tempo + '&access_token=' + api, function(response) {

      var song = response.tracks.items[1];
      var test = song.artists[1].name;
      console.log(test);

      // response.tracks.forEach(function(name){
      //   for(var i = 0; i < response.tracks.length; i ++) {
      //     console.log(name);
      //   }
      // })
        // $('.bpm').text("Your recommended tracks are" + song );
    // var results = response.tracks.length;
    //
    // for (var i = 0; i < results; i++); {
    // var name = results.name[i];
    // $('.bpm').append('<p>' + name + '</p>');
    // console.log(name);

    });
  });
});
