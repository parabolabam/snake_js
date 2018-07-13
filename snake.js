window.onload = function(){

      var snake = [
          {x: 10, y: 10},
          {x: 50, y: 10},
      ]

      var canvas = document.getElementById('canvas');
      var width_ = canvas.clientWidth;
      var height_ = canvas.clientWidth;
      var ctx = canvas.getContext("2d");
      
      var ID = setInterval(function(){
      
      ctx.clearRect(0, 0, width_, height_);
            chooseDirection();
            drawSnake(ID);
            drawFood();

  }, 10)
  

  function drawSnake(id){
      ctx.fillStyle = "red";
      updatePos();
      ctx.fillRect(snake[0].x, snake[0].y, 11,11);
      for(var i = 1; i < snake.length; i++){
          ctx.fillStyle = "rgba(16,128,64,8)";
          chaeckIfFoodEaten();
          if(checkBorders()) clearInterval(id);
          ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
          

      }

  }
 
function chooseDirection(){

  document.onkeydown = (e) => {
                  if ([38,39,40,37].indexOf(e.keyCode) >= 0) e.preventDefault();
                  switch(e.keyCode){
                      case 37:
                        if(direct != "right") direct = "left";
                        console.log(direct)
                        break;
                      case 38:
                        if(direct != "down") direct = "up";
                        console.log(direct)
                        break;
                      case 39:
                        if(direct != "left") direct = "right";
                        console.log(direct)
                        break;
                      case 40:
                        if(direct != "up") direct = "down";
                        console.log(direct)
                        break;
                  }

            }

}

  function chaeckIfFoodEaten(){
    if(Math.abs(snake[0].x - food.x) < 7 && Math.abs(snake[0].y - food.y) < 7){
            food.x = parseInt(Math.random() * width_);
            food.y = parseInt(Math.random() * height_);
            addToSnake()
        }
  }

  function checkBorders(){

      if(snake[0].x == width_ || snake[0].y == height_ || snake[0].x == 0 || snake[0].y == 0){
        alert("Border!")
      }
              
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
          new_one.x += 1;
      }  if(x_diff < 0){
        new_one.x -= 1;
      }  if(y_diff > 0){
        new_one.y += 1;
      }  if(y_diff < 0){
        new_one.y -= 1;
      }

      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
      snake.push(new_one);
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
              x: parseInt(Math.random() * width_) ,
              y: parseInt(Math.random() * height_) 
      };
  var direct = "right"

};
