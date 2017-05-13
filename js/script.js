$(document).ready(function(){

  var numBox = 10;
  var box = '<div class="box"></div>';
  for(var i = 1; i <= numBox; i++){
    for(var j = 1; j <= numBox; j++){
      $('#container').append('<div class="box"></div>');
    }
  }

});
