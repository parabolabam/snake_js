window.onload = function(){


  const UP = 38;
  const DOWN = 40;
  const LEFT = 37;
  const RIGHT = 39;

  var snake = [
                [5, 10],
                [15, 10]
              ]
  
  var canvas = document.getElementById('canvas');
  var width_ = canvas.clientWidth;
  var height_ = canvas.clientWidth;
  var ctx = canvas.getContext("2d");
  

setInterval(function(){
  document.onkeypress = function(event){
  drawSnake(event.keyCode);

 }
}, 60)

  
  function getFoodPos(){
    var rand_x = Math.random() * width_;
    var rand_y = Math.random() * height_ ;
    return {
      x: parseInt(rand_x),
      y: parseInt(rand_y)
    }
  }


  function drawSnake(ev){
      ctx.fillStyle = "#BBBBBB";
      snake.forEach(function(element, index, array){
          ctx.clearRect(0, 0, width_, height_)
          ctx.fillRect(element[0], element[1], 10, 10);

      });
     
      what_cycle_to_choose(ev);
      var head = snake.slice(0,1)
      snake.unshift(head);

  }


  function what_cycle_to_choose(direct){
    switch (direct) {
      case UP:
        snake.forEach(function(item, index, array){
          item[1] -= 5;
        });
        break;
      case DOWN:
        snake.forEach(function(item, index, array){
          item[1] += 5;
        });
        break;
      case LEFT:
        snake.forEach(function(item, index, array){
          item[0] -= 5;
        });
        break;
      case RIGHT:
        snake.forEach(function(item, index, array){
          item[0] += 5;
        });
        break;
    }
  } 

  function drawFood(coord){
    ctx.fillStyle = '#FF0000';
    ctx.clearRect(0, 0, width_, height_);
    ctx.fillRect(coord.x, coord.y, 10, 10)
    return {
      x: parseInt(coord.x),
      y: parseInt(coord.y)
    }

  }
};
