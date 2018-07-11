window.onload = function(){


  const UP = 38;
  const DOWN = 40;
  const LEFT = 37;
  const RIGHT = 39;

  var snake = [{x: 10, y: 10}]

  var canvas = document.getElementById('canvas');
  var width_ = canvas.clientWidth;
  var height_ = canvas.clientWidth;
  var ctx = canvas.getContext("2d");
  
  var food = {

    x: parseInt(Math.random() * width_),
    y: parseInt(Math.random() * height_)

  };
  
  document.onkeypress  = function(event){
    var code = event.keyCode;
    ctx.clearRect(0, 0, width_, height_);
    drawSnake(code);
    drawFood(food);

  };

  function drawSnake(ev){
      ctx.fillStyle = "#BBBBBB";
      what_cycle_to_choose(ev);
      snake.forEach(function(item){
        ctx.fillRect(item.x, item.y, 10, 10);
        if(snake[0].x == food.x && snake[0].y == food.y){
          food.x = parseInt(Math.random() * width_);
          food.y = parseInt(Math.random() * height_);
        }
      })
  };



  function what_cycle_to_choose(direct){
    snake.forEach(function(item){
      console.log(`I AM FROM ${direct}`)
      switch(direct){
        case 40:
          item.y+=1;
          break;
        case 38:
          item.y-=1;
          break;
        case 37:
          item.x-=1;
          break;
        case 39:
          item.x+=1;
        default:
          console.log(`Tails coords -> ${snake[0].y}, ${snake[0].x}`);
      }
    });
      
      
  };

  function drawFood(coord){
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(coord.x, coord.y, 10, 10)
    return {
      x: parseInt(coord.x),
      y: parseInt(coord.y)
    }

  }
};
