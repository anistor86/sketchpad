$(document).ready(function(){
  var numBox = 16;
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

//change grid size with prompt
  $('#gridSize').on('click', function(){
    numBox = prompt('Choose a number from 1 to 64!');
    console.log(numBox);
    if(numBox < 1 || numBox > 64){
      numBox = 16;
    }
    resetGrid();
    $('.box').remove();
    createGrid(numBox);
  });

//reset sketchpad on button click
  function resetGrid(){
    $('.box').css({'background-color': '#EDEDED'});
  }
  $('#resetSketch').on('click', resetGrid);



  createGrid(numBox);
});
