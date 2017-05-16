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
    var size = (400 - (numBox * 2)) / numBox;
    $('.box').css({'height': size, 'width': size});
  }

//color the boxes on mouse over
  $('div').on('mouseenter', '.box', function(){
    $(this).css({'background-color': '#F7D72A'});
  });

//yellow color Sketchpad
  $('#yellow').on('click', function(){
    resetGrid();
    $('div').on('mouseenter', '.box', function(event){
      event.stopPropagation();
      $(this).css({'background-color': '#F7D72A'});
    });
  });
//raimbow color Sketchpad
  $('#randomColor').on('click', function(){
    resetGrid();
    $('div').on('mouseenter', '.box', function(event){
      event.stopPropagation();
      var randomColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
      $(this).css({'background-color': randomColor});
    });
  });

//change grid size with prompt
  $('#gridSize').on('click', function(){
    $('.box').remove();
    resetGrid();
    numBox = prompt('Choose a number from 1 to 64!');
    console.log(numBox);
    if(numBox < 1 || numBox > 64){
      numBox = 16;
    }
    createGrid(numBox);
  });

//reset sketchpad on button click
  function resetGrid(){
    $('.box').css({'background-color': '#EDEDED'});
    $('.box').off();
  }

//greyscale color Sketchpad
  $('#darkerColor').on('click', function(){
    resetGrid();
    var color = 250;
    $('div').on('mouseenter', '.box', function(event){
      event.stopPropagation();
      if(color > 0){
        color -= 25;
        $(this).css({'background-color': 'rgb('+ color +','+ color +','+ color +')'});
      }else{
        $(this).css({'background-color': 'rgb('+ color +','+ color +','+ color +')'});
        color = 250;
      }

    });
  });

  createGrid(numBox);
});
