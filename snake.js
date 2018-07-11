window.onload = function(){

      var snake = [
          {x: 10, y: 10},
          {x: 20, y: 10},
          {x: 30, y: 10},
          {x: 40, y: 10}
      ]

      var canvas = document.getElementById('canvas');
      var width_ = canvas.clientWidth;
      var height_ = canvas.clientWidth;
      var ctx = canvas.getContext("2d");
      
      setInterval(function(){
      
      ctx.clearRect(0, 0, width_, height_);
      document.onkeydown = (e) => {
            if ([38,39,40,37].indexOf(e.keyCode) >= 0) e.preventDefault();
            switch(e.keyCode){
                case 37:
                  direct = "left";
                  break;
                case 38:
                  direct = "up";
                  break;
                case 39:
                  direct = "right";
                  break;
                case 40:
                  direct = "down";
                  break;
            }

      }
      drawSnake();
      drawFood();

  }, 10)
  

  function drawSnake(){
      ctx.fillStyle = "red";

      updatePos();
      snake.forEach(function(item){
      
        ctx.fillRect(item.x, item.y, 10, 10);
        if(item.x == food.x && item.y == food.y){
            food.x = parseInt(Math.random() * width_);
            food.y = parseInt(Math.random() * height_)
            addToSnake()
        }
      })
  }
 
  function addToSnake(){
      var last_index = snake.length - 1; 
      var new_one = {
        x: snake[last_index].x,
        y: snake[last_index].y
      }
      var x_diff = snake[last_index].x - snake[last_index - 1].x;
      var y_diff =  snake[last_index].y - snake[last_index - 1].y;

      if(x_diff > 0){
          new_one.x += 50;
      } else if(x_diff < 0){
        new_one.x -= 50;
      } else if(y_diff > 0){
        new_one.y += 50;
      } else if(y_diff < 0){
        new_one.y -= 100;
      }

      snake.push(new_one);
  }

  function updatePos(){
    var snakeEl = {
      x: snake[0].x,
      y: snake[0].y
    }

    if(direct == "up"){
        snakeEl.y -= 1;
    } else if(direct == "down"){
        snakeEl.y += 1;
    } else if(direct == "left"){
        snakeEl.x -= 1;
    } else if(direct == "right"){
        snakeEl.x += 1;
    }

    snake.pop();
    snake.unshift(snakeEl);

  }

  function drawFood(){
      ctx.fillStyle = "blue"
      ctx.fillRect(food.x, food.y, 10, 10)

  }
  var food = {
              x: parseInt(Math.random() * width_),
              y: parseInt(Math.random() * height_)
      };
  var direct = "right"

};
