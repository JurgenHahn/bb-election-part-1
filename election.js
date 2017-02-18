$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'JSON'
  }).done(function(data){

    var i = 0;

    $.each(data.candidates, function(){
      i++;
      $('<li>').html(this.name, this.votes).appendTo('.list');
      $('<li>').html(this.votes).appendTo('.list');
    });
  });
});
