$(document).ready(function(){

  //Create the grid and resize the boxes
  function createGrid(numBox){
    var box = '<div class="box"></div>';
    for(var i = 1; i <= numBox; i++){
      for(var j = 1; j <= numBox; j++){
        $('#container').append('<div class="box"></div>');
      }
    }
    $('.box').css({'height': checkSize(numBox), 'width': checkSize(numBox)});
  }

  //check the number of boxes and resize them
  function checkSize(numBox){
    var size = (400 - (numBox * 2)) / numBox;
    return size;
  }
//color the boxes on mouse over
  $('div').on('mouseenter', '.box', function(){
    $(this).css({'background-color': '#F7D72A'});
  });
//reset sketchpad
  $('#resetSketch').on('click', function(){
    $('.box').css({'background-color': '#EDEDED'});
  });

  createGrid(16);
});
